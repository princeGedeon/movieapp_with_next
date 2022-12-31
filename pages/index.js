import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='border-2 px-3 py-5 text-center w-1/2 mx-auto'>
      <h1 className="font-bold">Hello <span className="text-red-300">World</span></h1>
    </div>
  )
}
