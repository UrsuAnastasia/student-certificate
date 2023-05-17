import Menu from 'antd/es/menu'
import './navigation.scss'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  return (
    <Menu mode='horizontal' className='navbar'>
      <Row style={{ width: '100%' }} justify={'space-between'}>
        <Col>
          <div className='navbar-logo'>
            <img
              alt='usv'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%C8%98tefan_cel_Mare_University_of_Suceava_logo.svg/2560px-%C8%98tefan_cel_Mare_University_of_Suceava_logo.svg.png'
            />
          </div>
        </Col>
        <Col span={20} style={{ alignItems: 'flex-end' }} className='navbar-menu'>
          <Menu.Item key='1' icon={<HomeOutlined />}>
            <Link to={PAGES_PATHS.DASHBOARD}>Acasa</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<UsergroupDeleteOutlined />}>
            <Link to={PAGES_PATHS.STUDENT}>Studenti</Link>
          </Menu.Item>
          <Menu.Item key='3' icon={<GoldOutlined />}>
            <Link to={PAGES_PATHS.SPECIALIZATION}>Specializari</Link>
          </Menu.Item>
          <Menu.Item key='4' icon={<FileTextOutlined />}>
            <Link to={PAGES_PATHS.SPECIALIZATION}>Cereri</Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Button
              className='navbar-button'
              onClick={() => {
                navigate(PAGES_PATHS.LOGIN)
              }}>
              Iesi
            </Button>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
  )
}
