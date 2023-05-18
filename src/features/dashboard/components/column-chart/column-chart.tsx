import './column-chart.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export const RequestsChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  }

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  const data = {
    labels,
    datasets: [
      {
        label: 'Noi',
        data: [0, 8, 10, 20],
        backgroundColor: '#ffea90',
      },
      {
        label: 'Acceptate',
        data: [0, 8, 10, 20],
        backgroundColor: '#244eb6',
      },
      {
        label: 'Refuzate',
        data: [0, 8, 10, 20],
        backgroundColor: '#967ae1',
      },
    ],
  }
  return (
    <div className='requests'>
      <div className='pie-header'>
        <h1 className='pie-title'>Statistici lunare ale cererilor</h1>
      </div>
      <div className='requests-chart'>
        <Bar height='350' options={options} data={data} />
      </div>
    </div>
  )
}
