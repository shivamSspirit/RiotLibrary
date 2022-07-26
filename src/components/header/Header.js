import React, { useState, useEffect } from 'react'
import './header.css'
import Player from '../../asset/img/player.png'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

function Header() {
    const { authToken, handleLogout } = useAuth();

    // const [hoverState1, setHoverState1] = useState(false);
    // const [hoverState2, setHoverState2] = useState(false);
    // const [lStyle, setLstyle] = useState(null);
    // const [rStyle, setRstyle] = useState(null);
    const [pop, setTrue] = useState(false)


    // toggles for hover on each

    // const toggleHover1 = (e) => {
    //     setHoverState1(!hoverState1);
    // }

    // const toggleHover2 = (e) => {
    //     setHoverState2(!hoverState2);
    // }

    // hover effect for each

    // useEffect(() => {
    //     if (hoverState1) {
    //         setLstyle({ background: '#4528DC', color: 'white' })
    //     } else {
    //         setLstyle({ color: '' })
    //     }
    // }, [hoverState1])

    // useEffect(() => {
    //     if (hoverState2) {
    //         setRstyle({ background: '#4528DC', color: 'white' });
    //     } else {
    //         setRstyle({ color: '' })
    //     }
    // }, [hoverState2])

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
                            {authToken && (<button  onClick = {logout} className='auth-btn dropdown-item'>logout</button>)}
                        </div>

                        <div className="dropdown show">
                            <button onClick={() => setTrue(!pop)} className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Navs
                            </button>

                            <div className={`dropdown-menu ${pop && 'show openthis'}`} aria-labelledby="dropdownMenuLink">
                                <NavLink to={'/watchlater'} className='auth-btn dropdown-item'>Watchlater</NavLink>
                                <NavLink to={'/playlists'} className='auth-btn dropdown-item'>playlists</NavLink>
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
