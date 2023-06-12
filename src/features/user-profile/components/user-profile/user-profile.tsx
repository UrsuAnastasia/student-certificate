import { userProfileBackgriund } from 'features/user-profile/constants/user-profile.constants'
import './user-profile.scss'
import { Avatar, Button, Space, Table, Tag } from 'antd'
import { getCurrentUser } from 'features/auth/store/auth.slice'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'
import { useAppDispatch, useAppSelector, RootState } from 'store/store'
import { generatePdf, getRequestByStudentId } from 'features/requests/store/request.slice'
import { RequestsType } from 'features/requests/constants/request.constants'
import { ColumnsType } from 'antd/es/table'
import { IRequestsStudent } from 'features/requests/models/request.models'
import { AiFillFileText } from 'react-icons/ai'
import { errorModal, successModal } from 'common/hooks/useSomething'
export const UserProfile = () => {
  const dispatch = useAppDispatch()

  const currentUser = useAppSelector((state: RootState) => state.user)

  const studentRequest = useAppSelector((state: RootState) => state.request.studentRequest)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(getRequestByStudentId(currentUser.user?.id!))
  }, [dispatch, currentUser.user?.id])

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
  const generatePdfhandle = async (id: any) => {
    const response: any = await dispatch(generatePdf(id))
    if (response.type === 'GENERATE_PDF/rejected') {
      errorModal('Eroare', 'A aparut o eroare')
    } else {
      successModal('Succes', 'PDF a fost generat cu succes.')
      // Open the generated PDF in a new browser tab
      window.open(response.data ? response.data : '', '_blank')
    }
  }
  const columns: ColumnsType<any> = [
    {
      title: 'Motiv',
      dataIndex: 'reason',
      key: 'reason',

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
      title: 'Data',
      dataIndex: 'requestedDate',
      key: 'requestedDate',
      align: 'center',
      render: (text) => <span style={{ color: '#7752a9', fontWeight: '400' }}>{text}</span>,
    },
    {
      title: 'Genereaza PDF',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      render: (
        _: any,
        record: {
          status: any
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
            disabled={record.status === RequestsType.DECLINED || record.status === RequestsType.NEW}
            style={{ border: '1px solid #62b33e', background: '#f6ffed' }}
            onClick={() => generatePdfhandle(record!.key)}
            icon={
              <AiFillFileText
                style={
                  record.status === RequestsType.DECLINED || record.status === RequestsType.NEW
                    ? { color: '' }
                    : { color: '#62b33e' }
                }
              />
            }
          />
        </Space>
      ),
    },
  ]

  const listOfRequest = studentRequest.map((item: IRequestsStudent) => {
    return {
      key: item.id,
      status: item.status,
      requestedDate: item.requestedDate,
      reason: item.reason,
    }
  })
  return (
    <div className='user-profile'>
      <div className='user-profile-avatar-container'>
        <div className='user-profile-avatar-first-cotainer'>
          <div>
            <img alt='userProfileBackgriund' src={userProfileBackgriund} />
          </div>

          <div className='user-profile-avatar-image-cotainer'>
            <Avatar size={120} src={currentUser.user?.profileImageUrl} />
          </div>
        </div>
        <div className='user-profile-avatar-second-cotainer'>
          <h4 className='user-profile-name'>{`${currentUser.user?.firstName} ${currentUser.user?.lastName}`}</h4>
          <p className='user-profile-email'>{currentUser.user?.email}</p>
        </div>
      </div>

      <div style={{ marginBottom: '50px' }}>
        <Table pagination={false} columns={columns} dataSource={listOfRequest} />
      </div>
    </div>
  )
}
