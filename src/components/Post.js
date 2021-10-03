import React from 'react'

const Post = ({post}) => {

    return (
        <div className="flex flex-col justify-evenly content-center px-10 py-4">
            <img src={post.download_url} className="object-cover object-center w-full h-96 rounded-xl "  alt="" />
            <div className="flex flex-row justify-between">
            <p className="font-lexend text-xl font-medium mt-4">
            <svg className="inline mr-2 self-center fill-current text-weta " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM4 7v2h3V7H4zm0-5h6v2H4V2z"/></svg>
            {post.author}</p>
            <a href={post.url} target="_blank" className="font-lexend text-xs bg-black hover:bg-weta w-max px-3 py-2 rounded-lg font-medium text-white mt-4" >
            <svg className="inline mr-2 self-center fill-current text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M8.5 11v5h7v-5H21v10H3V11h5.5zm7-8v5h-7V3h7z"/></svg>
             Unsplash</a>
            </div>
            <div className="w-full h-1 bg-gray-200 mt-4"> </div>
        </div>
    )
}

export default Post
