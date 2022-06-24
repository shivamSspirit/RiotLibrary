import React, { useState, useEffect } from 'react'
import './header.css'
import Player from '../../asset/img/player.png'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

function Header() {
    const { authToken } = useAuth();

    const [hoverState1, setHoverState1] = useState(false);
    const [hoverState2, setHoverState2] = useState(false);
    const [lStyle, setLstyle] = useState(null);
    const [rStyle, setRstyle] = useState(null);
    const [pop, setTrue] = useState(false)


    // toggles for hover on each

    const toggleHover1 = (e) => {
        setHoverState1(!hoverState1);
    }

    const toggleHover2 = (e) => {
        setHoverState2(!hoverState2);
    }

    // hover effect for each

    useEffect(() => {
        if (hoverState1) {
            setLstyle({ background: '#4528DC', color: 'white' })
        } else {
            setLstyle({ color: '' })
        }
    }, [hoverState1])

    useEffect(() => {
        if (hoverState2) {
            setRstyle({ background: '#4528DC', color: 'white' });
        } else {
            setRstyle({ color: '' })
        }
    }, [hoverState2])


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
                            {authToken && (<NavLink to='/' className='auth-btn dropdown-item'>logout</NavLink>)}
                        </div>

                        <div class="dropdown">
                            {/* data-toggle="modal" data-target="#plylist" */}
                            <a onClick={() => setTrue(!pop)} class="btn btn-secondary dropdown-toggle" data-target="#d-menu" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Navs
                            </a>
                            {pop && (
                                <div data-offset={0} style={{ borderRadius: '6px' }} class="dropdown-menu"  aria-labelledby="">
                                    <NavLink style={lStyle} onMouseEnter={toggleHover1} onMouseLeave={toggleHover1} to={'/watchlater'} className='auth-btn dropdown-item'>Watchlater</NavLink>
                                    <NavLink style={rStyle} onMouseEnter={toggleHover2} onMouseLeave={toggleHover2} to={'/playlists'} className='auth-btn dropdown-item'>playlists</NavLink>
                                    {!authToken && (<NavLink to='/auth/login' className='auth-btn dropdown-item'>login</NavLink>)}
                                    {authToken && (<NavLink to='/' className='auth-btn dropdown-item'>logout</NavLink>)}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
