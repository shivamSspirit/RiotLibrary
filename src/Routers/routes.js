import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./authRoutes";

import Mockman from "mockman-js";

// importing all the themes pages
import LandingPage from '../pages/landingpage/landingPage'
import SignUp from "../components/auth/signup/signup";
import Login from "../components/auth/login/login";
import TrendingPage from "../pages/explore/trendingPage";
import SingleVideo from "../pages/singlevideo/singleVideo";
import WatchLater from "../pages/watchlater/watchlater";
import PlaylistPage from "../pages/playlistPage/PlaylistPage";
import Jest from "../pages/jest/jest";
import SinglePlayListPage from "../pages/singlePlaylistPage/singleplayListPage";
import HistoryPage from "../pages/history/historyPage";
import Likepage from "../pages/likes/likepage";
import { Helmet } from "react-helmet";
class AllRoutes extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Riot</title>
                </Helmet>
                <Routes>
                    {/* < Public Routes> */}
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/auth/login" element={<Login />} />
                    <Route exact path="/auth/signup" element={<SignUp />} />
                    <Route exact path="/videos" element={<TrendingPage />} />

                    {/* {Auth Routes} */}

                    <Route exact path="/videos/:videoId" element={
                        <AuthRoutes>
                            <SingleVideo />
                        </AuthRoutes>
                    } />
                    <Route exact path="/history" element={<AuthRoutes><HistoryPage /></AuthRoutes>} />
                    <Route exact path="/likes" element={<AuthRoutes><Likepage /></AuthRoutes>} />

                    <Route exact path="/watchlater" element={<AuthRoutes><WatchLater /></AuthRoutes>} />
                    <Route exact path="/playlists" element={<AuthRoutes><PlaylistPage /></AuthRoutes>} />
                    <Route exact path="/playlists/:playlistId" element={<AuthRoutes><SinglePlayListPage /></AuthRoutes>} />

                    {/* {extra routes use in development} */}

                    <Route exact path="/jest" element={<Jest />} />
                    <Route exact path="/test" element={<Mockman />} />
                </Routes>
            </div>
        );
    }
}
export default AllRoutes;