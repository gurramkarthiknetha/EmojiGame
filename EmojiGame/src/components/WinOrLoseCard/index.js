// WinOrLoseCard.js
import './index.css'

const WinOrLoseCard = props => {
  const {score, gameOver, playAgain} = props
  const playAgainBtn = () => {
    playAgain()
  }

  return (
    <div className="resultContainer">
      {score === 12 ? (
        <>
          <div className="scoreContainer2">
            <h1 className="gameResult">You Won</h1>
            <p className="scoreinwords">Best Score</p>
            <p className="score">12/12</p>
            <button type="button" onClick={playAgainBtn} className="btn">
              Play Again
            </button>
          </div>
          <div className="imgContainer">
            <img
              className="img"
              alt="win or lose"
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            />
          </div>
        </>
      ) : (
        <>
          <div className="scoreContainer2">
            <h1 className="gameResult">You lose</h1>
            <p className="scoreinwords">Score</p>
            <p className="score">{score}/12</p>
            <button type="button" onClick={playAgainBtn} className="btn">
              Play Again
            </button>
          </div>
          <div className="imgContainer">
            <img
              className="img"
              alt="win or lose"
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default WinOrLoseCard
