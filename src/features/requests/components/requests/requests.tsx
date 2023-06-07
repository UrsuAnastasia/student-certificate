import Layout from 'antd/es/layout/layout'
import './requests.scss'
import { Button, Modal, Space, Table, Tag } from 'antd'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { ColumnsType } from 'antd/es/table'
import { DataTypeRequest, RequestsType, data } from 'features/requests/constants/request.constants'
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai'

const { confirm } = Modal
export const Requests = () => {
  const showDeleteConfirm = () => {
    confirm({
      title: 'Vrei sa declini aceasta cerere?',
      okText: 'DA',
      okType: 'danger',
      cancelText: 'Nu',
      onOk() {},
      onCancel() {},
    })
  }

  const showConfirm = () => {
    confirm({
      title: 'Vrei sa accepti aceasta cerere?',
      okText: 'NU',
      cancelText: 'Da',
      onOk() {},
      onCancel() {},
    })
  }
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
            onClick={showConfirm}
            icon={<AiOutlineCheck style={{ color: '#62b33e' }} />}
          />
          <Button
            style={{ border: '1px solid red', background: '#fff2e8' }}
            color='red'
            onClick={() => showDeleteConfirm()}
            icon={<AiFillDelete style={{ fill: 'red' }} />}
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
