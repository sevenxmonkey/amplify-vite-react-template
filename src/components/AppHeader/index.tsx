import { useNavigate } from 'react-router';
import './app-header.scss'
import { useAuthenticator } from '@aws-amplify/ui-react';

const AppHeader = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, authStatus, signOut } = useAuthenticator((context) => [context.user]);

  const getUserAuth = () => {
    if (authStatus === 'configuring' || (authStatus === 'authenticated' && !user)) {
      return <div>Loading...</div>
    } else if (authStatus !== 'authenticated') {
      return (
        <button className='primary-btn' onClick={() => navigate('/auth')} style={{ display: 'flex', alignItems: "center", backgroundColor: "orange" }}>
          <i className="material-icons" >person</i>
          Login
        </button>
      )
    } else {
      return (
        <div className='user'>
          <div className='link' onClick={signOut}>Logout</div>
          <div className='link' onClick={() => navigate('/user')}>{user?.signInDetails?.loginId}</div>
        </div>
      )
    }
  }

  return (
    <div className="app-header-wrapper">
      <div className='title' onClick={() => navigate('/')}>
        <h2 className='main-title' style={{ display: 'flex', alignItems: "center" }}><i className="material-icons" style={{ fontSize: '50px' }}>blur_on</i>Morale River </h2>
        <p className='sub-title'>
          Social networking app to build
          <span style={{ color: 'hsl(190, 70%, 70%)' }}> community </span>
          and
          <span style={{ color: 'orange' }}> morale </span></p>
      </div>
      <div className='log-in'>
        {getUserAuth()}
      </div>
    </div>
  )
}

export default AppHeader;