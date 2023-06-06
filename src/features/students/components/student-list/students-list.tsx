import React, { FC, useState } from 'react'
import { Table } from 'antd'
import type { TableRowSelection } from 'antd/es/table/interface'
import './students-list.scss'
import { DataType } from 'features/students/constants/students.constants'

interface IStudentList {
  columns: any
  data: any
}

export const StudentList: FC<IStudentList> = ({ ...props }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
  }

  return (
    <div>
      <Table
        className='studentList-table'
        rowSelection={rowSelection}
        columns={props.columns}
        dataSource={props.data}
      />
    </div>
  )
}
