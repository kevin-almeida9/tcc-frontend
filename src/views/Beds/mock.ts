type _levelUTI = 'II' | 'III'
type _ambientsUTI = 'Quarto' | 'Área coletiva de tratamento'
type _classificationUTI = 'Neonatal' | 'Pediátrica' | 'Adulto' | 'Pediátrica Mista' | 'Especializada'
type _statusBed = 'empty' | 'using' | 'warning' | 'danger' | 'disbled'

interface IPatient {
  id: string | number
}

interface IBed {
  id: string | number
  name: string
  status: _statusBed
  level: _levelUTI
  ambient: _ambientsUTI
  classification: _classificationUTI
  specialty?: string
  patient?: IPatient
  warnings?: string[]
  failures?: string[]

}

const bedsMock: IBed[] = [
  {
    id: 1,
    name: 'Leito 1',
    level: 'II',
    status: 'empty',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 2,
    name: 'Leito 2',
    level: 'II',
    status: 'warning',
    ambient: 'Quarto',
    classification: 'Neonatal',
    warnings:[
      'Aguardando limpeza.',
      'Aguardando reposição de materiais.'
    ]
  },
  {
    id: 3,
    name: 'Leito 3',
    level: 'II',
    status: 'danger',
    ambient: 'Quarto',
    classification: 'Neonatal',
    failures:[
      'Falta de oxigênio.',
      'Falta de cânula de intubação.',
      'Falta de laringoscópio .'
    ]
  },
  {
    id: 4,
    name: 'Leito 4',
    level: 'II',
    status: 'disbled',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 5,
    name: 'Leito 5',
    level: 'II',
    status: 'using',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 6,
    name: 'Leito 6',
    level: 'II',
    status: 'empty',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 7,
    name: 'Leito 7',
    level: 'II',
    status: 'empty',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 8,
    name: 'Leito 8',
    level: 'II',
    status: 'empty',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 9,
    name: 'Leito 9',
    level: 'II',
    status: 'empty',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 10,
    name: 'Leito 10',
    level: 'II',
    status: 'empty',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 11,
    name: 'Leito 11',
    level: 'II',
    status: 'empty',
    ambient: 'Quarto',
    classification: 'Neonatal'
  },
  {
    id: 12,
    name: 'Leito 12',
    level: 'II',
    status: 'empty',
    ambient: 'Quarto',
    classification: 'Neonatal'
  }
]


export const beds = {
  list: (): IBed[] => {
    return bedsMock
  },
  getById: (id: number | string): IBed | undefined => {
    return bedsMock.find(bed => bed.id == id)
  },
  filterToClass: (classification: _classificationUTI): IBed[] => {
    return bedsMock.filter(bed => bed.classification === classification)
  },
  filterToStatus: (status: _statusBed): IBed[] => {
    return bedsMock.filter(bed => bed.status === status)
  }
}

export type {
  IBed,
  IPatient,
  _levelUTI,
  _ambientsUTI,
  _classificationUTI,
  _statusBed
}