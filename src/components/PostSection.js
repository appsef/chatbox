import React from 'react'
import Post from './Post'
import posts from './posts.json'
import AddPost from './AddPost'


const PostSection = () => {


    return (
        <div className="col-span-4 md:col-span-3  flex flex-col pt-20">
        <AddPost />
        {posts.map(post => ( <Post post={post}/> ))}
        </div>
    )
}

export default PostSection
