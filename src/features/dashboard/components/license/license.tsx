import { getStudentsRaportByDomain } from 'features/dashboard/store/dashboard.slice'
import { FC, useEffect } from 'react'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import { PieChart } from '../pie-chart/pie-chart'
interface ILicense {
  number: number
}
export const License: FC<ILicense> = ({ number }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getStudentsRaportByDomain(number))
  }, [dispatch, number])

  const raportByDomainSlice = useAppSelector(
    (state: RootState) => state.dashboard.raportByDomain?.studentPerStudyProgram,
  )
  const programes = raportByDomainSlice?.map((item) => item.studyProgramName)
  const numberPerProgames = raportByDomainSlice?.map((item) => item.studentsNumber)

  const dataLicentum = {
    labels: raportByDomainSlice ? programes : [],
    datasets: [
      {
        label: '# of Votes',
        data: raportByDomainSlice ? numberPerProgames : [],
        backgroundColor: ['#244eb6', '#ffea90', '#967ae1', '#fdbace', '#982cc9', '#30a9fa'],
        borderColor: ['#244eb6', '#ffea90', '#967ae1', '#fdbace', '#982cc9', '#30a9fa'],
        borderWidth: 1,
      },
    ],
  }
  return (
    <>
      <PieChart title={'Nr. de studenti inscrisi la licenta'} data={dataLicentum!} />
    </>
  )
}
