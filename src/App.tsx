import { BrowserRouter, Route, Routes } from 'react-router';
import { defaultDarkModeOverride, ThemeProvider } from '@aws-amplify/ui-react';

import Auth from './components/Auth';

import './App.scss';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Topics from './components/Topics';
import Network from './components/Network';
import Profile from './components/Profile';
import Edit from './components/Edit';

function App() {

  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  return (
    <ThemeProvider theme={theme} colorMode="system">
      <BrowserRouter>
        <div className="app-layout">
          <div className="header-wrapper">
            <div className='header'>
              <AppHeader />
            </div>
          </div>
          <div className="body-wrapper">
            <div className='body'>
              <Routes>
                <Route path="/" element={<Topics />} />
                <Route path="auth" element={<Auth />} />
                <Route path="user" element={<Profile />} />
                <Route path="network" element={<Network />} />
                <Route path="edit" element={<Edit />} />
              </Routes>
            </div>
          </div>
          <div className="footer-wrapper">
            <div className='footer'>
              <AppFooter />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
