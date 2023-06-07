import { Button, Form } from 'antd'
import './certificate-request.scss'
import { IRequest, messageImage, studentImage } from '../constants/request.constants'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import { getCurrentUser } from 'features/auth/store/auth.slice'
import { useAppDispatch, useAppSelector, RootState } from 'store/store'
import { backgroundImg } from 'features/auth/constants/auth.constants'
import { Certificate } from '../models/certificate-request'
import { createRequest } from '../store/certificate-request.slice'
import { errorModal, successModal } from 'common/hooks/useSomething'
import { useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'

export const StudentRequest = () => {
  const [request, setRequest] = useState<IRequest>({
    reason: '',
  })
  const [form] = Form.useForm()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const currentUSer = useAppSelector((state: RootState) => state.user)
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  const initialValues = [
    {
      name: ['reason'],
      value: request.reason,
    },
  ]
  const onFinish = async (values: any) => {
    form.validateFields()
    const payload: Certificate = {
      userId: currentUSer.user?.id!,
      reason: request.reason,
    }
    const response = await dispatch(createRequest(payload))
    if (response.type === 'POST_DOMAIN/rejected') {
      errorModal('Eroare', 'A aparut o eroare')
    } else {
      successModal('Succes', 'Cererea a fost creata cu succes.')
      navigate(PAGES_PATHS.DASHBOARD)
    }
    form.resetFields()
  }

  return (
    <div className='request'>
      <div className='request-first-conatiner'>
        <img className='request-message' alt='' src={backgroundImg} />
        <img className='request-people' alt='' src={messageImage} />
      </div>
      <div className='request-second-conatiner'>
        <div className='request-logo'>
          <img alt='usv' src={studentImage} />
        </div>
        <Form
          className='request-form'
          name='register'
          scrollToFirstError
          initialValues={initialValues}
          onFinish={onFinish}
          form={form}>
          <Form.Item
            name={'reason'}
            rules={[{ required: true, message: 'Va rog completati acest camp!' }]}>
            <TextArea
              placeholder='Adeverinta se elibereaza pentru....'
              rows={10}
              maxLength={16}
              onChange={({ target: { value } }) => {
                setRequest({ ...request, reason: value })
              }}
            />
          </Form.Item>
          <Form.Item className='request-button-container'>
            <Button className='request-button' onClick={onFinish}>
              Trimite
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
