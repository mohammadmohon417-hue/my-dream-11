import { Suspense, useState } from "react";
import Hero from "./assets/component/hero";
import Navbar from "./assets/component/nav";
import Players from "./assets/component/players/players";
import type { Player } from "./assets/type/players";

import "./index.css";
import CTA from "./assets/component/cta";
import Footer from "./assets/component/footer";

const playersPromise = fetch("/players.json").then((response) => {
  if (!response.ok) {
    throw new Error("Failed to load players");
  }

  return response.json() as Promise<Player[]>;
});

function App() {
  const [coin, setCoin] = useState(2000);

  return (
    <>
      <Navbar coin={coin} />

      <Hero />

      <Suspense
        fallback={<div className="py-10 text-center">Loading players...</div>}
      >
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>

      <CTA />

      <Footer />
    </>
  );
}

export default App;
