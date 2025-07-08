export default function Button({ text, onClick }:{text: string, onClick: () => void}) {
  return (
    <button onClick={onClick} className='border-2 border-white rounded-full h-10 w-2xs self-center hover:bg-emerald-700 transition-colors duration-100'>
        <p>{text}</p>
    </button>
  )
}



