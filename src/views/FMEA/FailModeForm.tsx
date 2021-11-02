import {Button, Col, Form, FormInstance, Input, Modal, Row, Select } from 'antd'
import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { IResource } from 'types'
import { IFailModeFormProps } from './failmode'
import bedConsumer from 'views/Bed/consumer/bed'
import processConsumer from 'views/POP/consumer/pop'
import protocolConsumer from 'views/Protocol/consumer/protocol'

function FailModeForm({open, onClose, bed, process, protocol}: IFailModeFormProps) {
  const formRef = useRef<FormInstance<any>>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [beds, setBeds] = useState<IResource[]>([])
  const [pops, setPops] = useState<IResource[]>([])
  const [protocols, setProtopols] = useState<IResource[]>([])

  const onSubmit = () => {

  } 

  useEffect(() => {
    if(open){
       formRef.current?.setFieldsValue({
        bed,
        process,
        protocol
       })
    }
  }, [open, bed, process, protocol])

  useLayoutEffect(() => {
    const getBeds = () => {
      try {
        const response = bedConsumer.resouce()
        if (response) setBeds(response)
      } catch (err) {
        console.log(err)
      }
    }

    const getProcess = () => {
      try {
        const response = processConsumer.resouce()
        if (response) setPops(response)
      } catch (err) {
        console.log(err)
      }
    }

    const getProtocols = () => {
      try {
        const response = protocolConsumer.resouce()
        if (response) setProtopols(response)
      } catch (err) {
        console.log(err)
      }
    }

    getBeds()
    getProcess()
    getProtocols()
  }, [])

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
              <Input.TextArea  rows={bed ? 9 : 5} placeholder="Descreva o problema encontrado"/>
            </Form.Item>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
           {
              bed && 
              <Form.Item
                name="status"
                label="Status"
              >
                <Select placeholder="Selecione um status">
                  <Select.Option value="warning"> Atenção</Select.Option>
                  <Select.Option value="danger">  Indisponível</Select.Option>
                </Select>
              </Form.Item>
            }
            <Form.Item
              name="protocol"
              label="Protocolo"
            >
              <Select 
                placeholder="Selecione um protocolo"
                options={protocols}
              />
            </Form.Item>
            <Form.Item
              name="process"
              label="POP"
            >
              <Select 
                placeholder="Selecione um processo"
                options={pops}
              />
            </Form.Item>
            <Form.Item
              name="bed"
              label="Leito"
            >
              <Select 
                placeholder="Selecione um Leito"         
                options={pops}
              />
            </Form.Item>
          </Col> 
        </Row>
      </Form>
    </Modal>
  )
}

export default FailModeForm

