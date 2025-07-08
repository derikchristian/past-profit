import { type ReactNode } from 'react'

export default function Section({ children, className="", id="" }:{children:ReactNode, className?:string, id?: string}) {
    
    return (
    <section className={`flex justify-center items-center w-full ${className}`} id={id}>
      {children}
    </section>
  )
}
