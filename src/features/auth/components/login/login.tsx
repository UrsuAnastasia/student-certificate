import { PAGES_PATHS } from 'common/constants/constant'
import './login.scss'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='login'>
      <div className='login-first-conatiner'>
        <div className='login-img-message'>
          <img
            alt=''
            src='https://ouch-cdn2.icons8.com/dJTKWevm6cRSy3jud2axw2vpIitUuyOJ4DUJFGN0zmw/rs:fit:256:271/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTE2/LzkzNzk4OTlkLThh/YzEtNDk2My05YjJk/LTg5Yjg0NTI3ZDY1/Ni5zdmc.png'
          />
        </div>
        <h1>Bun Venit !</h1>
        <p>
          Prin intermediul platformei noastre moderne și a tehnologiei avansate, puteți solicita și
          obține adeverințele necesare în doar câteva clicuri. Cu un sistem bine structurat și o
          interfață intuitivă, procesul de eliberare a adeverințelor devine simplu și eficient,
          economisindu-vă timp prețios și evitând birocrația obositoare.
        </p>
        <p>
          Începeți astăzi și descoperiți cât de simplu și eficient poate fi procesul de eliberare a
          adeverințelor cu ajutorul nostru!
        </p>
        <button
          className='login-button'
          onClick={() => {
            navigate(PAGES_PATHS.STUDENT_REQUEST)
          }}>
          Conecteaza-te
        </button>
      </div>
      <div className='login-modal'></div>
      <div className='login-image'>
        <img
          alt=''
          src='https://www.betasofttechnology.com/wp-content/uploads/2021/04/blog-img.png'
        />
      </div>
    </div>
  )
}
