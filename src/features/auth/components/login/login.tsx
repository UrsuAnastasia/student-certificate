import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import './login.scss'
import {
  backgroundImg,
  vibrantTechscape,
  certifyNow,
  welcomeText,
} from 'features/auth/constants/auth.constants'
import { useEffect } from 'react'
import { getCurrentUser } from 'features/auth/store/auth.slice'
import { PAGES_PATHS } from 'common/constants/constant'
import { Link } from 'react-router-dom'

export const Login = () => {
  const dispatch = useAppDispatch()

  const currentUSer = useAppSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

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

        {currentUSer.user !== null ? (
          <button className='login-button'>
            <Link className='login-link' to={PAGES_PATHS.DASHBOARD}>
              Mergi acasa
            </Link>
          </button>
        ) : (
          <button className='login-button' onClick={googleAuth}>
            Conecteaza-te
          </button>
        )}
      </div>
      <div className='login-modal'></div>
      <div className='login-image'>
        <img alt='vibrantTechscape' src={vibrantTechscape} />
      </div>
    </div>
  )
}
