import { Col, Layout, Row } from 'antd'
import './user-hello.scss'
import moment from 'moment'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import { useEffect } from 'react'
import { getCurrentUser } from 'features/auth/store/auth.slice'

export const UserHello = () => {
  const dispatch = useAppDispatch()
  const userSlice = useAppSelector((state: RootState) => state.user.user)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])
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
          <div className='user-hello-name'>Buna, {userSlice?.firstName}!</div>
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
