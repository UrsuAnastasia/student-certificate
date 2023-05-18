import { Button, Row, Input, Tabs, TabsProps, Col, Layout } from 'antd'
import './students.scss'
import { columns, data } from 'features/students/constants/students.constants'
import { StudentList } from '../student-list/student-list'

export const Students = () => {
  const { Search } = Input

  const onChange = (key: string) => {}

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Licenta`,
      children: <StudentList data={data} columns={columns} />,
    },
    {
      key: '2',
      label: `Master`,
      children: <StudentList data={data} columns={columns} />,
    },
  ]

  return (
    <Layout className='students'>
      <Row className='students-row'>
        <Col>
          <h1 className='students-title'>Studenti</h1>
        </Col>
        <Col>
          <Search
            size='large'
            placeholder='Cauta un student'
            onSearch={() => {}}
            style={{ width: 200 }}
          />
          <Button className='students-button'>Importa</Button>
        </Col>
      </Row>
      <div>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
      </div>
    </Layout>
  )
}
