import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { userid } = useParams()

    return(
        <>
        <div 
        className='text-2xl text-center text-orange-400 bg-amber-950 p-4'> 
        Hello User : { userid } ! !</div>
        </>
    )
}

export default User