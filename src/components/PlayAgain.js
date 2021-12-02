const PlayAgain = (props) => {
  return (
    <div className='game-done'>
      <div className="message">
        {props.gameStatus === "lost" ? "Game over" : "Nice"}
      </div>
      <button onClick={props.onClick}>PlayAgain</button>
    </div>
  );
};

export default PlayAgain;
