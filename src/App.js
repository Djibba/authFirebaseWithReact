import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import SignupModal from './Components/SignupModal';
import SigninModal from './Components/SigninModal';

function App() {
  return (
    <>
      <SignupModal />
      <SigninModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
