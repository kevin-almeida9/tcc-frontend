import React from 'react'
import {Button, Form, Input} from 'antd'
import { Link } from 'react-router-dom'

function SignIn () {
  return (
    <div className="signin">
      <div className="signin__card">
        <div className="signin__image"/>
        <div className="signin__form">
          <Form
            layout='vertical'        
          >
            <Form.Item
              name="email"
            >
              <Input placeholder="E-mail"/>
            </Form.Item>
            <Form.Item
              name="password"
            >
              <Input placeholder="Senha" type="password"/>
              <Link className="signin__link" to="/forgot-password">Esqueci minha senha</Link>
            </Form.Item>
            <Form.Item className="signin__container-button">
              <Button className="signin__button" htmlType="submit">
                Acessar
              </Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default SignIn
