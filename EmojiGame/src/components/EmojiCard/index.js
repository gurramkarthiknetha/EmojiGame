// EmojiCard.js
import './index.css'

const EmojiCard = props => {
  const {onClickEmoji, emojiDetails} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmojiItem = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emojiContainer">
      <button type="button" onClick={onClickEmojiItem} className="emojiBtn">
        <img className="emoji" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
