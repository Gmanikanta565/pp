// Write your code here
import './index.css'
const Commentitem = props => {
  const {eachitem, likeactivity, deleteelement} = props
  const {id, name, comment, isactive, classc} = eachitem
  const like = isactive
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likechange = () => {
    likeactivity(id)
  }
  const deletef = () => {
    deleteelement(id)
  }

  return (
    <div>
      <li>
        <div className="carditem">
          <p className={classc}>{name[0]}</p>
          <p>{name}</p>
          <p>time</p>
        </div>
        <p>{comment}</p>
        <div className="btn">
          <button type="button" className="btnb" onClick={likechange}>
            <img src={like} alt="like" />
          </button>
          <button type="button" className="btnb" onClick={deletef}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default Commentitem
