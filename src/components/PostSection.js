import React from 'react'
import Post from './Post'
import users from './users.json'
import posts from './posts.json'


const PostSection = () => {


    return (
        <div className="col-span-4 md:col-span-3  flex flex-col pt-20">
        {posts.map(post => ( <Post post={post}/> ))}
        </div>
    )
}

export default PostSection
