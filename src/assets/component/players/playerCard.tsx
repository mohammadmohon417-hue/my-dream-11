import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

type Player = {
  playerType?: string;
  price?: number;
  playerImage?: string;
  playerName?: string;
  origin?: string;
  battingStyle?: string;
  bowlingStyle?: string;
};

type PlayerCardProps = {
  player: Player;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer:object[];
  setSelectedPlayer: Dispatch<SetStateAction<object[]>>
};

export function PlayerCard({
  player,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}: PlayerCardProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCoin = () => {
    if (isSelected) return;

    const playerPrice = player.price ?? 0;
    const newPrice = coin - playerPrice;

    if (newPrice >= 0) {
      setIsSelected(true);
      setCoin(newPrice);
      setSelectedPlayer((prevSelectedPlayers) => [
        ...prevSelectedPlayers,
        { ...player },
      ]);
      toast.success(`${player.playerName ?? "Player"} purchased successfully`);
      return;
    }

    toast.error("Coin is not enough");

// selected player
setSelectedPlayer([...selectedPlayer,player])



  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
      <div className="relative h-64 overflow-hidden bg-linear-to-br from-gray-100 via-white to-yellow-100">
        <div className="absolute left-3 top-3 z-10">
          <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            {player.playerType}
          </span>
        </div>

        <div className="absolute right-3 top-3 z-10">
          <div className="flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1.5 text-sm font-bold text-black shadow">
            🪙 {player.price}
          </div>
        </div>

        <img
          src={player.playerImage}
          alt={player.playerName || "Player"}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/30 to-transparent"></div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">
          {player.playerName || "Player Name"}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <img
            className="h-5 w-7.5"
            src="https://cdn.britannica.com/67/6267-050-8A26DFEE/Flag-Bangladesh.jpg"
            alt="flag"
          />
          <span>{player.origin}</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-3">
            <p className="text-xs text-gray-400">Batting</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
              {player.battingStyle}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3">
            <p className="text-xs text-gray-400">Bowling</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
              {player.bowlingStyle}
            </p>
          </div>
        </div>

        <div className="my-5 border-t border-gray-100"></div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Player Price</p>
            <p className="text-lg font-bold text-gray-900">
              {player.price} Coins
            </p>
          </div>

          <button
            onClick={handleCoin}
            className="rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:bg-yellow-500 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}