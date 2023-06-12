import Menu from 'antd/es/menu'
import './navigation.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
import { Col, Row } from 'antd/es/grid'
import {
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiFillGold,
  AiFillFile,
  AiFillSetting,
} from 'react-icons/ai'
import { Avatar, Button } from 'antd'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import { useEffect } from 'react'
import { getCurrentUser } from 'features/auth/store/auth.slice'
export const Navbar: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const currentUserSlice = useAppSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  const userList = [
    {
      index: 'acasa',
      icon: <AiFillHome />,
      text: 'Acasa',
      location: PAGES_PATHS.DASHBOARD,
    },

    {
      index: 'cereri',
      icon: <AiFillFile />,
      text: 'Genereaza o cerere',
      location: PAGES_PATHS.STUDENT_REQUEST,
    },
  ]
  const navbarList = [
    {
      index: 'acasa',
      icon: <AiFillHome />,
      text: 'Acasa',
      location: PAGES_PATHS.DASHBOARD,
    },
    {
      index: 'studenti',
      icon: <AiOutlineUsergroupAdd />,
      text: 'Studenti',
      location: PAGES_PATHS.STUDENT,
    },
    {
      index: 'program',
      icon: <AiFillGold />,
      text: 'Program de studii',
      location: PAGES_PATHS.SPECIALIZATION,
    },
    {
      index: 'cereri',
      icon: <AiFillFile />,
      text: 'Cereri',
      location: PAGES_PATHS.REQUESTS,
    },
    {
      index: 'setari',
      icon: <AiFillSetting />,
      text: 'Setari',
      location: PAGES_PATHS.SETTINGS,
    },
  ]
  const list = currentUserSlice.user?.role === 'USER' ? userList : navbarList
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
        <Col style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {list.map((nav, index) => {
            return (
              <Menu.Item
                className={pathname === nav.location ? 'navbar-menu-active' : 'navbar-menu'}
                key={nav.index}
                icon={nav.icon}>
                <a href={nav.location}>{nav.text} </a>
              </Menu.Item>
            )
          })}
          <Avatar
            style={{ marginRight: '40px', marginLeft: '20px' }}
            onClick={() => {
              navigate(PAGES_PATHS.PROFILE)
            }}
            size={50}
            src={currentUserSlice.user?.profileImageUrl!}
          />
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
