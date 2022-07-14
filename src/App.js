
import './App.css';
import CreatePlayer from './pages/CreatePlayer/CreatePlayer';
import CreateTeam from './pages/CreateTeam/CreateTeam';
import Home from './pages/Home/Home'
import Players from './pages/Players/Players';
import Teams from './pages/Teams/Teams';
import TeamContextProvider from './context/TeamContext.js'
import PlayerContextProvider from './context/PlayerContext';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import TeamDetails from './pages/TeamDetails/TeamDetails';

function App() {
  return (
    <PlayerContextProvider>
      <TeamContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Layout>
                <Home />
              </Layout>
            } />
            <Route path="/players" element={
              <Layout>
                <Players />
              </Layout>
            } />
            <Route path="/createplayer" element={
              <Layout>
                <CreatePlayer />
              </Layout>
            } />
            <Route path="/teams" element={
              <Layout>
                <Teams />
              </Layout>
            } />
            <Route  path="/createteam" element={
              <Layout>
                <CreateTeam />
              </Layout>
            } />
            <Route path="/teamdetails/:teamId" element={
              <Layout>
               <TeamDetails/>
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </TeamContextProvider>
    </PlayerContextProvider>
  );
}

export default App;
