import { IResource } from "types"
import popList from "../mocks"
import { IPOP } from "../pop"

const pop = {
  list: (): IPOP[] => {
    return popList
  },
  getById: (id?: string): IPOP | undefined => {
    return popList.find(process => process.id == id)
  },
  search: (search: string): IPOP[] => {
    return popList.filter(process => process.title.toLowerCase().includes(search.toLowerCase()))
  },
  resouce: (): IResource[] => {
    return popList.map(process =>({label: process.title, value: process.id}))
  }
}

export default pop