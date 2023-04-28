import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import SignupModal from './Components/SignupModal';

function App() {
  return (
    <>
      <SignupModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
