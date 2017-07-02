import React from 'react';
import Anime from 'react-anime';
import PlayerDisplayTurnContainer from '../containers/PlayerDisplayTurnContainer';
import RoundDisplayContainer from '../containers/RoundDisplayContainer';
import VoteDisplayContainer from '../containers/VoteDisplayContainer';
import QuestResultAnimation from './QuestResultAnimation';
import SnackBar from 'react-material-snackbar';

const Gameboard = ({
  lobbyId,
  players,
  result,
  isFlipped,
  startFlipping,
  shuffle,
  startShuffling,
  questResult,
  gameState,
}) => (
  <div className={`game_board game_board_${Object.keys(players).length}`} >
    <div className="endGame">
      {result || null}
    </div>
    <div className="gameState">
      {
        gameState.state === 'choosing' ?
          <SnackBar
            show={true}
            timer={3000}
          >
            <h4>{players[gameState.turnOrder[gameState.questLeader]].name} will choose the players for the quest</h4>
          </SnackBar>
          : null
      }
    </div>

  <PlayerDisplayTurnContainer lobbyId={lobbyId} />
    <RoundDisplayContainer lobbyId={lobbyId} />
    <VoteDisplayContainer lobbyId={lobbyId} />
    <QuestResultAnimation
      isFlipped={isFlipped}
      startFlipping={startFlipping}
      shuffle={shuffle}
      startShuffling={startShuffling}
      questResult={questResult}
    />
  </div>
);

export default Gameboard;
