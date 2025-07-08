import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Calculators from './components/Calculators'
import Results from './components/Results'
import Section from './components/Section'
import type { CalcVars } from './types'

function App() {

  const [calcVars, setCalcVars] = useState<CalcVars>({
    initial: 1000,
    investment: "Bitcoin",
    time: 12
  })

  const [resultsEnabled, setResultsEnabled] = useState<boolean>(false)

  return (
    <div className="app text-neutral-300">
    <Header />
    <main className="min-h-screen bg-linear-to-br from-emerald-950 from-0% via-emerald-950 via-40% to-neutral-900 flex flex-col items-center px-5">
      <Hero />
      <Section className="flex-col min-h-screen" id="calculator">
        <Calculators calcVars={calcVars} setCalcVars={setCalcVars} setResultsEnabled={setResultsEnabled}/>
        <Results calcVars={calcVars} resultsEnabled={resultsEnabled}/>
      </Section>
    </main>
    <Footer/>
    </div>
  )
}

export default App
