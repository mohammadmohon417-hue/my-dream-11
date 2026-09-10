import {
  use,
  useState,
  type ComponentType,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Player } from "../../type/players";
import AvailablePlayers from "./availablePlayers";
import { SelectedPlayers } from "./selectedPlayers";

const AvailablePlayersWithWallet =
  AvailablePlayers as unknown as ComponentType<{
    players: Player[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayer: Player[];
    setSelectedPlayer: Dispatch<SetStateAction<Player[]>>;
  }>;

interface playersProps {
  playersPromise: Promise<Player[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer?: Player[];
  setSelectedPlayer?: Dispatch<SetStateAction<Player[]>>;
}

const Players = ({ playersPromise, coin, setCoin }: playersProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState<"available" | "selected">(
    "available",
  );
  const [selectedPlayer, setSelectedPlayer] = useState<Player[]>([]);

  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {buttonType === "available"
                ? "Available Players"
                : "Selected Players"}
            </h1>

            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
              {players.length} Players
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Choose your favorite players and build your dream team.
          </p>
        </div>

        <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
          <button
            onClick={() => setButtonType("available")}
            className={` 
              px-5 py-2.5 
              rounded-lg 
              font-semibold 
              text-sm 
              transition-all 
              duration-200 
              ${
                buttonType === "available"
                  ? "bg-yellow-400 text-black shadow-sm"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              } 
            `}
          >
            Available
          </button>

          <button
            onClick={() => setButtonType("selected")}
            className={` 
              px-5 py-2.5 
              rounded-lg 
              font-semibold 
              text-sm 
              transition-all 
              duration-200 
              ${
                buttonType === "selected"
                  ? "bg-yellow-400 text-black shadow-sm"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              } 
            `}
          >
            Selected
          </button>
        </div>
      </div>

      {buttonType === "available" ? (
        <AvailablePlayersWithWallet
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      ) : (
        <SelectedPlayers
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          setCoin={setCoin}
        />
      )}
    </div>
  );
};

export default Players;
