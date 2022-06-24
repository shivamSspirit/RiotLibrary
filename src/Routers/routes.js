import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./authRoutes";

import Mockman from "mockman-js";

// importing all the themes pages
import LandingPage from "../pages/landingPage";
import SignUp from "../components/auth/signup/signup";
import Login from "../components/auth/login/login";
import TrendingPage from "../pages/trendingPage";
import SenSitara from "../pages/senSitara";
import WatchLater from "../pages/watchlater";
import PlaylistPage from "../pages/playlistPage/PlaylistPage";
import Jest from "../pages/jest/jest";
import SinglePlayListPage from "../pages/singlePlaylistPage/singleplayListPage";

class AllRoutes extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    {/* <Routes> */}
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/auth/login" element={<Login />} />
                    <Route exact path="/auth/signup" element={<SignUp />} />
                    <Route exact path="/videos" element={<TrendingPage />} />
                    <Route exact path="/videos/:videoId" element={
                        <AuthRoutes>
                            <SenSitara />
                        </AuthRoutes>
                    } />
                    <Route exact path="/watchlater" element={<AuthRoutes><WatchLater /></AuthRoutes>} />
                    <Route exact path="/playlists" element={<AuthRoutes><PlaylistPage /></AuthRoutes>} />
                    <Route exact path="/playlists/:playlistId" element={<AuthRoutes><SinglePlayListPage /></AuthRoutes>} />
                    <Route exact path="/jest" element={<Jest />} />
                    <Route exact path="/test" element={<Mockman />} />
                </Routes>
            </div>
        );
    }
}
export default AllRoutes;