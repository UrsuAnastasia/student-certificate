import { Col, Layout, Row } from 'antd'
import { UserHello } from '../user-hello/user-hello'
import { RequestsChart } from '../column-chart/column-chart'
import { ListOfSecretary } from '../list-of-secretary/list-of-secretary'
import { License } from '../license/license'
import { Master } from '../master/master'

export const Dashboard = () => {
  return (
    <Layout style={{ margin: '20px', background: 'unset' }}>
      <Row justify={'space-between'} gutter={20}>
        <Col span={14}>
          <RequestsChart />
          <ListOfSecretary />
        </Col>
        <Col span={10}>
          <UserHello />
          <License number={3} />
          <Master number={4} />
        </Col>
      </Row>
    </Layout>
  )
}
