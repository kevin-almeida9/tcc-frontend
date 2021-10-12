import React, { ReactNode, useRef, useState } from 'react'
import { Row, Typography, Form, FormInstance, Input, Col } from 'antd'
import { useHistory, useParams } from 'react-router'
import {ArrowLeftOutlined} from '@ant-design/icons'

function ProtocolForm(): ReactNode {
  const history = useHistory()
  const formRef = useRef<FormInstance<any>>(null)
  const { id } : { id: string } = useParams()

  const [errors, setErrors] = useState<any>({})

  const onSubmit = async (values: any) => {
    console.log(values)
  }

  return (
    <>
      <Row>
        <Col>
          <ArrowLeftOutlined onClick={()=> history.push('/protocols')} />
        </Col>
        <Col>
          <Typography.Title>{id? 'Editar Protocolo': 'Novo Protocolo'}</Typography.Title>
        </Col>
      </Row>
      <Form
        ref={formRef}
        layout="vertical"
        onFinish={onSubmit}
      >
        <Row>
          <Col sm={12} xs={24}>
            <Form.Item
              name='title'
              label='Titulo'
              help={errors.title && errors.title}
              validateStatus={errors.title && ('error')}
            >
              <Input placeholder="Digite o titulo"></Input>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default ProtocolForm
