// MiniMap.tsx

import React from 'react';
import { GameMap, Player } from './Game';

type Props = {
    Map: GameMap;
    playerList: Player[];
    closeMiniMap: () => void;
};

const MiniMap: React.FC<Props> = ({ Map, playerList, closeMiniMap }) => {
    if (!Map) {
        return <div>Loading MiniMap...</div>;
    }

    return (
        <div className="MapDisplay-map-container" onClick={closeMiniMap}>
            {Map.map.map((row, rowIndex) => (
                <div key={rowIndex} className="MapDisplay-row">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className={`MapDisplay-cell ${cell ? 'walkable' : 'obstacle'} ${playerList &&
                        playerList.some((player) => player.x === cellIndex && player.y === rowIndex) ? 'player' :''} '}`}/>
                    ))}
                </div>
            ))}

        </div>
    );
};

export default MiniMap;
