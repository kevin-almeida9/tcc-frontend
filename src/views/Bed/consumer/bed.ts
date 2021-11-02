import { IResource } from "types"
import { IBed, _classificationUTI } from "../bed"
import bedsMock from "../mock"

const bed = {
  list: (): IBed[] => {
    return bedsMock
  },
  getById: (id?: string): IBed | undefined => {
    return bedsMock.find(bed => bed.id == id)
  },
  search: (search: string): IBed[] => {
    return bedsMock.filter(bed => bed.name.toLowerCase().includes(search.toLowerCase()))
  },
  resouce: (): IResource[] => {
    return bedsMock.map(bed =>({label: bed.name, value: bed.id}))
  }
}

export default bed