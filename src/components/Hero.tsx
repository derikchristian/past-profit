import Button from './Button'
import Section from './Section'

export default function Hero() {
  return (
    <Section className='flex-col gap-4 mt-12 min-h-screen'>
        <h1 className='text-6xl'>Simple <span className='text-emerald-600'>Investment</span> Backtracker</h1>
        <p className='text-2xl mb-15'>See how much a investment would be worth!</p>
        <Button text={"Begin"} onClick={() => {
          window.location.href = '#calculator'
        }}/>
    </Section>
  )
}