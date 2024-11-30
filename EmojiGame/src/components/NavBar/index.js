// NavBar.js
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  
  return (
    <nav className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="font">Emoji Game</h1>
      </div>
      {!gameOver && (
        <div className="scoreContainer">
          <p className="font">Score: {score}</p>
          <p className="font">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
