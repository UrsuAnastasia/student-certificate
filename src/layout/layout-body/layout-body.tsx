import { Layout } from 'antd'
import { Navbar } from 'layout/layout-header/navigation'
import './layout-body.scss'
import { Outlet } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'
export const LayoutBody = () => {
  return (
    <Layout>
      <Navbar />
      <Layout className='layout-body'>
        <Content className='layout-body-content'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
