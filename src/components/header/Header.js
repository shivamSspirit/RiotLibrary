import React from 'react'
import './header.css'
import Player from '../../asset/img/player.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Header() {
    const encodedToken = localStorage.getItem('token')
    return (
        <div>
            <div className='header-container'>
                <div className='header'>
                    <div className='head-part-1'>
                        <Link to='/'>
                            <img src={Player} alt="" />
                        </Link>
                    </div>

                    <div className='head-part-2'>
                        <Link to={'/watchlater'} className='auth-btn'>Watchlater</Link>
                        <Link to={'/playlists'} className='auth-btn'>playlists</Link>
                        {!encodedToken && (<Link to='/auth/login' className='auth-btn'>login</Link>)}
                        {encodedToken && (<Link to='/' className='auth-btn'>logout</Link>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
