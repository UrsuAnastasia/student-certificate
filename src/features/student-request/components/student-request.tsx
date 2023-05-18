import { Button, Checkbox, Form, Input } from 'antd'
import './student-request.scss'
import { IRequest, specialization } from '../constants/request.constants'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'

export const StudentRequest = () => {
  const [request, setRequest] = useState<IRequest>({
    name: '',
    reason: '',
    faculty: null,
  })
  const [form] = Form.useForm()
  const initialValues = [
    {
      name: ['name'],
      value: request.name,
    },
    {
      name: ['faculty'],
      value: request.faculty,
    },
    {
      name: ['reason'],
      value: request.reason,
    },
  ]
  const onFinish = (values: any) => {
    form.validateFields()
  }
  const hadlChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRequest({
      ...request,
      [name]: value,
    })
  }
  const handleChangeFaculty = (value: any) => {
    if (request.faculty === value) {
      setRequest({
        ...request,
        faculty: null, // Uncheck the checkbox
      })
    } else {
      setRequest({
        ...request,
        faculty: value,
      })
    }
  }
  return (
    <div className='request'>
      <div className='request-first-conatiner'>
        <img
          className='request-message'
          alt=''
          src='https://ouch-cdn2.icons8.com/dJTKWevm6cRSy3jud2axw2vpIitUuyOJ4DUJFGN0zmw/rs:fit:256:271/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTE2/LzkzNzk4OTlkLThh/YzEtNDk2My05YjJk/LTg5Yjg0NTI3ZDY1/Ni5zdmc.png'
        />
        <img
          className='request-people'
          alt=''
          src='https://cdni.iconscout.com/illustration/premium/thumb/mail-sending-5491574-4607130.png?f=webp'
        />
      </div>
      <div className='request-second-conatiner'>
        <div className='request-logo'>
          <img
            alt='usv'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%C8%98tefan_cel_Mare_University_of_Suceava_logo.svg/2560px-%C8%98tefan_cel_Mare_University_of_Suceava_logo.svg.png'
          />
        </div>

        <Form
          className='request-form'
          name='register'
          scrollToFirstError
          initialValues={initialValues}
          onFinish={onFinish}
          form={form}>
          <label className='request-checkbox'>Nume Prenume</label>
          <Form.Item
            name='name'
            initialValue={request.name}
            rules={[{ required: true, message: 'Va rog completati acest camp!' }]}>
            <Input name='name' onChange={hadlChangeInput} />
          </Form.Item>
          {specialization.map((item, index) => {
            return (
              <Form.Item
                name={`faculty_${item.id}`}
                initialValue={request.faculty}
                valuePropName='checked'
                key={item.id}>
                <Checkbox
                  name='faculty'
                  className='request-checkbox'
                  onChange={() => handleChangeFaculty(item.id)}>
                  {item.name}
                </Checkbox>
              </Form.Item>
            )
          })}
          <Form.Item
            name={'reason'}
            rules={[{ required: true, message: 'Va rog completati acest camp!' }]}>
            <TextArea
              placeholder='Adeverinta se elibereaza pentru....'
              rows={4}
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
