import './app-footer.scss'

const AppFooter = (): JSX.Element => {
  return (
    <div className='app-footer-wrapper'>
      <div>Team project |  Author:
        <span style={{ color: 'white' }}> Xiaowen Xu </span>
        and
        <span style={{ color: 'white' }}> Jingxi Xu </span>
        for course DEV640.
      </div>
      <div>This app demos a social networking app for a rapidly growing startup to use internally with its employees for building community and morale.</div>
    </div>
  )
}

export default AppFooter;