import { Card, Col, Modal, Row } from 'antd'
import './specialization-card.scss'
import { faculties } from 'features/specialization/constants/specialization.constants'
import { AiOutlineEye, AiOutlineClose } from 'react-icons/ai'
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

  return (
    <Row gutter={[20, 20]}>
      {faculties.map((item, index) => (
        <Col xs={24} sm={12} md={8} lg={4} xl={6} key={index}>
          <Card hoverable className='card-container'>
            <div className='card-header'>
              <div className='card-eye'>
                <AiOutlineEye />
              </div>
              <div className='card-trash' onClick={() => showConfirm(item.id)}>
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
                <span className='card-details'>Secretar: </span> Laura Dospinescu
              </p>
            </div>
            <div className='card-footer'>2022-2023</div>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
