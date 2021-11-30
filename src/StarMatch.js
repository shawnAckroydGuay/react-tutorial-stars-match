import React from 'react';
import PlayNumber from './components/PlayNumber';
import StarsDisplay from './components/StarsDisplay';
import './StarMatch.css';
import { colors, utils } from './utils/utils';

const StarMatch = () => {
  const maxStarCount = 9;
  const btnQty = 9;
  const [stars, setStars] = React.useState(utils.random(1, maxStarCount));
  const [availableNumbers, setAvailableNumbers] = React.useState(utils.range(1, 9));
  const [candidatesNumbers, setCandidatesNumbers] = React.useState([]);
  const gameIsWin = availableNumbers.length == 0;

  const isCandidatesAreWrong = utils.sum(candidatesNumbers) > stars;

  const getStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }
    if (candidatesNumbers.includes(number)) {
      return isCandidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == "used") {
      return;
    }
    const newCandidateNums = candidatesNumbers.concat(number);
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidatesNumbers(newCandidateNums);
    } else {
      const newAvailablesNums = availableNumbers.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailablesNums, maxStarCount));
      setAvailableNumbers(newAvailablesNums);
      setCandidatesNumbers([]);
    }


  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {
            gameIsWin 
            ? <div>You win!</div>
            : <StarsDisplay starCount={stars}/>
          }
        </div>
        <div className="right">
          {
            utils.range(1, btnQty).map(number =>
              <PlayNumber
                key={number}
                number={number}
                status={getStatus(number)}
                onNumberClick={onNumberClick}
              />
            )
          }
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

export default StarMatch;
