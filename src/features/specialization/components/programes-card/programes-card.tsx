import { Card, Col, Row } from 'antd'
import './programes-card.scss'
import { AiOutlineEye, AiOutlineClose } from 'react-icons/ai'
import { getallStudyProgrames } from 'features/specialization/store/stydy-program.slice'
import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector, RootState } from 'store/store'
import { ISpecialization } from 'features/specialization/models/models.specialization'
import { AddSpecialization } from '../add-programes/add-programes'

interface IProgrames {
  searchProgram: string
  setSearchProgram: (searchProgram: string) => void
}
export const SpecializationCard: FC<IProgrames> = ({ searchProgram, setSearchProgram }) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false)
  const [programId, setProgramId] = useState<number>(0)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getallStudyProgrames())
  }, [dispatch, searchProgram])

  const allProgramesStudentsSlice: Array<ISpecialization> = useAppSelector(
    (state: RootState) => state.studyProgram.studyProgrames,
  )

  const handleEdit = (id: number) => {
    setProgramId(id)
    setShowEditModal(true)
  }
  const studentsArray = allProgramesStudentsSlice?.filter((program: ISpecialization) =>
    program.name.toLowerCase().includes(searchProgram.toLowerCase()),
  )
  return (
    <Row gutter={[20, 20]}>
      {showEditModal ? (
        <AddSpecialization
          programId={programId}
          isEditMode={true}
          showModal={showEditModal}
          setShowModal={setShowEditModal}
        />
      ) : null}
      {studentsArray?.map((item: ISpecialization, index: number) => (
        <Col xs={24} sm={12} md={8} lg={4} xl={6} key={index}>
          <Card hoverable className='card-container'>
            <div className='card-header'>
              <div className='card-eye'>
                <AiOutlineEye onClick={() => handleEdit(item.id!)} />
              </div>
              <div className='card-trash'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='card-circle'>
              <img
                alt='cover'
                src={
                  'https://cdni.iconscout.com/illustration/premium/thumb/mail-marketing-3406153-2840774.png?f=webp'
                }
              />
            </div>
            <div className='card-content'>
              <h1 className='card-title'>{item.name}</h1>
              <p>
                <span className='card-details'>Decan: </span>
                Prof.univ.dr.ing. Laurenţiu Dan MILICI
              </p>
              <p>
                <span className='card-details'>Secretara Sef: </span>
                Elena Curulean
              </p>
              <p>
                <span className='card-details'>Secretar: </span> {item.secretaryName}
              </p>
            </div>
            <div className='card-footer'>2022-2023</div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
