import React, { useEffect, useRef, useState } from 'react'
import { FormInstance, Modal, Form, Typography, Slider, Divider } from 'antd'
import { IfailMode } from './failmode'

interface IRPNModalProps {
  open: boolean
  onClose: () => void
  failMode?: IfailMode
}

function RPNModal ({open, onClose, failMode}: IRPNModalProps) {
  const formRef = useRef<FormInstance<any>>(null)
  const [isLoading, setIsLoading] =  useState(false)

  const onSubmit = () => {

  }

  useEffect(() => {
    if(!failMode && open) {
      Modal.error({
        title:'Atenção!',
        content: 'Modo de falha não econtrado, tente novamente mais tarde.',
      })
    }
  },[failMode])

  const formatter = (value?: number)=> {
    switch (value) {
      case 1: return 'Nunca'
      case 2: return 'Raramente'
      case 3: return 'Muito baixa'
      case 4: return 'Baixa'
      case 5: return 'Moderada p/ baixa'
      case 6: return 'Moderada'
      case 7: return 'Moderada p/ alta'
      case 8: return 'Alta'
      case 9: return 'Muito ALta'
      case 10: return'Sempre'
      default: return ''
    }

  }

  return (
    <Modal 
      title={failMode?.title}
      visible={open} 
      className="rpn-modal"
      onCancel={() => {
        formRef.current?.resetFields()
        onClose()
      }}
      destroyOnClose
      onOk={() => {formRef.current?.submit()}}
      okText='Salvar'
      cancelText="Cancelar"
      okButtonProps={{
        loading:isLoading
      }}
      centered
    >
      <Typography.Paragraph
        ellipsis={{
          rows: 5,
          expandable: true,
          symbol: ' Exibir mais',  
        }}
      >
        {failMode?.describe}
      </Typography.Paragraph>
      <Form
        ref={formRef}
        onFinish={onSubmit}
        layout="vertical"
      >
        <Form.Item 
          name="severity" 
          label="Gravidade do problema"
          help="no qual 1 é “nunca” e 10 é “sempre”"
        >
          <Slider
            max={10}
            min={1}
            tipFormatter={formatter}
            marks={{
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5',
              6: '6',
              7: '7',
              8: '8',
              9: '9',
              10: '10',
            }}
          />
      </Form.Item>
      <Divider/>
      <Form.Item 
        name="occorence" 
        label="Probabilidade de ocorrência"
        help="no qual 1 é “nunca” e 10 é “sempre”"
      >
        <Slider
          max={10}
          min={1}
          tipFormatter={formatter}
          marks={{
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
          }}
        />
      </Form.Item>
      <Divider/>
      <Form.Item 
          name="detection" 
          label="Probabilidade de detecção da falha"
          help="No qual 10 é “nunca” e 1 é “sempre”"
        >
          <Slider
            max={10}
            min={1}
            tipFormatter={formatter}
            marks={{
              1: '10',
              2: '9',
              3: '8',
              4: '7',
              5: '6',
              6: '5',
              7: '4',
              8: '3',
              9: '2',
              10: '1',
            }}
          />
      </Form.Item>
      </Form>
    </Modal>
  )
}

export default RPNModal
