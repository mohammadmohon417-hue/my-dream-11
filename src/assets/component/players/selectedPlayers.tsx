import type { Dispatch, SetStateAction } from "react";
import type { Player } from "../../type/players";

type SelectedPlayersProps = {
  selectedPlayer: Player[];
  setSelectedPlayer: Dispatch<SetStateAction<Player[]>>;
  setCoin: Dispatch<SetStateAction<number>>;
};

export function SelectedPlayers({
  selectedPlayer,
  setSelectedPlayer,
  setCoin,
}: SelectedPlayersProps) {
  const handleRemovePlayer = (player: Player) => {
    // Remove player from selected list
    setSelectedPlayer((previousPlayers) =>
      previousPlayers.filter((selected) => selected !== player),
    );

    // Return player's coins
    setCoin((previousCoin) => previousCoin + player.price);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {selectedPlayer.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
          <div className="mb-3 text-4xl">🏏</div>

          <h3 className="font-semibold text-gray-700">No Players Selected</h3>

          <p className="mt-1 text-sm text-gray-400">
            Choose players from the available players list.
          </p>
        </div>
      ) : (
        selectedPlayer.map((player, index) => (
          <div
            key={`${player.playerName}-${index}`}
            className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            {/* Player Info */}

            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={player.playerImage}
                  alt={player.playerName}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-900">
                  {player.playerName}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {player.playerType}
                </p>

                <p className="mt-1 text-xs text-gray-400">{player.origin}</p>
              </div>
            </div>

            {/* Price + Remove */}

            <div className="flex items-center gap-4">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-700">
                🪙 {player.price}
              </span>

              <button
                onClick={() => handleRemovePlayer(player)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
