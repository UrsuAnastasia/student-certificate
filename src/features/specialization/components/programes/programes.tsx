import { Button, Col, Input, Layout, Row } from 'antd'
import './programes.scss'
import { SpecializationCard } from '../programes-card/programes-card'
import { useState } from 'react'
import { AddSpecialization } from '../add-programes/add-programes'

export const Specialization = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const { Search } = Input
  return (
    <Layout className='faculty'>
      {showModal ? <AddSpecialization showModal={showModal} setShowModal={setShowModal} /> : null}
      <Row align={'middle'} justify={'space-between'} style={{ marginBottom: '20px' }}>
        <Col>
          <h1 className='faculty-title'>Program de studii</h1>
        </Col>
        <Col>
          <Search size='large' placeholder='Cauta...' onSearch={() => {}} style={{ width: 200 }} />
          <Button
            className='students-button'
            onClick={() => {
              setShowModal(true)
            }}>
            Adauga
          </Button>
        </Col>
      </Row>
      <SpecializationCard />
    </Layout>
  )
}
