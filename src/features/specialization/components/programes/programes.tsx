import { Button, Col, Input, Layout, Row } from 'antd'
import './programes.scss'
import { SpecializationCard } from '../programes-card/programes-card'
import { useState } from 'react'
import { AddSpecialization } from '../add-programes/add-programes'

export const Specialization = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [searchProgram, setSearchProgram] = useState<string>('')
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchProgram(value)
  }
  return (
    <Layout className='faculty'>
      {showModal ? <AddSpecialization showModal={showModal} setShowModal={setShowModal} /> : null}
      <Row align={'middle'} justify={'space-between'} style={{ marginBottom: '20px' }}>
        <Col>
          <h1 className='faculty-title'>
            Facultatea de Inginerie Electrică și Știința Calculatoarelor
          </h1>
        </Col>
        <Col>
          <Input
            size='large'
            placeholder='Cauta programul de studiu...'
            onChange={handleSearch}
            style={{ width: 300 }}
          />
          <Button
            className='students-button'
            onClick={() => {
              setShowModal(true)
            }}>
            Adauga
          </Button>
        </Col>
      </Row>
      <SpecializationCard searchProgram={searchProgram} setSearchProgram={setSearchProgram} />
    </Layout>
  )
}
