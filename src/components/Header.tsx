export default function Header() {
  return (
    <header className="bg-black text-gray-200 font-semibold fixed top-0 z-1 text-lg w-full flex justify-start items-center px-10 h-18 gap-4">
        <img src="src/assets/favicon-32x32.png" alt="Logo" className='inline-block'></img>
        <p className='inline text-3xl '>Past<span className='text-emerald-600 ml-1'>Profit</span></p>
    </header>
  )
}