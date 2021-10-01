import React from 'react'

const ListItem = ({ item, selected, setSelected }) => {

    

    const handleClick =() => {
        setSelected(item.id)
    }

    const getIcon = (id) => {
        
        if (id === 0) {
            return(
                <svg className={`inline self-center fill-current  group-hover:text-weta ${selected === item.id ? 'text-weta' : 'text-gray-400'} ` } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zM6 7v2h8V7H6zm0 4v2h8v-2H6zm0 4v2h5v-2H6z" /></svg>
            )
        }
        if (id === 1) {
            return(<svg className={`inline self-center fill-current  group-hover:text-weta ${selected === item.id ? 'text-weta' : 'text-gray-400'} ` } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" /></svg>)
        }
        if (id === 2) {
            return(<svg className={`inline self-center fill-current  group-hover:text-weta ${selected === item.id ? 'text-weta' : 'text-gray-400'} ` } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.8 19L14 22.5 11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z"/></svg>)
        }
        if (id === 3) {
            return(<svg className={`inline self-center fill-current  group-hover:text-weta ${selected === item.id ? 'text-weta' : 'text-gray-400'} ` } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z" /></svg>)
        }
        if (id === 4) {
            return(<svg className={`inline self-center fill-current  group-hover:text-weta ${selected === item.id ? 'text-weta' : 'text-gray-400'} ` } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 2h16a1 1 0 0 1 1 1v19.276a.5.5 0 0 1-.704.457L12 19.03l-8.296 3.702A.5.5 0 0 1 3 22.276V3a1 1 0 0 1 1-1zm8 11.5l2.939 1.545-.561-3.272 2.377-2.318-3.286-.478L12 6l-1.47 2.977-3.285.478 2.377 2.318-.56 3.272L12 13.5z" /></svg>)
        }
        if (id === 5) {
            return(<svg className={`inline self-center fill-current  group-hover:text-weta ${selected === item.id ? 'text-weta' : 'text-gray-400'} ` } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 20h14v2H5v-2zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /></svg>)
        }
        
    }

    return (
        <li onClick={handleClick} className="my-6 group cursor-pointer">
            {getIcon(item.id)}
            <a  href="#" className={ `ml-4 font-lexend hidden md:inline font-bold text-sm md:text-base  lg:text-lg group-focus:text-weta group-hover:text-weta ${selected === item.id ? 'text-weta' : 'text-gray-400'}`}>{item.title}</a>
        </li>
    )
}

export default ListItem
