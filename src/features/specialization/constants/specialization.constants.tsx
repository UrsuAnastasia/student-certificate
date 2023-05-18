export const secretaryList = [
  {
    id: 1,
    value: 'Elena CURELARU',
  },
  {
    id: 2,
    value: 'Laura DOSPINESCU',
  },
  {
    id: 3,
    value: 'Lucia-Cristina POPESCU',
  },
  {
    id: 4,
    value: 'Otilia FRUNZĂ',
  },
  {
    id: 5,
    value: 'Lucia-Cristina POPESCU',
  },
]

export const faculties = [
  {
    id: 1,
    name: 'Calculatoare',
  },
  {
    id: 2,
    name: 'Electronică aplicată',
  },
  {
    id: 3,
    name: 'Reţele şi software de telecomunicaţii',
  },
  {
    id: 4,
    name: 'Sisteme electrice',
  },
  {
    id: 5,
    name: 'Energetică şi tehnologii informatice',
  },
  {
    id: 6,
    name: 'Managementul energiei',
  },
  {
    id: 7,
    name: 'Automatică şi informatică aplicată',
  },
  {
    id: 8,
    name: 'Echipamente și sisteme de comandă şi control pentru autovehicule',
  },
  {
    id: 9,
    name: 'Echipamente şi sisteme medicale',
  },
]

export const secretaryOptions = secretaryList.map((item) => {
  return {
    label: item.value,
    value: item.id,
  }
})

export const specializationOptions = faculties.map((item) => {
  return {
    label: item.name,
    value: item.id,
  }
})
