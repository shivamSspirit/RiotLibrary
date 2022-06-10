import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// "react-icons": "^4.3.1",
//     "react-player": "^2.10.0",
//     "react-router-dom": "^6.2.2",
//     "react-scripts": "4.0.3",
//     "react-toastify": "^8.2.0",
//     "use-local-storage": "^2.3.6",
    // "uuid": "^8.3.2",

// importing all the themes pages
import LandingPage from "../pages/landingPage";
import SignUp from "../components/auth/signup/signup";
import Login from "../components/auth/login/login";
import TrendingPage from "../pages/trendingPage";
import SenSitara from "../pages/senSitara";
import WatchLater from "../pages/watchlater";
import PlayListModal from "../components/playlistmanagment/playlistmodal/playlistmodal";
import PlaylistPage from "../pages/playlistPage/PlaylistPage";
import Jest from "../pages/jest/jest";
// import ExploreOne from "../themes/explore-one";

// import * as AuthUtils from '../utils/auth';

// const PrivateRoute = ({ component : Component, title,...rest }) => (
// 	<Route
// 		{...rest}
// 		/*eslint-disable no-return-assign*/
// 		render={props => (AuthUtils.isAuthCookiePresent() ? (
// 			<Component {...props} title={title} />
// 		) : (
// 			<Navigate to='/login' replace/>
// 		))
// 		}
// 	/>
// );

class AllRoutes extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    {/* <Routes> */}
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/auth/login" element={<Login />} />
                    <Route exact path="/auth/signup" element={<SignUp />} />
                    <Route exact path="/videos" element={<TrendingPage/>}/>
                    <Route exact path="/sensitara" element={<SenSitara/>}/>
                    <Route exact path="/watchlater" element={<WatchLater/>}/>

                    <Route exact path="/playlists" element={<PlaylistPage/>}/>
                    <Route exact path="/jest" element={<Jest/>}/>

                    {/* <Route exact path="/modal" element={<PlayListModal/>}/> */}
                    
                    {/* 
         
            <Route exact path="/nft/:id" element={<ItemDetails/>} />
         
            <Route exact path="/u/:id" element={<Author/>} />
            <Route exact path="/wallet-connect" element={<WalletConnect/>} />
        
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/contact" element={<Contact/>} /> */}
                    {/* </Routes> */}
                </Routes>
            </div>
        );
    }
}
export default AllRoutes;