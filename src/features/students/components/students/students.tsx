import { Button, Row, Input, Tabs, TabsProps, Col, Layout } from 'antd'
import './students.scss'
import { columns } from 'features/students/constants/students.constants'

import React, { useEffect, useState } from 'react'
import { StudentsImportModal } from '../students-import-modal/students-import-modal'

import { useAppDispatch, useAppSelector } from 'store/store'
import { getAllStudents } from 'features/students/store/students.slice'
import { StudentList } from '../student-list/students-list'
import { IStudents } from 'features/students/models/students.models'

export const Students = () => {
  const [open, setOpen] = useState<boolean>(false)

  const { Search } = Input
  const dispatch = useAppDispatch()
  const onChange = (key: string) => {}

  const students = useAppSelector((state: any) => state.students.students)

  useEffect(() => {
    dispatch(getAllStudents())
  }, [dispatch])

  const openModal = () => {
    setOpen(true)
  }

  const listOfStudents = students?.map((item: IStudents) => {
    return {
      key: item.id,
      name: `${item.firstName} ${item.lastName}`,
      fatherInitial: item.fatherInitial,
      email: item.email,
      domain: 'FIESC',
      specialization: 'Calculatoare',
      year: '2023',
      financiarStatus: 'bursa',
    }
  })
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Licenta`,
      children: <StudentList data={listOfStudents} columns={columns} />,
    },
    {
      key: '2',
      label: `Master`,
      children: <StudentList data={listOfStudents} columns={columns} />,
    },
  ]

  return (
    <React.Fragment>
      {open ? <StudentsImportModal setOpen={setOpen} open={open} /> : null}
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
            <Button className='students-button' onClick={openModal}>
              Importa
            </Button>
          </Col>
        </Row>
        <div>
          <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
        </div>
      </Layout>
    </React.Fragment>
  )
}
