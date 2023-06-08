import { Card, Col, Modal, Row } from 'antd'
import './programes-card.scss'
import { AiOutlineEye, AiOutlineClose } from 'react-icons/ai'
import { getallStudyProgrames } from 'features/specialization/store/stydy-program.slice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector, RootState } from 'store/store'
import { ISpecialization } from 'features/specialization/models/models.specialization'
export const SpecializationCard = () => {
  const { confirm } = Modal
  const showConfirm = (id: number) => {
    confirm({
      okText: 'Nu',
      okType: 'danger',
      cancelText: 'Da',
      title: 'Vrei sa stergi aceste date?',
      onOk() {},
      onCancel() {},
    })
  }
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getallStudyProgrames())
  }, [dispatch])

  const allProgramesStudents: Array<ISpecialization> = useAppSelector(
    (state: RootState) => state.studyProgram.studyProgrames,
  )
  return (
    <Row gutter={[20, 20]}>
      {allProgramesStudents?.map((item: ISpecialization, index: number) => (
        <Col xs={24} sm={12} md={8} lg={4} xl={6} key={index}>
          <Card hoverable className='card-container'>
            <div className='card-header'>
              <div className='card-eye'>
                <AiOutlineEye />
              </div>
              <div className='card-trash' onClick={() => showConfirm(item.id!)}>
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
