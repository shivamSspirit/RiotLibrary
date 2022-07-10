import React from 'react'
import './land.css'
import {Link} from 'react-router-dom'

function Land() {
    return (
        <div>
            <div className='img-container'>
                {/* <img className='land-img' src={LandImg} alt="" />k */}
                <div className='img-content'>
                    <div className='parts'>
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
                                watch live match for this
                            </p>
                        </div>
                        <div className='part-4'>
                            <Link to="/videos" className='content-btn'>Watch now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Land

