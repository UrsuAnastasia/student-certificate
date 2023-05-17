import { Col, Layout, Row } from 'antd'
import './user-hello.scss'
import moment from 'moment'

export const UserHello = () => {
  const currentTime = moment()
  const currentTimeString = currentTime.format('dddd, DD MMM YYYY')
  return (
    <Layout className='user-hello'>
      <Row>
        <Col>
          <img
            className='user-hello-image'
            alt=''
            src='https://cdni.iconscout.com/illustration/premium/thumb/working-from-office-3467289-2904141.png?f=webp'
          />
        </Col>
        <Col span={16}>
          <div className='user-hello-name'>Buna, Anastasia!</div>
          <p className='user-hello-message'>
            Suntem aici pentru a vă oferi suportul de care aveți nevoie pentru a vă concentra pe
            ceea ce contează
          </p>
          <div className='user-hello-date'>{currentTimeString}!</div>
        </Col>
      </Row>
    </Layout>
  )
}
