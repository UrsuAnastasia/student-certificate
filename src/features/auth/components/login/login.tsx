import './login.scss'
import {
  backgroundImg,
  vibrantTechscape,
  certifyNow,
  welcomeText,
} from 'features/auth/constants/auth.constants'

export const Login = () => {
  const googleAuth = () => {
    const currentURL = `${process.env.REACT_APP_BACKEND_URL}/login`
    window.location.href = currentURL
  }

  return (
    <div className='login'>
      <div className='login-first-conatiner'>
        <div className='login-img-message'>
          <img alt='backgroundImg' src={backgroundImg} />
        </div>
        <h1>Bun Venit !</h1>
        <p>{welcomeText}</p>
        <p>{certifyNow}</p>

        <button className='login-button' onClick={googleAuth}>
          Conecteaza-te
        </button>
      </div>
      <div className='login-modal'></div>
      <div className='login-image'>
        <img alt='vibrantTechscape' src={vibrantTechscape} />
      </div>
    </div>
  )
}
