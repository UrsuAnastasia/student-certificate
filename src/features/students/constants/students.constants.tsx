import { Row, Col } from 'antd'
import { ColumnsType } from 'antd/es/table'

export type DataType = {
  key: React.Key
  name: string
  specialization: string
  year: string
  id?: number
  email?: string
}
export const columns: ColumnsType<DataType> = [
  {
    title: 'Nume',
    dataIndex: 'name',
    render: (text) => (
      <Row style={{ alignItems: 'center' }}>
        <Col span={2}>
          <img
            src={
              'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
            }
            alt='avatar'
            width={'30'}
          />
        </Col>
        <Col className='studentList-name-email' span={6}>
          <div className='studentList-name'>{'Edward King'}</div>
        </Col>
      </Row>
    ),
  },
  {
    title: 'Program de studiu',
    dataIndex: 'specialization',
    render: (text) => (
      <div className='studentList_specialization'>
        <span>Calculatoare</span>
      </div>
    ),
  },
  {
    title: 'An',
    dataIndex: 'year',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]
