import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    emojisList: this.props,
    score: 0,
    topScore: 0,
    clickedEmojies: [],
    gameOver: false,
  }

  componentDidMount() {
    const {emojisList} = this.props
    this.setState({emojisList})
  }

  shuffledEmojisListFun = () => {
    const {emojisList} = this.state
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {clickedEmojies, emojisList} = this.state
    if (clickedEmojies.includes(id)) {
      this.setState({
        gameOver: true,
      })
    } else if (clickedEmojies.length === emojisList.length - 1) {
      const {score, topScore} = this.state

      const shuffledEmojisList = this.shuffledEmojisListFun()
      const updatedclickedEmojies = [...clickedEmojies, id]
      const newScore = score + 1
      let newTopScore = topScore
      if (newScore >= topScore) {
        newTopScore = newScore
      }
      this.setState({
        clickedEmojies: updatedclickedEmojies,
        emojisList: shuffledEmojisList,
        score: newScore,
        topScore: newTopScore,
        gameOver: true,
      })
    } else {
      const {score, topScore} = this.state
      const shuffledEmojisList = this.shuffledEmojisListFun()
      const updatedclickedEmojies = [...clickedEmojies, id]
      const newScore = score + 1
      let newTopScore = topScore
      if (newScore >= topScore) {
        newTopScore = newScore
      }
      this.setState({
        clickedEmojies: updatedclickedEmojies,
        emojisList: shuffledEmojisList,
        score: newScore,
        topScore: newTopScore,
      })
    }
  }

  playAgain = () => {
    this.setState({
      clickedEmojies: [],
      emojisList: this.shuffledEmojisListFun(),
      score: 0,
      gameOver: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, gameOver, clickedEmojies} = this.state

    return (
      <div className="bgContainer">
        <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        <div className="gameContainer">
          {gameOver ? (
            <WinOrLoseCard
              score={score}
              gameOver={gameOver}
              playAgain={this.playAgain}
            />
          ) : (
            <ul className="emojieContainer">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  onClickEmoji={this.onClickEmoji}
                  emojiDetails={each}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
