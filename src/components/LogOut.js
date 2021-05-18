import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const LogOut = () => {
     
        return (
            <div className='container'>
                <div className='logout'>
                    <h1>now you can Logout from here</h1>
                    <button  className='logoutButton'><Link to="/Home">Logout</Link></button>
                </div>
                
            </div>
        )

}

export default LogOut
