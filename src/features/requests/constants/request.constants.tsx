export enum RequestsType {
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
  NEW = 'NEW',
}

export interface DataTypeRequest {
  key: string
  name: string
  email: string
  faculty: string
  status: string
}
