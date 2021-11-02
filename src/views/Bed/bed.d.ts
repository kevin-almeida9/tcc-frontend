type _levelUTI = 'II' | 'III'
type _ambientsUTI = 'Quarto' | 'Área coletiva de tratamento'
type _classificationUTI = 'Neonatal' | 'Pediátrica' | 'Adulto' | 'Pediátrica Mista' | 'Especializada'
type _statusBed = 'empty' | 'using' | 'warning' | 'danger' | 'disbled'

interface IPatient {
  id: string | number
}

interface IBed {
  id: string 
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

export type {
  IBed,
  IPatient,
  _levelUTI,
  _ambientsUTI,
  _classificationUTI,
  _statusBed
}