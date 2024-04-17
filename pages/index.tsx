import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full p-2 ">
      <div >
        <h1 className="text-2xl text-blue-500 font-semibold uppercase mb-4 text-center" >mi proyecto personal</h1>
        <div className="grid place-content-center gap-5 ">
          <Link href="/producto-uno">
          <button className="p-3 bg-blue-400 rounded-md shadow-md text-white font-semibold">producto 1</button>
          </Link>
          <Link href="/producto-dos">
          <button className="p-3 bg-red-400 rounded-md shadow-md text-white font-semibold">producto 2</button>
          </Link>
        </div>

      </div>
    </main>
  )
}
