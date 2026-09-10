import { PlayerCard } from "./playerCard";
import type { Dispatch, SetStateAction } from "react";

type Player = {
  playerName?: string;
  playerType: string;
  price?: number;
  playerImage: string;
  origin: string;
  battingStyle: string;
  bowlingStyle: string;
};

type AvailablePlayersProps = {
  players: Player[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: object[];
  setSelectedPlayer: Dispatch<SetStateAction<object[]>>;
};

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player, index) => (
        <PlayerCard
          key={player.playerName || index}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
