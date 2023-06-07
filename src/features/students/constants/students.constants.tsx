import { ColumnsType } from 'antd/es/table'

export type DataType = {
  key?: React.Key
  name: string
  fatherInitial: string
  email: string
  domain: string
  specialization: string
  year: string
  financiarStatus: string
}
export const columns: ColumnsType<DataType> = [
  {
    title: 'Nume Prenume',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span style={{ color: '#010c3f' }}>{text}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Program de studii',
    dataIndex: 'domain',
    key: 'domain',
    align: 'center',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Domeniu de studii',
    dataIndex: 'specialization',
    key: 'specialization',
    align: 'center',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'An',
    dataIndex: 'year',
    key: 'year',
    align: 'center',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Statut financiar',
    dataIndex: 'financiarStatus',
    key: 'financiarStatus',
    align: 'center',
    render: (text) => <span>{text}</span>,
  },
]

export const data: DataType[] = [
  {
    key: 1,
    name: 'Ursu Anastasia',
    fatherInitial: 'V',
    email: 'usu98@gmail.com',
    domain: 'FIESC',
    specialization: 'Calculatoare',
    year: '2023',
    financiarStatus: 'bursa',
  },
]
