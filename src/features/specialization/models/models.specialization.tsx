export type ISpecialization = {
  id?: number
  name: string
  description?: string
  acronym: string
  secretaryId: string
  secretaryName?: string
}

export type StudentsProgrames = {
  acronym: string
  description: string
  id: null
  name: string
  secretaryId: string
  secretaryName: string
}

export type Secretares = {
  id: string
  name: string
}
