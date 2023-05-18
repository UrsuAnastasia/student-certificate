import { Doughnut } from 'react-chartjs-2'
import './pie-chart.scss'
import { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
interface ILicense {
  title: string
}
export const data = {
  labels: [
    'Calculatoare',
    'Electronica aplicata',
    'Reţele şi software de telecomunicaţii',
    'Sisteme electrice',
    'Energetică şi tehnologii informatice',
    'Managementul energiei',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['#ffea90', '#244eb6', '#967ae1', '#fdbace', '#982cc9', '#30a9fa'],
      borderColor: ['#ffea90', '#244eb6', '#967ae1', '#fdbace', '#982cc9', '#30a9fa'],
      borderWidth: 1,
    },
  ],
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
        <Doughnut width={'40%'} height={170} options={options} data={data} />
      </div>
    </div>
  )
}
