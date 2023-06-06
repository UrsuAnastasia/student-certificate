import { Button, Form, Input } from 'antd'
import './domain.scss'
import { useState } from 'react'
import { errorModal, successModal } from 'common/hooks/useSomething'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import { postDomain } from 'features/settings/store/settings.slice'
export const DomainSettings = () => {
  const [formData, setFormData] = useState<any>({ name: '' })
  const [form] = Form.useForm()

  const dispatch = useAppDispatch()

  const currentYear = useAppSelector((state: RootState) => state.settings.year)

  const initialValues = [
    {
      name: ['domain'],
      value: formData.name,
    },
  ]
  const onFinish = async (values: any) => {
    form.validateFields()
    const payload = {
      name: formData.name,
    }
    const response = await dispatch(postDomain(payload))
    if (response.type === 'POST_DOMAIN/rejected') {
      errorModal('Eroare', 'A aparut o eroare')
    } else {
      successModal('Succes', 'Domeniul a fost adaugat cu succes.')
    }
    form.resetFields()
  }
  return (
    <div className='domain'>
      <div className='domain-span'>Adauga un Domeniu</div>

      <Form onFinish={onFinish} initialValues={initialValues} form={form}>
        <span>Domeniu</span>
        <Form.Item
          name='domain'
          rules={[{ required: true, message: 'Acest camp este obligatoriu!' }]}>
          <Input
            value={formData.name}
            onChange={(value) => {
              setFormData({ ...formData, name: value.target.value })
            }}
            style={{ width: '600px' }}
          />
        </Form.Item>
        <Form.Item>
          <div>
            <span className='domain-info'>
              Pentru a adăuga un domeniu, este nevoie să setați anul curent.
            </span>
          </div>
          <Button
            disabled={currentYear?.currentAcademicYear ? false : true}
            className='year-settings-button'
            type='primary'
            htmlType='submit'>
            Adauga
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
