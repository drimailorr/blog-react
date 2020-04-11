import React from 'react'
import { connect } from 'react-redux'
import fetchPosts from '../actions'

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {

        const postsList = this.props.posts.map((post) => {
            return <p>{post.title}</p>
        })

        return (
            <div>
                {postsList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)