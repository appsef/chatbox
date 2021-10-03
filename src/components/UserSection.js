import React from 'react'
import UserItem from './UserItem'
import users from './users.json'

const UserSection = () => {
    return (
        <section className="col-span-1 hidden md:flex h-screen flex-row content-center sticky left-0 top-0 bottom-0 ">
            <ul className="self-center mx-auto content-start ">
                {users.map(user => (
                    <UserItem user={user} />
                ))}
            </ul>
        </section>
    )
}

export default UserSection
