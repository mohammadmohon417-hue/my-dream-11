import { Suspense, useState } from "react"
import Hero from "./assets/component/hero"
import Navbar from "./assets/component/nav"
import Players from "./assets/component/players/players"
import type { Player } from "./assets/type/players"

import "./index.css"
import CTA from "./assets/component/cta"
import Footer from "./assets/component/footer"

const playersPromise = async (): Promise<Player[]> => {
  const response = await fetch("/public/players.json")
  const data = await response.json()
  return data as Player[]
}

function App() {
  const [coin, setCoin]=useState(5000);
  return (
    <>
      <Navbar coin={coin} />
      <Hero />
      <Suspense fallback={<div>Loading players...</div>}>
        <Players playersPromise={playersPromise()} coin={coin} setCoin={setCoin} />
      </Suspense>
      <CTA></CTA>
      <Footer></Footer>
    </>
  )
}

export default App
