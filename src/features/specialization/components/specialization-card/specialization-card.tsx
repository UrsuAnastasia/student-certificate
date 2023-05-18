import { Card, Col, Row } from 'antd'
import './specialization-card.scss'
import { faculties } from 'features/specialization/constants/specialization.constants'

export const SpecializationCard = () => {
  return (
    <Row gutter={[20, 20]}>
      {faculties.map((item, index) => (
        <Col xs={24} sm={12} md={8} lg={4} xl={6} key={index}>
          <Card hoverable className='card-container'>
            <div className='card-circle'>
              <img
                alt='cover'
                src={
                  'https://cdni.iconscout.com/illustration/premium/thumb/data-analysis-5560609-4634130.png?f=webp'
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
