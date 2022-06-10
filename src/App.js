import "./App.css";
import GlobalContext from './context/GlobalContext'
import { WatchLaterProvider } from "./context/watchLaterContext";
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from "./Routers/routes";
import { PlayListProvider } from "./context/playListContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContext>
          <PlayListProvider>
            <WatchLaterProvider>
              <AllRoutes />
            </WatchLaterProvider>
          </PlayListProvider>
        </GlobalContext>
      </BrowserRouter>
    </>
  );
}

export default App;
