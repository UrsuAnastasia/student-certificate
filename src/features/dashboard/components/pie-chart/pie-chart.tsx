import { Pie } from '@ant-design/charts'
import './pie-chart.scss'
import { FC } from 'react'

interface ILicense {
  title: string
}
const data = [
  {
    type: 'Calculatoare',
    value: 27,
  },
  {
    type: 'Electronica aplicata',
    value: 25,
  },
  {
    type: 'Reţele şi software de telecomunicaţii',
    value: 18,
  },
  {
    type: 'Sisteme electrice',
    value: 18,
  },
  {
    type: 'Energetică şi tehnologii informatice',
    value: 18,
  },
  {
    type: 'Managementul energiei',
    value: 18,
  },
]
const configLicense = {
  appendPadding: 10,
  data,
  angleField: 'value',
  colorField: 'type',
  color: ['#ffea90', '#244eb6', '#967ae1', '#fdbace', '#982cc9', '#30a9fa'],
  radius: 0.9,
}
export const PieChart: FC<ILicense> = ({ ...props }: any) => {
  return (
    <div className='pie'>
      <div className='pie-header'>
        <h1 className='pie-title'>{props.title}</h1>
      </div>
      <div className='pie-chart'>
        <Pie height={300} {...configLicense} />
      </div>
    </div>
  )
}
