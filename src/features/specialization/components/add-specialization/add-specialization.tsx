import { Button, Form, Input, Modal, Select } from 'antd'
import { FC, useState } from 'react'
import './add-specialization.scss'
import { ISpecialization } from 'features/specialization/models/models.specialization'
import { secretaryOptions } from 'features/specialization/constants/specialization.constants'
import { addStudyProgram } from 'features/specialization/store/stydy-program.slice'
import { useAppDispatch } from 'store/store'
import { errorModal, successModal } from 'common/hooks/useSomething'
interface IAddModal {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}
export const AddSpecialization: FC<IAddModal> = ({ ...props }) => {
  const [formData, setFormData] = useState<ISpecialization>({
    name: '',
    acronym: '',
    secretaryId: '',
  })

  const dispatch = useAppDispatch()

  const [form] = Form.useForm()

  const initialValues = [
    {
      name: ['name'],
      value: formData.name,
    },
    {
      name: ['acronym'],
      value: formData.name,
    },
    {
      name: ['secretaryId'],
      value: formData.name,
    },
  ]

  const hadlChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleCancel = () => {
    props.setShowModal(false)
  }

  const handlSubmit = async (values: any) => {
    form.validateFields()
    const payload = {
      name: formData.name,
      acronym: formData.acronym,
      secretaryId: '4432df1b-43ed-47e7-b7b3-a43e53f04570',
    }
    const response = await dispatch(addStudyProgram(payload))
    if (response.type === 'POST_YEAR/rejected') {
      errorModal('Eroare', 'A aparut o eroare')
    } else {
      props.setShowModal(false)
      successModal('Succes', 'Programul de studiu a fost adaugat cu succes.')
    }
    form.resetFields()
  }
  return (
    <Modal
      footer={[
        <Button key='back' onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key='submit' type='primary' onClick={handlSubmit}>
          Adauga
        </Button>,
      ]}
      open={props.showModal}
      title='Adauga un program de studiu'
      onOk={handleCancel}
      onCancel={handleCancel}>
      <Form
        name='register'
        scrollToFirstError
        form={form}
        style={{ marginTop: '20px' }}
        fields={initialValues}
        onFinish={handlSubmit}>
        <Form.Item name='name' rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Denumirea programului de studiu</label>
          <Input
            name='name'
            allowClear
            placeholder='FIESC'
            onChange={hadlChangeInput}
            value={formData.name}
          />
        </Form.Item>
        <Form.Item
          name='acronym'
          initialValue={formData.acronym}
          rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Acronimul facultății</label>
          <Input
            name='acronym'
            allowClear
            placeholder='FIESC'
            onChange={hadlChangeInput}
            value={formData.acronym}
          />
        </Form.Item>
        <Form.Item
          name='secretaryId'
          rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Numele secretarei-șef</label>
          <Select
            value={formData?.secretaryId}
            onChange={(value) => {
              setFormData({ ...formData, secretaryId: value })
            }}
            options={secretaryOptions}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
