import { Doughnut } from 'react-chartjs-2'
import './pie-chart.scss'
import { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
interface ILicense {
  title: string
  data: any
}
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
}
export const PieChart: FC<ILicense> = ({ ...props }: any) => {
  return (
    <div className='pie'>
      <div className='pie-header'>
        <h1 className='pie-title'>{props.title}</h1>
      </div>
      <div className='pie-chart'>
        <Doughnut width={'40%'} height={170} options={options} data={props.data} />
      </div>
    </div>
  )
}
