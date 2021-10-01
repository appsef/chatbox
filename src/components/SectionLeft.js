import React from 'react'
import ListItem from './ListItem'

const SectionLeft = ({ selected, setSelected }) => {


    const tabs = [{title: 'Your Feed', id: 0}, {title: 'Channels', id: 1},{title: 'Threads', id: 2},{title: 'Friends', id: 3},
    {title: 'Saved Posts', id: 4},{title: 'Profile', id: 5}]

    return (
        <section className=" col-span-1  h-screen  sticky top-0 bottom-0 left-0 flex flex-row content-center">
            <ul className="self-center mx-auto">
                {tabs.map( tab => (
                    <ListItem key={tab.id} item={tab} selected={selected} setSelected={setSelected} />
                ) )}
            </ul>

        </section>
    )
}

export default SectionLeft
