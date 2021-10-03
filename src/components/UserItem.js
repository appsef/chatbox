import React from 'react'

const UserItem = ({ user }) => {
    return (
        <div className={`relative m-3 flex flex-row self-start py-3 ${user.status > 0 ? 'opacity-100' : 'opacity-30' } `}>
            <span class="flex h-3 w-3">
            <span class={`relative inline-flex rounded-full h-2 w-2 ${user.status > 0 ?'bg-green-400' : 'bg-red-400'} `}></span>
            </span>
            <img className="w-10 h-10 object-cover rounded-full" src={user.avatar} alt="" />
            <div className="flex flex-col self-center ml-2">
                <p className="font-lexend font-normal text-sm" >{user.first_name} {user.last_name}</p>
                <p className={`font-lexend font-normal text-xs  ${user.status > 0 ?'text-green-400' : 'text-red-400'} `} >
                    {user.status > 0 ? 'Online': 'Offline'}
                </p>
            </div>
        </div>
    )
}

export default UserItem
