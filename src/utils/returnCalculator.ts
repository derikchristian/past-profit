import type { CalcVars, ResultsData } from "../types";
import type { InvestmentName } from "../components/Calculators";

const presentDateValue = new Date().toISOString().split("T")[0].slice(0, 7);

async function fetchInvestmentPriceMultiplier (investmentName: InvestmentName, dateValue: string) {

    const symbolHashMap: Record<string, string> = {
        "Bitcoin": "BTC/USD",
        "Ethereum": "ETH/USD",
        "Gold": "XAU/USD",
    }

    const API_KEY = import.meta.env.VITE_TWELVE_API_KEY;
    
    const res = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbolHashMap[investmentName]}&interval=1month&start_date=${dateValue}&apikey=${API_KEY}`);
    const data = await res.json();

    const presentPrice = parseFloat(data.values[0].close);
    const pastPrice = parseFloat(data.values[data.values.length -1].close);

    if(!presentPrice) throw new Error("Present price is not present");
    if(!pastPrice) throw new Error("Past price is not present");
    
    return presentPrice / pastPrice;
}

async function fetchInflationMultiplier(date: string) {

    // This API only updates at the end of the year, which makes the inflation calculation less accurate.
    // I chose it because other APIs didn't support CORS. 
    // Later, I plan to implement a more accurate source via a small backend service.
    const res = await fetch(`https://api.worldbank.org/v2/country/US/indicator/FP.CPI.TOTL?format=json&date=${date.slice(0, 4)}:${presentDateValue.slice(0, 4)}`);

    const resJson = await res.json();
    const data = resJson[1];

    const presentValue = parseFloat(data[0].value);
    const pastValue = parseFloat(data[data.length -1].value);

    return pastValue / presentValue;
    
}

export default async function calculate ({initial, investment, time}:CalcVars) {

    // convert date to the required format for the API
    const pastDate = new Date();
    pastDate.setMonth(pastDate.getMonth() - time);
    const pastDateValue = pastDate.toISOString().split("T")[0].slice(0, 7);

    const priceMultiplier = await fetchInvestmentPriceMultiplier(investment, pastDateValue);
    const inflationMultiplier = await fetchInflationMultiplier(pastDateValue);

    const resultsData: ResultsData = {investmentReturn: initial * priceMultiplier, inflationPercentageLoss: (1 - inflationMultiplier), returnValueAdjusted: initial * priceMultiplier * inflationMultiplier};
    
    return resultsData;
}
    


