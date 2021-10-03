import React from 'react'

const AddPost = () => {
    return (
        <div className="w-full px-10 mb-4">
            <div className="w-full rounded-2xl border-2 border-opacity-50 border-weta flex flex-row justify-between px-6 py-4">
                <p className="self-center font-lexend font-medium">
                Hi, Create a new post?
                
                </p>
                <a  href="#" className="font-lexend uppercase tracking-wider px-4 py-2 bg-weta rounded-xl hover:bg-gray-400 text-white">Create
                <svg className="inline ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>
                </a>
            </div>
        </div>
    )
}

export default AddPost
