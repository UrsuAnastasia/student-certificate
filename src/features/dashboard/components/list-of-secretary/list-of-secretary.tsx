import { Table } from 'antd'
import './list-of-secretary.scss'
import { ColumnsType } from 'antd/es/table'

export const ListOfSecretary = () => {
  interface DataType {
    key: string
    name: string
    email: string
    telephone: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Nume Prenume',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span className='secretary-table-item'>{text}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <span className='secretary-table-item-details'>{text}</span>,
    },
    {
      title: 'Telefon',
      dataIndex: 'telephone',
      key: 'telephone',
      render: (text) => <span className='secretary-table-item-details'>{text}</span>,
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'Secretar şef ing. Elena CURELARU',
      email: 'elena@usm.ro',
      telephone: '+40 230 522978, ext.281',
    },
    {
      key: '2',
      name: 'Secretar ec. Laura DOSPINESCU',
      email: 'aurad@usm.ro',
      telephone: '+40 230 522978, ext.124',
    },
    {
      key: '3',
      name: 'Secretaring. Lucia-Cristina POPESCU',
      email: 'lucia.popescu@usm.ro',
      telephone: 'telefon: +40 230 522978, ext.124',
    },
    {
      key: '4',
      name: 'Secretar ing. Otilia FRUNZĂ',
      email: 'otilia.frunza@usm.ro',
      telephone: '+40 230 522978, ext.124',
    },
    {
      key: '5',
      name: 'Secretaring. Lucia-Cristina POPESCU',
      email: 'ionut.cimpan@usv.ro',
      telephone: '+40 230 522978, ext.124',
    },
  ]

  return (
    <div className='secretary'>
      <Table style={{ width: '100%' }} size='small' columns={columns} dataSource={data} />
    </div>
  )
}
