import { Button, Checkbox, Form, Input } from 'antd'
import './student-request.scss'
import { specialization } from '../constants/request.constants'
import TextArea from 'antd/es/input/TextArea'

export const StudentRequest = () => {
  // const [request, setRequest] = useState<any>({
  //   name: '',
  //   faculty: '',
  //   reason: '',
  // })
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
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
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <label className='request-checkbox'>Nume Prenume</label>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Va rog completati acest camp!' }]}>
            <Input />
          </Form.Item>
          {specialization.map((item) => {
            return (
              <Form.Item name='remember' valuePropName='checked'>
                <Checkbox value={item.id} className='request-checkbox'>
                  {item.name}
                </Checkbox>
              </Form.Item>
            )
          })}{' '}
          <Form.Item
            name={'motivation'}
            rules={[{ required: true, message: 'Va rog completati acest camp!' }]}>
            <TextArea placeholder='Adeverinta se elibereaza pentru....' rows={4} maxLength={16} />
          </Form.Item>
          <Form.Item className='request-button-container'>
            <Button className='request-button'>Trimite</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
