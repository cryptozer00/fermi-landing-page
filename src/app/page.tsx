import Meteors from "@/components/Meteor";
import DotPattern from "@/components/DotPattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
   <div className="h-screen w-screen flex flex-col p-0 bg-neutral-950">
      <Meteors/>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="fill-neutral-800 z-1"
      />
      <header className='h-16 p-4 z-10'>
        <nav className="flex h-full items-center justify-between">
          <div className="font-2xl font-bold">FERMI</div>
          <div className="flex items-center ">
            <a  href='https://fermi-dex.gitbook.io/fermi-dex-docs/' target='_blank' className="text-neutral-600 hover:text-neutral-300 duration-200 ease-out hover:bg-neutral-800/50 px-4 py-2 rounded-full ">
              Docs
            </a>
          </div>
        </nav>
      </header>
      <div className="flex-1 z-10 borderp-4 text-center flex items-center flex-col items-center justify-center">
          <h1 className="text-6xl font-extrabold text-neutral-100 mb-8 text-indigo-500"> FERMI DEX</h1>
          <div className="max-w-lg text-neutral-500 text-xl " >The portal to a new dimension of on-chain liquidity abstraction and <em className="text-yellow-500"> just-in-time </em> order settlement</div>
          <a href='https://devnet.fermilabs.xyz/' target="_blank" className="mt-4 rounded-full px-5 py-2.5 text-sm hover:scale-105 active:scale-95 duration-200 ease-out hover:bg-indigo-500 active:bg-indigo-700 bg-indigo-600">
            Start Trading (Beta) {'>'}
            </a>
      </div>
    </div>
  );
}
