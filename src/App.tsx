import { BrowserRouter, Route, Routes } from 'react-router';
import { defaultDarkModeOverride, ThemeProvider } from '@aws-amplify/ui-react';

import Auth from './components/Auth';
import User from "./components/User";

import './App.scss';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Topics from './components/Topics';

function App() {

  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  return (
    <ThemeProvider theme={theme} colorMode="system">
      <div className="app-layout">
        <div className="header-wrapper">
          <div className='header'>
            <AppHeader />
          </div>
        </div>
        <div className="body-wrapper">
          <div className='body'>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Topics />} />
                <Route path="auth" element={<Auth />} />
                <Route path="user" element={<User />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className='footer'>
            <AppFooter />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
