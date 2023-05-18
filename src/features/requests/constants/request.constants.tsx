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
export const data: DataTypeRequest[] = [
  {
    key: '1',
    name: 'John Brown',
    email: 'ana@mail.com',
    faculty: 'Calculatoare',
    status: 'DECLINED',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'ana@mail.com',
    faculty: 'Calculatoare',
    status: 'NEW',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'ana@mail.com',
    faculty: 'Calculatoare',
    status: 'APPROVED',
  },
]
