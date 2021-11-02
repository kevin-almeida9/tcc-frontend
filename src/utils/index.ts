import { _statusBed } from 'views/Bed/bed'

export const getColorStatus = (status:_statusBed) =>{
  switch (status) {
    case 'empty':   return 'radial-gradient(50% 50% at 50% 50%, #709CDD 0%, #0F66E8 100%)'
    case 'using':   return 'radial-gradient(50% 50% at 50% 50%, #71EC26 0%, #0DBD49 100%)'
    case 'warning': return 'radial-gradient(50% 50% at 50% 50%, #F3F57F 0%, #ECF100 100%)'
    case 'danger':  return 'radial-gradient(50% 50% at 50% 50%, #DD7077 0%, #FF1A27 100%)'
    case 'disbled': return 'radial-gradient(50% 50% at 50% 50%, #E1E1E1 0%, #8D8D8D 100%)'
    default:        return 'black'
  }
}