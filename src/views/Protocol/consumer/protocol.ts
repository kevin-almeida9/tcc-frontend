import { IResource } from "types"
import protocolList from "../mocks"
import { IProtocol } from "../protocal"

const protocol = {
  list: (): IProtocol[] => {
    return protocolList
  },
  getById: (id?: string): IProtocol | undefined => {
    return protocolList.find(propocol => propocol.id == id)
  },
  search: (search: string): IProtocol[] => {
    return protocolList.filter(propocol => propocol.title.toLowerCase().includes(search.toLowerCase()))
  },
  resouce: (): IResource[] => {
    return protocolList.map(propocol =>({label: propocol.title, value: propocol.id}))
  }
}

export default protocol