import {Button, Col, Form, FormInstance, Input, Modal, Row, Select } from 'antd'
import React, { ReactNode, useRef, useState } from 'react'

interface IFailModeFormProps {
  open: boolean
  onClose: () => void
}

function FailModeForm({open, onClose}: IFailModeFormProps) {
  const formRef = useRef<FormInstance<any>>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = () => {

  } 

  return (
    <Modal 
      title="Relatar falha"
      visible={open} 
      onCancel={() => {
        formRef.current?.resetFields()
        onClose()
      }}
      onOk={() => {formRef.current?.submit()}}
      okText='Salvar'
      cancelText="Cancelar"
      okButtonProps={{
        loading:isLoading
      }}
      width={900}
      centered
    >
      <Form
        ref={formRef}
        onFinish={onSubmit}
        layout="vertical"
      >
        <Row gutter={{lg:15, md:15, sm:0, xs:0}}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="title"
              label="Titulo"
              >
              <Input placeholder="Digite um titulo"/>
            </Form.Item>
        
            <Form.Item
              name="describe"
              label="Descrição"
            >
              <Input.TextArea  rows={5} placeholder="Descreva o problema encontrado"/>
            </Form.Item>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="protocol"
              label="Protocolo"
            >
              <Select placeholder="Selecione um protocolo">
                <Select.Option value="p1">Protolo 1</Select.Option>
                <Select.Option value="p2">Protolo 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="process"
              label="POP"
            >
              <Select placeholder="Selecione um processo">
                <Select.Option value="p1">Processo 1</Select.Option>
                <Select.Option value="p2">Processo 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="bed"
              label="Leito"
            >
              <Select placeholder="Selecione um Leito">
                <Select.Option value="p1">Leito 1</Select.Option>
                <Select.Option value="p2">Leito 2</Select.Option>
              </Select>
            </Form.Item>
          </Col> 
        </Row>
      </Form>
    </Modal>
  )
}

export default FailModeForm

