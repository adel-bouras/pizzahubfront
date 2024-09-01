import { Routes, Route } from "react-router-dom";
// import './App.scss';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Details from './pages/details/details';
import Show from './pages/show/show';
import Otp from './pages/otp/otp';
import Commands from './pages/commands/commands';
import PrivacyPolicy from './pages/privacyPolicy/privacyPolicy';

function App() {

  return (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/details" element={<Details />} />
    <Route path="/show" element={<Show />} />
    <Route path="/verification" element={<Otp />} />
    <Route path="/commands" element={<Commands />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
</Routes>
)

}
export default App