import { Button, Form, Input, Modal, Select } from 'antd'
import { FC, useEffect, useState } from 'react'
import './add-program.scss'
import { ISpecialization, Secretares } from 'features/specialization/models/models.specialization'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import { errorModal, successModal } from 'common/hooks/useSomething'
import {
  addStudyProgram,
  editStudyProgram,
  getAllSecretary,
  getStudyProgramById,
} from 'features/specialization/store/stydy-program.slice'

interface IAddModal {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  isEditMode?: boolean
  programId?: number
}

export const AddSpecialization: FC<IAddModal> = ({
  showModal,
  setShowModal,
  isEditMode,
  programId,
}) => {
  const [formData, setFormData] = useState<ISpecialization>({
    name: '',
    acronym: '',
    secretaryId: '',
  })

  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllSecretary())
  }, [dispatch])

  const editedProgram: ISpecialization | null = useAppSelector(
    (state: RootState) => state.studyProgram.studyProgram,
  )

  const secretaresSlice: Array<Secretares> = useAppSelector(
    (state: RootState) => state.studyProgram.secretares,
  )
  useEffect(() => {
    dispatch(getStudyProgramById(programId))
  }, [dispatch])

  useEffect(() => {
    if (isEditMode && programId) {
      setFormData({
        name: editedProgram?.name || '',
        acronym: editedProgram?.acronym || '',
        secretaryId: editedProgram?.secretaryId || '',
      })
    } else {
      setFormData({
        name: '',
        acronym: '',
        secretaryId: '',
      })
    }
  }, [dispatch, isEditMode, programId, editedProgram])

  const secretaryOptions = secretaresSlice.map((item) => ({
    label: item.name,
    value: item.id,
  }))

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

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleCancel = () => {
    setShowModal(false)
  }

  const handleSubmit = async () => {
    try {
      await form.validateFields()

      if (!editedProgram) {
        const addProgram = {
          name: formData.name,
          acronym: formData.acronym,
          secretaryId: formData.secretaryId,
        }
        const response = await dispatch(addStudyProgram(addProgram))
        if (response.type === 'POST_YEAR/rejected') {
          errorModal('Eroare', 'A apărut o eroare')
        } else {
          setShowModal(false)
          successModal('Succes', 'Programul de studiu a fost adăugat cu succes.')
        }
      } else {
        const editProgram = {
          id: programId,
          name: formData.name,
          acronym: formData.acronym,
          secretaryId: formData.secretaryId,
        }
        const response = await dispatch(editStudyProgram(editProgram))
        if (response.type === 'POST_YEAR/rejected') {
          errorModal('Eroare', 'A apărut o eroare')
        } else {
          setShowModal(false)
          successModal('Succes', 'Programul de studiu a fost adăugat cu succes.')
        }
      }

      form.resetFields()
    } catch (error) {
      console.log('Validation error:', error)
    }
  }

  return (
    <Modal
      footer={[
        <Button key='back' onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key='submit' type='primary' onClick={handleSubmit}>
          Adauga
        </Button>,
      ]}
      open={showModal}
      title='Adauga un program de studiu'
      onOk={handleCancel}
      onCancel={handleCancel}>
      <Form
        name='register'
        scrollToFirstError
        form={form}
        style={{ marginTop: '20px' }}
        fields={initialValues}
        onFinish={handleSubmit}>
        <Form.Item name='name' rules={[{ required: true, message: 'Acest camp este obligatoriu' }]}>
          <label className='add-specialization-label'>Denumirea programului de studiu</label>
          <Input
            name='name'
            allowClear
            placeholder='FIESC'
            onChange={handleChangeInput}
            value={formData.name!}
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
            onChange={handleChangeInput}
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
