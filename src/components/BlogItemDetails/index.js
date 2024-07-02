import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemList extends Component {
  state = {item: {}, isLoading: true}

  componentDidMount() {
    this.fetchblogitem()
  }

  fetchblogitem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const element = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const contents = await element.json()
    const newobj = {
      id: contents.id,
      title: contents.title,
      imageUrl: contents.image_url,
      avatarUrl: contents.avatar_url,
      author: contents.author,
      content: contents.content,
      topic: contents.topic,
    }
    this.setState({item: newobj, isLoading: false})
  }

  getiteemdetails = () => {
    const {item} = this.state
    const {id, title, imageUrl, avatarUrl, author, content, topic} = item
    return (
      <div className="details-container">
        <h1 className="details-title">{title}</h1>
        <div className="details-username-container">
          <img src={avatarUrl} alt={author} className="avator-icon" />
          <p className="author-text">{author}</p>
        </div>
        <img src={imageUrl} className="details-item-icon" alt={title} />
        <p className="item-description">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="item-details-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.getiteemdetails()
        )}
      </div>
    )
  }
}
export default BlogItemList
