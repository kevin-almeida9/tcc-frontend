interface IFailModeFormProps {
  open: boolean
  onClose: () => void,
  bed?: string
  process?: string
  protocol?: string
}

interface IfailMode {
  id: string
  title: string
  describe: string
  createAt: string
  bed?:string
  process?:string
  protocol?:string
  RPN?: number
}

export type {
  IFailModeFormProps,
  IfailMode
}