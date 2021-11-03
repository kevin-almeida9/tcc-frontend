import React, { ReactNode, useRef, useState } from 'react'
import { Row, Typography, Form, FormInstance, Input, Col, Button } from 'antd'
import { useHistory, useParams } from 'react-router'
import {ArrowLeftOutlined} from '@ant-design/icons'
import RichText from 'components/RichText/RichText'
import { Editor as TinyMCEEditor } from 'tinymce';
import { IProtocol, IProtocolError } from './protocal'
import {CloseCircleOutlined, PlusCircleOutlined} from '@ant-design/icons'

function ProtocolForm(): ReactNode {
  const history = useHistory()
  const formRef = useRef<FormInstance<IProtocol>>(null)
  const { id } : { id: string } = useParams()

  const [errors, setErrors] = useState<IProtocolError>({})

  const onSubmit = async (values: IProtocol) => {
    console.log(values)
  }

  const onEditorChange = (html: string, editor: TinyMCEEditor) => {
    formRef.current?.setFieldsValue({
      describe: editor.getContent({format : 'text'}),
      describeHTML: html
    })  
  }

  return (
    <div className="protocolForm">
      <div className="protocolForm__header">
        <ArrowLeftOutlined className="protocolForm__goback-icon" onClick={()=> history.push('/protocols')} />
        <Typography.Title className="protocolForm__title" level={3}>{id? 'Editar Protocolo': 'Novo Protocolo'}</Typography.Title>
      </div>
      <Form
        className="protocolForm__form"
        ref={formRef}
        layout="vertical"
        onFinish={onSubmit}
      >
        <Form.Item
          name='title'
          label='Titulo'
          help={errors.title && errors.title}
          validateStatus={errors.title && ('error')}
        >
          <Input placeholder="Digite o titulo"></Input>
        </Form.Item>
        <Form.Item
          name='describeHTML'
          label='Descrição'
          className="protocolForm__richText"
          help={errors.describe && errors.describe}
          validateStatus={errors.describe && ('error')}
        >
          <RichText
            onEditorChange={onEditorChange}
          />
        </Form.Item>
        <div className="protocolForm__form-list">
          <label>CheckList</label>
          <Form.List
            name="checkList"
          >
            {(fields,{add, remove}) => (
              <div>
                {fields.map(field => (
                  <div key={field.fieldKey} className="protocolForm__item">
                    <Form.Item                 
                      {...field} 
                      noStyle
                    >
                      <Input 
                        className="protocolForm__input" 
                        placeholder="Digite o item"
                      />
                    </Form.Item>
                    <CloseCircleOutlined className="protocolForm__remove" onClick={() => remove(field.name)}/>  
                  </div>
                ))}
                <Button onClick={()=>add()}>
                  <PlusCircleOutlined /> Adicionar Item
                </Button>
              </div>
            )}
          </Form.List>
        </div>
        <Form.Item>
          <Button 
            className="protocolForm__button"
            onClick={()=> formRef.current?.submit()}
            type="primary"
            htmlType="submit"
          >
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ProtocolForm
