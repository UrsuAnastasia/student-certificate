export type IRequests = {
  id: number
  studentName: string
  studentEmail: string
  studyProgram: string
  status: string
}

export enum Status {
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
}

export type PostRequest = {
  id: number
  status: string
}

export type IRequestsStudent = {
  id: number
  status: string
  requestedDate: string
  reason: string
}
