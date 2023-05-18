// import { Column } from '@ant-design/charts'
import './column-chart.scss'
export const Requests = () => {
  //   const data = [
  //     {
  //       type: 'Acceptate',
  //       month: 'Jul.',
  //       numbar: 18.9,
  //     },
  //     {
  //       type: 'Refuzate',
  //       month: 'Mar.',
  //       numbar: 28.8,
  //     },
  //     {
  //       type: 'Noi',
  //       month: 'Mar.',
  //       numbar: 30,
  //     },
  //     {
  //       type: 'Noi',
  //       month: 'Jul.',
  //       numbar: 31,
  //     },
  //     {
  //       type: 'Acceptate',
  //       month: 'Jun.',
  //       numbar: 19,
  //     },
  //     {
  //       type: 'Refuzate',
  //       month: 'Apr.',
  //       numbar: 29,
  //     },
  //     {
  //       type: 'Noi',
  //       month: 'Mai.',
  //       numbar: 29,
  //     },
  //   ]
  //   const config = {
  //     data,
  //     xField: 'month',
  //     yField: 'numbar',
  //     seriesField: 'type',
  //     color: ['#ffea90 ', '#244eb6 ', '#967ae1 '],
  //     isGroup: true,
  //     columnStyle: {
  //       radius: 10,
  //     },
  //   }
  return (
    <div className='requests'>
      <div className='pie-header'>
        <h1 className='pie-title'>Statistici lunare ale cererilor</h1>
      </div>
      <div className='requests-chart'>{/* <Column {...config} /> */}</div>
    </div>
  )
}
