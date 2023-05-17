import { Card, Col, Row } from 'antd'
import './specialization-card.scss'

export const SpecializationCard = () => {
  const faculties = [
    {
      name: 'Calculatoare',
    },
    {
      name: 'Electronică aplicată',
    },
    {
      name: 'Reţele şi software de telecomunicaţii',
    },
    {
      name: 'Sisteme electrice',
    },
    {
      name: 'Energetică şi tehnologii informatice',
    },
    {
      name: 'Managementul energiei',
    },
    {
      name: 'Automatică şi informatică aplicată',
    },
    {
      name: 'Echipamente și sisteme de comandă şi control pentru autovehicule',
    },
    {
      name: 'Echipamente şi sisteme medicale',
    },
  ]
  return (
    <Row gutter={[20, 20]}>
      {faculties.map((item, index) => (
        <Col xs={24} sm={12} md={8} lg={4} xl={6} key={index}>
          <Card hoverable className='card-container'>
            <div className='card-circle'>
              <img
                alt='cover'
                src={
                  'https://media.istockphoto.com/id/1070519460/vector/coaching-online-trainings-group-lessons-webinars-online-seminars.jpg?s=612x612&w=0&k=20&c=HrK82BlrZ54hwDQct5lBTGnGch60PpDoAiZ7sDmH6Og='
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
