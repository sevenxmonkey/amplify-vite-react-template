import { BrowserRouter, Route, Routes } from 'react-router';

import Home from "./components/Home";
import Auth from './components/Auth';
import User from "./components/User";

import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
