import { Button, Form, Input, Modal, Select } from 'antd'
import { FC, useState } from 'react'
import './add-specialization.scss'
import { ISpecialization } from 'features/specialization/models/models.specialization'
import {
  secretaryOptions,
  specializationOptions,
} from 'features/specialization/constants/specialization.constants'
interface IAddModal {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}
export const AddSpecialization: FC<IAddModal> = ({ ...props }) => {
  const [formData, setFormData] = useState<ISpecialization>({
    name: '',
    year: '',
    dean: '',
    secretary: '',
    specialization: [],
  })
  const [form] = Form.useForm()

  const initialValues = [
    {
      name: ['name'],
      value: formData.name,
    },
    {
      name: ['year'],
      value: formData.year,
    },
    {
      name: ['dean'],
      value: formData.dean,
    },
    {
      name: ['secretary'],
      value: formData.secretary,
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

  const handlSubmit = (values: any) => {
    console.log('Received values of form: ', formData)
    form.validateFields()
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
        <Form.Item
          name='name'
          initialValue={formData.name}
          rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Denumirea și acronimul facultății</label>
          <Input
            name='name'
            allowClear
            placeholder='FIESC'
            onChange={hadlChangeInput}
            value={formData.name}
          />
        </Form.Item>
        <Form.Item name='year' rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Anul universitar curent</label>
          <Input name='year' allowClear placeholder='2023' onChange={hadlChangeInput} />
        </Form.Item>
        <Form.Item name='dean' rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Numele decanului</label>
          <Input
            name='dean'
            placeholder='Prof.univ.dr.ing. Laurenţiu Dan MILICI'
            onChange={hadlChangeInput}
          />
        </Form.Item>
        <Form.Item
          name='secretary'
          rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Numele secretarei-șef</label>
          <Select
            value={formData?.secretary}
            onChange={(value) => {
              setFormData({ ...formData, secretary: value })
            }}
            options={secretaryOptions}
          />
        </Form.Item>
        <Form.Item
          name='specialization'
          rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Programele de studii</label>
          <Select
            mode='multiple'
            value={formData?.specialization}
            onChange={(e) => {
              setFormData({
                ...formData,
                specialization: e,
              })
            }}
            options={specializationOptions}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
