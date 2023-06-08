import Layout from 'antd/es/layout/layout'
import './requests.scss'
import { Button, Modal, Space, Table, Tag } from 'antd'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect } from 'react'
import { ColumnsType } from 'antd/es/table'
import { DataTypeRequest, RequestsType } from 'features/requests/constants/request.constants'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import {
  approveDeclineRequest,
  getAllRequestBySecretaryId,
} from 'features/requests/store/request.slice'
import { IRequests, PostRequest, Status } from 'features/requests/models/request.models'

const { confirm } = Modal
export const Requests = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllRequestBySecretaryId('4432df1b-43ed-47e7-b7b3-a43e53f04570'))
  }, [dispatch])

  const requsetSlice = useAppSelector((state: RootState) => state.request)
  const showDeleteConfirm = (key: any) => {
    confirm({
      title: 'Vrei să declini această cerere?',
      okText: 'Iesi',
      okType: 'danger',
      cancelText: 'Da',
      onCancel() {
        const payload: PostRequest = {
          id: +key,
          status: Status.DECLINED,
        }
        dispatch(approveDeclineRequest(payload))
      },
    })
  }

  const showConfirm = (key: any) => {
    confirm({
      title: 'Vrei sa accepti aceasta cerere?',
      okText: 'Iesi',
      cancelText: 'Da',
      onCancel() {
        const payload: PostRequest = {
          id: +key,
          status: Status.APPROVED,
        }
        dispatch(approveDeclineRequest(payload))
      },
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
  const listOfRequest = requsetSlice?.requests!.map((item: IRequests) => {
    return {
      key: item.id.toString(),
      name: item.studentName,
      email: item.studentEmail,
      faculty: item.studyProgram,
      status: item.status,
    }
  })

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
          key:
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
            onClick={() => showConfirm(record?.key)}
            icon={<AiOutlineCheck style={{ color: '#62b33e' }} />}
          />
          <Button
            style={{ border: '1px solid red', background: '#fff2e8' }}
            color='red'
            onClick={() => showDeleteConfirm(record?.key)}
            icon={<AiOutlineClose style={{ fill: 'red' }} />}
          />
        </Space>
      ),
    },
  ]
  return (
    <Layout className='requests-list'>
      <h1 className='requests-list-title'>Cereri</h1>
      <div>
        <Table
          rowClassName='requests-row'
          size='large'
          columns={columns}
          dataSource={listOfRequest}
        />
      </div>
    </Layout>
  )
}
