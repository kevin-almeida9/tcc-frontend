import React, { ReactNode, useRef, useState } from 'react'
import { Row, Typography, Form, FormInstance, Input, Col, Button } from 'antd'
import { useHistory, useParams } from 'react-router'
import {ArrowLeftOutlined} from '@ant-design/icons'
import RichText from 'components/RichText/RichText'
import { Editor as TinyMCEEditor } from 'tinymce';
import { IPOP, IPOPError } from './pop'
import {CloseCircleOutlined, PlusCircleOutlined} from '@ant-design/icons'

function popForm(): ReactNode {
  const history = useHistory()
  const formRef = useRef<FormInstance<IPOP>>(null)
  const { id } : { id: string } = useParams()

  const [errors, setErrors] = useState<IPOPError>({})

  const onSubmit = async (values: IPOP) => {
    console.log(values)
  }

  const onEditorChange = (html: string, editor: TinyMCEEditor) => {
    formRef.current?.setFieldsValue({
      describe: editor.getContent({format : 'text'}),
      describeHTML: html
    })  
  }

  return (
    <div className="popForm">
      <div className="popForm__header">
        <ArrowLeftOutlined className="popForm__goback-icon" onClick={()=> history.push('/protocols')} />
        <Typography.Title className="popForm__title" level={2}>{id? 'Editar POP': 'Novo POP'}</Typography.Title>
      </div>
      <Form
        className="popForm__form"
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
          className="popForm__richText"
          help={errors.describe && errors.describe}
          validateStatus={errors.describe && ('error')}
        >
          <RichText
            onEditorChange={onEditorChange}
          />
        </Form.Item>
        <div className="popForm__form-list">
          <label>CheckList</label>
          <Form.List
            name="checkList"
          >
            {(fields,{add, remove}) => (
              <div>
                {fields.map(field => (
                  <div key={field.fieldKey} className="popForm__item">
                    <Form.Item                 
                      {...field} 
                      noStyle
                    >
                      <Input 
                        className="popForm__input" 
                        placeholder="Digite o item"
                      />
                    </Form.Item>
                    <CloseCircleOutlined className="popForm__remove" onClick={() => remove(field.name)}/>  
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
            className="popForm__button"
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

export default popForm
