import Menu from 'antd/es/menu'
import './navigation.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
import { Col, Row } from 'antd/es/grid'
import {
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiFillGold,
  AiFillFile,
  AiFillSetting,
} from 'react-icons/ai'
import { Button } from 'antd'
export const Navbar: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const navbarList = [
    {
      icon: <AiFillHome />,
      text: 'Acasa',
      location: PAGES_PATHS.DASHBOARD,
    },
    {
      icon: <AiOutlineUsergroupAdd />,
      text: 'Studenti',
      location: PAGES_PATHS.STUDENT,
    },
    {
      icon: <AiFillGold />,
      text: 'Program de studii',
      location: PAGES_PATHS.SPECIALIZATION,
    },
    {
      icon: <AiFillFile />,
      text: 'Cereri',
      location: PAGES_PATHS.REQUESTS,
    },
    {
      icon: <AiFillSetting />,
      text: 'Setari',
      location: PAGES_PATHS.SETTINGS,
    },
  ]
  return (
    <Menu mode='horizontal' className='navbar'>
      <Row justify={'space-between'} className='navbar-row'>
        <Col>
          <div className='navbar-logo'>
            <img
              alt='usv'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%C8%98tefan_cel_Mare_University_of_Suceava_logo.svg/2560px-%C8%98tefan_cel_Mare_University_of_Suceava_logo.svg.png'
            />
          </div>
        </Col>
        <Col lg={14} xl={12} style={{ display: 'flex', justifyContent: 'space-between ' }}>
          {navbarList.map((item, index) => {
            return (
              <div
                key={index}
                className={pathname !== item.location ? 'navbar-menu' : 'navbar-menu-active'}>
                <span>{item.icon}</span>
                <Link className='navbar-link' to={item.location}>
                  {item.text}
                </Link>
              </div>
            )
          })}
          <div>
            <Button
              className='navbar-button'
              onClick={() => {
                navigate(PAGES_PATHS.LOGIN)
              }}>
              Log out
            </Button>
          </div>
        </Col>
      </Row>
    </Menu>
  )
}
