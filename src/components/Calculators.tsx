import React from 'react'
import Section from './Section'
import Button from './Button'

import type { CalcVars } from '../types'

const investmentOptions = ["Bitcoin", "Ethereum", "Gold",] as const

export type InvestmentName = typeof investmentOptions[number]

export default function Calculators({ calcVars, setCalcVars, setResultsEnabled }:{calcVars:CalcVars, setCalcVars:React.Dispatch<React.SetStateAction<CalcVars>>, setResultsEnabled:React.Dispatch<React.SetStateAction<boolean>>}) {
  
  // input helper function
  function updateValue <key extends keyof CalcVars> (field:key, value: CalcVars[key]) {
    setResultsEnabled(false)
    setCalcVars(prev => ({...prev, [field]: value}))
  }

  return (
    <Section className="flex-col min-h-[60vh]">
      <div className='border border-white rounded-xl p-8 w-full bg-neutral-900/60 text-lg flex flex-col gap-2 mb-10 mt-20 max-w-5/10'>
        <label className='relative flex justify-between cursor-pointer'>
          <span className='mr-2'>Initial Investment:</span>
          <span className='absolute right-46 bottom-[1px] cursor-text'>$</span>
          <input type="number" id="initial" value={calcVars.initial} onChange={e => updateValue("initial", +e.target.value)} className="bg-gray-700/40 border border-white rounded pl-4 min-w-0 w-50"/>
        </label>
      
        <label className='relative flex justify-between cursor-pointer'>
          <span className='mr-2'>How many months back in time:</span>
          <input type="number" id="time" value={calcVars.time} onChange={e => updateValue("time", +e.target.value)} className="bg-gray-700/40 border border-white rounded pl-2 w-50"/>
          <span className='absolute right-3 cursor-text'>months</span>
        </label>
      
        <div>
          {investmentOptions.map(investment => (
            <label key={investment} className='cursor-pointer'>
                <input type="radio" name="investment" value={investment} checked={calcVars.investment === investment} onChange={e => updateValue("investment", e.target.value as InvestmentName)} className='mr-1'/>
                <span className='mr-3' >{investment}</span>
              </label>
          ))}
        </div>
      </div>    

      <Button text="Calcular" onClick={()=>setResultsEnabled(true)}></Button>
    </Section >
  )
}

