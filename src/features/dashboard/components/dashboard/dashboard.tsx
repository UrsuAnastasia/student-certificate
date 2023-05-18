import { Col, Layout, Row } from 'antd'
import { UserHello } from '../user-hello/user-hello'

export const Dashboard = () => {
  return (
    <Layout style={{ margin: '20px', background: 'unset' }}>
      <Row justify={'space-between'} gutter={20}>
        <Col span={24}></Col>
        <Col span={14}>{/* <Requests /> */}</Col>
        <Col span={10}>
          <UserHello />
          {/* <PieChart title={'Nr. de studenti inscrisi la licenta'} />
          <PieChart title={'Nr. de studenti inscrisi la master'} /> */}
        </Col>
      </Row>
    </Layout>
  )
}
