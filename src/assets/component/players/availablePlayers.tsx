import type { Dispatch, SetStateAction } from "react";
import { PlayerCard } from "./playerCard";
import type { Player } from "../../type/players";

type AvailablePlayersProps = {
  players: Player[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: Player[];
  setSelectedPlayer: Dispatch<SetStateAction<Player[]>>;
};

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player, index) => (
        <PlayerCard
          key={player.playerName ?? index}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer as Dispatch<SetStateAction<object[]>>}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;