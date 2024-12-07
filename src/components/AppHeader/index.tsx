import './app-header.scss'

const AppHeader = (): JSX.Element => {

  return (
    <div className="app-header-wrapper">
      <div className='title'>
        <h2 className='main-title'>Morale River </h2>
        <p className='sub-title'>
          Social networking app to build
          <span style={{ color: 'hsl(190, 70%, 70%)' }}> community </span>
          and
          <span style={{ color: 'orange' }}> morale </span></p>
      </div>
      <div className='menu'>
        left content
      </div>
    </div>
  )
}

export default AppHeader;