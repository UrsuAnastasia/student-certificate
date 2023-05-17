import Layout from 'antd/es/layout/layout'
import './requests.scss'
import { Button, Space, Table, Tag } from 'antd'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { ColumnsType } from 'antd/es/table'
import { DataTypeRequest, RequestsType } from 'features/requests/constants/request.constants'
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons'
const data: DataTypeRequest[] = [
  {
    key: '1',
    name: 'John Brown',
    email: 'ana@mail.com',
    faculty: 'Calculatoare',
    status: 'DECLINED',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'ana@mail.com',
    faculty: 'Calculatoare',
    status: 'NEW',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'ana@mail.com',
    faculty: 'Calculatoare',
    status: 'APPROVED',
  },
]
export const Requests = () => {
  const renderColor = (color: string) => {
    switch (color) {
      case RequestsType.APPROVED:
        return 'green'
      case RequestsType.NEW:
        return 'geekblue'
      case RequestsType.DECLINED:
        return 'volcano'
      default:
        return 'foo'
    }
  }

  const columns: ColumnsType<DataTypeRequest> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span style={{ color: '#010c3f' }}>{text}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      render: (text) => <span style={{ color: '#7752a9', fontWeight: '400' }}>{text}</span>,
    },
    {
      title: 'Specialitate',
      dataIndex: 'faculty',
      key: 'faculty',
      align: 'center',
      render: (text) => <span style={{ color: '#7752a9', fontWeight: '400' }}>{text}</span>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      align: 'center',
      render: (text: any) => (
        <>
          <Tag color={renderColor(text)} key={1}>
            {text}
          </Tag>
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (
        _: any,
        record: {
          name:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined
        },
      ) => (
        <Space size='middle'>
          <Button
            style={{ border: '1px solid #62b33e', background: '#f6ffed' }}
            icon={<CheckOutlined style={{ color: '#62b33e' }} />}
          />
          <Button
            style={{ border: '1px solid red', background: '#fff2e8' }}
            color='red'
            icon={<DeleteOutlined style={{ color: 'red' }} />}
          />
        </Space>
      ),
    },
  ]
  return (
    <Layout className='requests-list'>
      <h1 className='requests-list-title'>Cereri</h1>
      <div>
        <Table rowClassName='requests-row' size='large' columns={columns} dataSource={data} />
      </div>
    </Layout>
  )
}
