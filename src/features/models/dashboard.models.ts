export type Raport = {
  createdThisMonth: number
  acceptedThisMonth: number
  refusedThisMonth: number
}

export type ReportByDomain = {
  totalStudents: number
  studentPerStudyProgram: [
    {
      studyProgramName: string
      studentsNumber: number
    },
  ]
}
