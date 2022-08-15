import React from 'react'
import './land.css'
import {Link} from 'react-router-dom'

function Land() {
    return (
        <div>
            <div className='img-container'>
                <div className='img-content'>
                    <div className='land-parts'>
                        <div className='part-1'>
                            <h3 className='img-title'>
                                RIOT GAMES
                            </h3>
                        </div>
                        <div className='part-2'>
                            <h1 className='des'>
                                These are legends: from kanya and yaaman
                            </h1>
                        </div>
                        <div className='part-3'>
                            <p className='content-paragraph'>
                                watch latest game for this
                            </p>
                        </div>
                        <div className='part-4'>
                            <Link to="/videos" className='content-btn'>Explore now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Land

