interface IPOP {
  id: string
  title: string
  describe: string
  describeHTML?: string
  checkList?: string[]
  createAt: string
  image: string
}
interface IPOPError {
  id?: string
  title?: string
  describe?: string
  createAt?: string
  image?: string
}

export type {
  IPOP,
  IPOPError
}