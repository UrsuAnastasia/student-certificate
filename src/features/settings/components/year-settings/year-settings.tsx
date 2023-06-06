import { Button, DatePicker, Form } from 'antd'
import './year-settings.scss'
import { useEffect, useState } from 'react'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import { finishYear, getCurrentYear, postYear } from 'features/settings/store/settings.slice'
import { errorModal, successModal } from 'common/hooks/useSomething'

export const YearSeetings = () => {
  const [year, setYear] = useState<any>({
    currentAcademicYear_start: '',
    currentAcademicYear_finish: '',
  })
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const currentYear = useAppSelector((state: RootState) => state.settings.year)
  useEffect(() => {
    dispatch(getCurrentYear())
  }, [dispatch])
  const initialValues = [
    {
      name: ['currentAcademicYear_start'],
      value: year.currentAcademicYear_start,
    },
    {
      name: ['currentAcademicYear_finish'],
      value: year.currentAcademicYear_finish,
    },
  ]

  const onFinish = async (values: any) => {
    form.validateFields()
    const payload = {
      currentAcademicYear: `${year.currentAcademicYear_start}-${year.currentAcademicYear_finish}`,
    }
    const response = await dispatch(postYear(payload))
    if (response.type === 'POST_YEAR/rejected') {
      errorModal('Eroare', 'A aparut o eroare')
    } else {
      successModal('Succes', 'Anul curent a fost setat pentru acest an universitar cu succes.')
    }
  }
  const endCurrentYear = async () => {
    const response = await dispatch(finishYear())
    if (response.type === 'FINISH_YEAR/rejected') {
      errorModal('Eroare', 'A aparut o eroare')
    } else {
      successModal('Succes', 'Anul curent a fost incheiat cu succes.')
    }
  }

  return (
    <div className='year-settings'>
      <div className='year-settings-span'>Adauga anul curent </div>
      <Form
        onFinish={currentYear?.currentAcademicYear ? endCurrentYear : onFinish}
        initialValues={initialValues}
        form={form}
        scrollToFirstError>
        <div>
          <span>Inceputul anului curent</span>
        </div>
        <Form.Item
          name={'currentAcademicYear_start'}
          rules={[{ required: true, message: 'Acest camp este obligatoriu!' }]}>
          <DatePicker
            style={{ width: '600px' }}
            onChange={(eveent, dateString) => {
              setYear({ ...year, currentAcademicYear_start: dateString })
            }}
            format={'YYYY'}
            picker='year'
            placeholder='2022'
          />
        </Form.Item>
        <span>Sfarsitul anului curent</span>
        <Form.Item
          name={'currentAcademicYear_finish'}
          rules={[{ required: true, message: 'Acest camp este obligatoriu!' }]}>
          <DatePicker
            style={{ width: '600px' }}
            onChange={(eveent, dateString) => {
              setYear({ ...year, currentAcademicYear_finish: dateString })
            }}
            format={'YYYY'}
            picker='year'
            placeholder='2023'
          />
        </Form.Item>
        <Form.Item>
          <Button className='year-settings-button' type='primary' htmlType='submit'>
            {currentYear?.currentAcademicYear ? 'Incheie anul universitar' : 'Adauga'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
