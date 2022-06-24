import "./App.css";
import GlobalContext from './context/GlobalContext'
import { WatchLaterProvider } from "./context/watchLaterContext";
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from "./Routers/routes";
import { PlayListProvider } from "./context/playListContext";
import { LikesProvider } from "./context/likeContext";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <GlobalContext>
            <PlayListProvider>
              <LikesProvider>
                <WatchLaterProvider>
                  <AllRoutes />
                </WatchLaterProvider>
              </LikesProvider>
            </PlayListProvider>
          </GlobalContext>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
