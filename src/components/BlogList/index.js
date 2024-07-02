import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {bloglist: [], isLoading: true}

  componentDidMount() {
    this.gettotallist()
  }

  gettotallist = async () => {
    const list = await fetch('https://apis.ccbp.in/blogs')
    const decodedlist = await list.json()
    const newlist = decodedlist.map(element => ({
      id: element.id,
      title: element.title,
      imageUrl: element.image_url,
      avatarUrl: element.avatar_url,
      author: element.author,
      topic: element.topic,
    }))
    this.setState({bloglist: newlist, isLoading: false})
  }

  renderlistitems = () => {
    const {bloglist} = this.state
    return (
      <ul className="list-container">
        {bloglist.map(element => (
          <BlogItem item={element} key={element.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderlistitems()
        )}
      </div>
    )
  }
}
export default BlogList
