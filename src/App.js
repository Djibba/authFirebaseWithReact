import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import SignupModal from './Components/SignupModal';
import SigninModal from './Components/SigninModal';
import Private from './Pages/Private/Private';
import PrivateHome from './Pages/Private/PrivateHome/PrivateHome';

function App() {
  return (
    <>
      <SignupModal />
      <SigninModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} >
          <Route path="/private/privateHome" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
