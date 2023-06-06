import { Button, Modal, Upload, message } from 'antd'
import { AiFillFolder } from 'react-icons/ai'
import { FC, useState } from 'react'
import { useAppDispatch } from 'store/store'
import { importExcel } from 'features/students/store/students.slice'
interface IStudentsImportModal {
  open: boolean
  setOpen: (open: boolean) => void
}
export const StudentsImportModal: FC<IStudentsImportModal> = ({ setOpen, open }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [uploadFile, setUploadFile] = useState<any>(null)
  const dispatch = useAppDispatch()

  const { Dragger } = Upload

  const handleFileChange = (info: any) => {
    const { status, file } = info
    if (status !== 'uploading') {
      setUploadFile(file)
    }

    if (status === 'done') {
      message.success(`${file.name} fisierul a fost incarcat cu succes.`)
    } else if (status === 'error') {
      message.error(`${file.name} fisierul nu a putut fi incarcat.`)
    }
  }

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      if (uploadFile) {
        dispatch(importExcel(uploadFile))
        setOpen(false)
      }
    }, 3000)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <Modal
      open={open}
      title='Importa studenti'
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key='back' onClick={handleCancel}>
          Renunta
        </Button>,
        <Button key='submit' type='primary' loading={loading} onClick={handleOk}>
          Importa
        </Button>,
      ]}>
      <div>
        <Dragger
          name='file'
          multiple={false}
          maxCount={1}
          beforeUpload={() => false}
          onChange={handleFileChange}
          accept='.xlsx, .xls'>
          <p className='ant-upload-drag-icon'>
            <AiFillFolder style={{ fontSize: '36px' }} />
          </p>
          <p className='ant-upload-text' style={{ margin: '20px' }}>
            Apasă sau trage fișierul în această zonă pentru a încărca.
          </p>
        </Dragger>
      </div>
    </Modal>
  )
}
