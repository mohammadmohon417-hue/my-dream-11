import {
  use,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { Player } from "../../type/players";
import AvailablePlayers from "./availablePlayers";
import { SelectedPlayers } from "./selectedPlayers";

interface PlayersProps {
  playersPromise: Promise<Player[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({
  playersPromise,
  coin,
  setCoin,
}: PlayersProps) => {
  const players = use(playersPromise);

  const [buttonType, setButtonType] = useState<
    "available" | "selected"
  >("available");

  const [selectedPlayer, setSelectedPlayer] = useState<Player[]>([]);

  return (
    <div
      id="players"
      className="container mx-auto mt-8 px-5 md:px-10 lg:px-20"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {buttonType === "available"
                ? "Available Players"
                : "Selected Players"}
            </h1>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
              {buttonType === "available"
                ? `${players.length} Players`
                : `${selectedPlayer.length} Selected`}
            </span>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Choose your favorite players and build your dream team.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setButtonType("available")}
            className={`
              rounded-lg px-5 py-2.5
              text-sm font-semibold
              transition-all duration-200
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
              rounded-lg px-5 py-2.5
              text-sm font-semibold
              transition-all duration-200
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

      {/* Content */}
      {buttonType === "available" ? (
        <AvailablePlayers
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