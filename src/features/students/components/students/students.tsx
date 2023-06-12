import { Button, Row, Input, Tabs, TabsProps, Col, Layout } from 'antd'
import './students.scss'
import { columns } from 'features/students/constants/students.constants'

import React, { useEffect, useState } from 'react'
import { StudentsImportModal } from '../students-import-modal/students-import-modal'

import { useAppDispatch, useAppSelector } from 'store/store'
import { getStudentsByDomain } from 'features/students/store/students.slice'
import { StudentList } from '../student-list/students-list'
import { IStudents } from 'features/students/models/students.models'

export const Students = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [tabIndex, setTabIndex] = useState<number>(3)
  const [searchTerm, setSearchTerm] = useState('')

  const dispatch = useAppDispatch()
  const onChangeTabs = (key: string) => {
    setTabIndex(+key)
  }

  const students = useAppSelector((state: any) => state.students.students)

  useEffect(() => {
    dispatch(getStudentsByDomain(tabIndex))
  }, [dispatch, tabIndex])

  const openModal = () => {
    setOpen(true)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchTerm(value)
  }
  const studentsArray = students?.filter((student: IStudents) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const listOfStudents = studentsArray?.map((item: IStudents) => {
    return {
      key: item.id,
      name: `${item.name}`,
      email: item.email,
      domain: item.studyProgram,
      specialization: item.studyDomain,
      year: item.studyYear,
      financiarStatus: item.financialStatus,
    }
  })
  const itemsTabs: TabsProps['items'] = [
    {
      key: '3',
      label: `Licenta`,
      children: <StudentList data={listOfStudents} columns={columns} />,
    },
    {
      key: '4',
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
            <Input
              size='large'
              placeholder='Cauta un student'
              onChange={handleSearch}
              style={{ width: 200 }}
              // value={searchTerm}
            />
            <Button className='students-button' onClick={openModal}>
              Importa
            </Button>
          </Col>
        </Row>
        <div>
          <Tabs defaultActiveKey='1' items={itemsTabs} onChange={onChangeTabs} />
        </div>
      </Layout>
    </React.Fragment>
  )
}
