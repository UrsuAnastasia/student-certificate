import Menu from 'antd/es/menu'
import './navigation.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
import { Col, Row } from 'antd/es/grid'
import {
  UsergroupDeleteOutlined,
  GoldOutlined,
  HomeOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
import { Button } from 'antd'
export const Navbar: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const navbarList = [
    {
      icon: <HomeOutlined />,
      text: 'Acasa',
      location: PAGES_PATHS.DASHBOARD,
    },
    {
      icon: <UsergroupDeleteOutlined />,
      text: 'Studenti',
      location: PAGES_PATHS.STUDENT,
    },
    {
      icon: <GoldOutlined />,
      text: 'Specializari',
      location: PAGES_PATHS.SPECIALIZATION,
    },
    {
      icon: <FileTextOutlined />,
      text: 'Cereri',
      location: PAGES_PATHS.REQUESTS,
    },
  ]
  return (
    <Menu mode='horizontal' className='navbar'>
      <Row justify={'space-between'} className='navbar-row'>
        <Col span={12}>
          <div className='navbar-logo'>
            <img
              alt='usv'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%C8%98tefan_cel_Mare_University_of_Suceava_logo.svg/2560px-%C8%98tefan_cel_Mare_University_of_Suceava_logo.svg.png'
            />
          </div>
        </Col>
        <Col span={10} style={{ display: 'flex', justifyContent: 'space-between ' }}>
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
              Iesi
            </Button>
          </div>
        </Col>
      </Row>
    </Menu>
  )
}
