import type { InvestmentName } from "./components/Calculators";

export type CalcVars = {
    
  initial: number;
  investment: InvestmentName,
  time: number,
}

export type ResultsData = {
  
  investmentReturn: number;
  inflationPercentageLoss: number;
  returnValueAdjusted: number;
};