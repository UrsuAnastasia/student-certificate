import { Button, Col, Input, Layout, Row, Tabs, TabsProps } from 'antd'
import './specilaization.scss'
import { SpecializationCard } from './specialization-card/specialization-card'
export const Specialization = () => {
  const onChange = (key: string) => {}
  const { Search } = Input
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Licenta`,
      children: <SpecializationCard />,
    },
    {
      key: '2',
      label: `Master`,
      children: <SpecializationCard />,
    },
  ]
  return (
    <Layout className='faculty'>
      <Row align={'middle'} justify={'space-between'} style={{ marginBottom: '20px' }}>
        <Col>
          <h1 className='faculty-title'>Program de studii</h1>
        </Col>
        <Col>
          <Search size='large' placeholder='Cauta...' onSearch={() => {}} style={{ width: 200 }} />
          <Button className='students-button'>Adauga</Button>
        </Col>
      </Row>
      <Tabs style={{ margin: '0px' }} defaultActiveKey='1' items={items} onChange={onChange} />
    </Layout>
  )
}
