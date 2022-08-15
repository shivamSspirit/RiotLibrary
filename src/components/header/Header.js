import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import Player from '../../asset/img/player.png'
import { useAuth } from '../../context/authContext'

function Header() {
    const { authToken, handleLogout } = useAuth();
    const [pop, setTrue] = useState(false)

    const logout = () => {
        handleLogout()
    }

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
                        <div className='navs'>
                            <NavLink to={'/watchlater'} className='auth-btn dropdown-item'>Watchlater</NavLink>
                            <NavLink to={'/playlists'} className='auth-btn dropdown-item'>playlists</NavLink>
                            {!authToken && (<NavLink to='/auth/login' className='auth-btn dropdown-item'>login</NavLink>)}
                            {authToken && (<button onClick={logout} className='auth-btn dropdown-item'>logout</button>)}
                        </div>

                        <div className="dropdown show">
                            <button onClick={() => setTrue(!pop)} className="btn auth-btn btn-transparent dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </button>

                            <div className={`dropdown-menu ${pop && 'show openthis'}`} aria-labelledby="dropdownMenuLink">
                                <NavLink to={'/watchlater'} className='auth-btn dropdown-item'>Watchlater</NavLink>
                                <NavLink to={'/playlists'} className='auth-btn dropdown-item'>playlists</NavLink>
                                <NavLink to={'/history'} className='auth-btn dropdown-item'>history</NavLink>
                                <NavLink to={'/likes'} className='auth-btn dropdown-item'>likes</NavLink>
                                {!authToken && (<NavLink to='/auth/login' className='auth-btn dropdown-item'>login</NavLink>)}
                                {authToken && (<button onClick={logout} className='auth-btn dropdown-item'>logout</button>)}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
