import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {item} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = item
  return (
    <li className="items-container">
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="sub-item">
          <img src={imageUrl} alt={title} className="contents-icon" />
          <div className="content-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="horizantal">
              <img src={avatarUrl} className="avator-icon" alt={author} />
              <p className="topic space">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
