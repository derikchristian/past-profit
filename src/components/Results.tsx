import { useEffect, useState } from 'react'
import calculateReturn from "../utils/returnCalculator.ts"

import type { CalcVars, ResultsData } from '../types'
import Section from './Section.tsx';

const toDollar = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD",}).format

export default function Results({ calcVars, resultsEnabled }:{calcVars:CalcVars, resultsEnabled:boolean}) {
  
  const [resultsData, setResultsData] = useState<null | ResultsData>(null);

   useEffect(() => {
    if (resultsEnabled) {
      calculateReturn(calcVars).then(setResultsData)
    }
   }, [resultsEnabled])

  return (
    <Section className='flex-col min-h-[40vh] mb-40'>
      <h2 className='mb-6 text-2xl'>Results</h2>
      <div className='flex flex-col items-center justify-center border border-white rounded-xl p-8 w-full bg-neutral-900/60 text-lg gap-2 min-h-50 max-w-8/10'>
      { resultsEnabled && resultsData &&
        <>
        <p> If you invested {toDollar(calcVars.initial)} in {calcVars.investment} {calcVars.time} month{calcVars.time === 1? "" : "s"} ago, today you would have {toDollar(resultsData.investmentReturn)}</p>
          {resultsData.inflationPercentageLoss !== 0 &&
            <>
            <p className='font-bold'>BUT</p>
            <p> In this time inflation reduced the value of money by {(resultsData.inflationPercentageLoss * 100).toFixed(2)}%, meaning your investment would only equate {toDollar(resultsData.returnValueAdjusted)} from the time you did it.</p>
            <p></p>
            </>
          }
        </>
      }
      </div>
    </Section>
  )
}
