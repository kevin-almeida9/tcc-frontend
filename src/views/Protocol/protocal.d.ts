interface IProtocol {
  id: string
  title: string
  describe: string
  describeHTML?: string
  checkList?: string[]
  createAt: string
  image: string
}

interface IProtocolError {
  id?: string
  title?: string
  describe?: string
  createAt?: string
  image?: string
}


export type {
  IProtocol,
  IProtocolError
}