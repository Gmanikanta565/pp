import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Commentitem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    listc: [],
    name: '',
    comment: '',
    num: 0,
  }
  deleteelement = id => {
    const {listc} = this.state
    const ll = listc.filter(each => each.id !== id)
    this.setState({listc: ll})
  }

  likeactivity = id => {
    this.setState(prevState => ({
      listc: prevState.listc.map(eachContact => {
        if (id === eachContact.id) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isactive: !eachContact.isactive}
        }
        return eachContact
      }),
    }))
  }
  onchangename = event => this.setState({name: event.target.value})

  onchangecomment = event => this.setState({comment: event.target.value})

  onAddContact = event => {
    event.preventDefault()
    const {name, comment, num} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isactive: false,
      classc: initialContainerBackgroundClassNames[num],
    }
    this.setState(prevState => ({
      listc: [...prevState.listc, newComment],
      num: prevState.num + 1,
      name: '',
      comment: '',
    }))
  }

  render() {
    const {listc, name, comment} = this.state
    const lenlist = listc.length

    return (
      <div className="bg">
        <div>
          <div className="card">
            <div>
              <form onSubmit={this.onAddContact} className="forme">
                <h1>Comments</h1>
                <p>Say something about 4.0 Technologies</p>
                <input
                  type="search"
                  onChange={this.onchangename}
                  className="name"
                  value={name}
                  placeholder="Your Name"
                />
                <textarea
                  type="search"
                  onChange={this.onchangecomment}
                  className="comment"
                  value={comment}
                  placeholder="Your Comment"
                />
                <button type="submit">Add Comment</button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
          <div>
            <div className="cdiv">
              <p className="c">{lenlist}</p>
              <p> Comments</p>
            </div>
            <div>
              <ul>
                {listc.map(each => (
                  <Commentitem
                    eachitem={each}
                    likeactivity={this.likeactivity}
                    deleteelement={this.deleteelement}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Comments
