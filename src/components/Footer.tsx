import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='flex justify-between items-center py-2 bg-black'>
    <p className='text-3xl font-bold text-white/20 ml-10'>DCh</p>
    <a href="https://github.com/derikchristian/past-profit" target='_blank' className='text-xl mr-10 hover:text-white/50'><FaGithub /></a>
    </footer>
  )
}
