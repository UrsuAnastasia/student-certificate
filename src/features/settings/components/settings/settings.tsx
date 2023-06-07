import { RootState, useAppDispatch, useAppSelector } from 'store/store'

import { YearSeetings } from '../year-settings/year-settings'
import './settings.scss'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'
import { deleteDomain, getDomains } from 'features/settings/store/settings.slice'
import { Button, Modal, Space, Table } from 'antd'
import { Domain } from 'features/settings/models/settings.modal'
import { DomainSettings } from '../domain/domain'
import { ColumnsType } from 'antd/es/table'
import { AiFillDelete } from 'react-icons/ai'

export const Settings = () => {
  const domainsSlice: any = useAppSelector((state: RootState) => state.settings.domains)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDomains())
  }, [dispatch])

  const { confirm } = Modal

  const showDeleteConfirm = (id: any) => {
    confirm({
      title: 'Vrei sa stergi acest domeniu?',
      okText: 'DA',
      okType: 'danger',
      cancelText: 'Nu',
      onOk() {
        dispatch(deleteDomain(id))
      },
      onCancel() {},
    })
  }
  const columns: ColumnsType<any> = [
    {
      title: 'Id',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <span style={{ color: '#7752a9', fontWeight: '400' }}>{text}</span>,
    },
    {
      title: 'Nume',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Anul curent',
      dataIndex: 'currentYear',
      key: 'currentYear',
      render: (text) => <span style={{ color: '#7752a9', fontWeight: '400' }}>{text}</span>,
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
            style={{ border: '1px solid red', background: '#fff2e8' }}
            color='red'
            onClick={() => showDeleteConfirm(record?.key)}
            icon={<AiFillDelete style={{ fill: 'red' }} />}
          />
        </Space>
      ),
    },
  ]
  const listOfStudents = domainsSlice?.map((item: Domain) => {
    return {
      key: item.id,
      name: item.name,
      currentYear: item.academicYear,
    }
  })
  return (
    <div className='settings'>
      <div className='settings-container'>
        <h1 className='settings-title'>Setări</h1>
        <div className='settings-section'>
          <YearSeetings />
        </div>
        <div className='settings-section'>
          <DomainSettings />
        </div>
        <div className='settings-section'>
          <div className='settings-table'>
            <h3 className='settings-table-title'>Lista de domenii</h3>
            <Table
              pagination={false}
              rowClassName='requests-row'
              size='large'
              columns={columns}
              dataSource={listOfStudents}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
