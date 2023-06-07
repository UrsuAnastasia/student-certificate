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
  }, [dispatch, currentYear])

  useEffect(() => {
    if (currentYear?.currentAcademicYear!) {
      const substrings = currentYear?.currentAcademicYear.split('-')
      setYear({
        currentAcademicYear_start: substrings![0]!,
        currentAcademicYear_finish: substrings![1]!,
      })
    } else {
      setYear({ currentAcademicYear_start: '', currentAcademicYear_finish: '' })
    }
  }, [dispatch, currentYear])

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
    form.resetFields()
  }
  const endCurrentYear = async () => {
    const response = await dispatch(finishYear())
    if (response.type === 'FINISH_YEAR/rejected') {
      errorModal('Eroare', 'A aparut o eroare')
    } else {
      successModal('Succes', 'Anul curent a fost incheiat cu succes.')
    }
    form.resetFields()
  }
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

  return (
    <div className='year-settings'>
      {currentYear?.currentAcademicYear ? (
        ``
      ) : (
        <div className='year-settings-span'>Adauga un nou an universitar</div>
      )}
      <Form
        style={{ width: '70%' }}
        onFinish={currentYear?.currentAcademicYear ? endCurrentYear : onFinish}
        initialValues={initialValues}
        form={form}
        scrollToFirstError>
        {currentYear?.currentAcademicYear ? (
          <h1 className='year-settings-h1'>
            {currentYear?.currentAcademicYear
              ? `Incheie anul universitar curent : ${currentYear?.currentAcademicYear}`
              : ''}
          </h1>
        ) : (
          <>
            <div>
              <span className='year-settings-label'>Inceputul anului curent</span>
            </div>
            <Form.Item
              name={'currentAcademicYear_start'}
              rules={[{ required: true, message: 'Acest camp este obligatoriu!' }]}>
              <DatePicker
                name={'currentAcademicYear_start'}
                style={{ width: '100%' }}
                onChange={(event, dateString) => {
                  setYear({ ...year, currentAcademicYear_start: dateString })
                }}
                format={'YYYY'}
                picker='year'
                placeholder='2022'
              />
            </Form.Item>
            <span className='year-settings-label'>Sfarsitul anului curent</span>
            <Form.Item
              name={'currentAcademicYear_finish'}
              rules={[{ required: true, message: 'Acest camp este obligatoriu!' }]}>
              <DatePicker
                style={{ width: '100%' }}
                onChange={(event, dateString) => {
                  setYear({ ...year, currentAcademicYear_finish: dateString })
                }}
                format={'YYYY'}
                picker='year'
                placeholder='2023'
              />
            </Form.Item>
          </>
        )}
        <Form.Item>
          <Button className='year-settings-button' type='primary' htmlType='submit'>
            {currentYear?.currentAcademicYear ? 'Incheie ' : 'Adauga'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
