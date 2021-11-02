import React, { useEffect, useState } from 'react'
import { Row, Input, Col, Card,Button, Typography, Menu, Dropdown } from 'antd'
import { Meta } from 'antd/lib/list/Item'
import { PlusCircleOutlined  } from '@ant-design/icons'
import { useHistory } from 'react-router'
import { MoreOutlined } from '@ant-design/icons'
import FailModeForm from 'views/FMEA/FailModeForm'
import { IProtocol } from './protocal'
import protocolConsumer from './consumer/protocol'

function ProtocolsList () {
  const history = useHistory()
  const [openModal, setOpenModal] = useState(false)
  const [selectedProtocol, setSelectedProtocol] = useState('')
  const [protocolList, setProtocolList] = useState<IProtocol[]>([])

  const onSearch = (value: string ) => {
    try {
      const response = protocolConsumer.search(value)
      if (response) setProtocolList(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const getProcess = () => {
      try {
        const response = protocolConsumer.list()
        if (response) setProtocolList(response)
      } catch (err) {
        console.log(err)
      }
    }
    getProcess()
  }, [])

  
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={()=>{setOpenModal(true)}}>
        Relatar Falha
      </Menu.Item>
    </Menu>
  );

  return (
    <section>
      <FailModeForm 
        open={openModal}
        onClose={()=>{
          setOpenModal(false)
        }}
        protocol={selectedProtocol}
      />
      <Typography.Title  level={2} >Protocolos</Typography.Title>
      <Row style={{marginBottom:'1.5rem'}} gutter={[15,15]}>
        <Col  lg={10}  md={14} sm={24} xs={24}>
           <Input.Search
            placeholder="Pesquisar"
            onSearch={onSearch}
           />
        </Col>
        <Col lg={6} md={10} sm={24} xs={24} style={{marginLeft:'auto'}}>
          <Button
            style={{width:'100%'}}
            type="primary"
            shape="round"
            icon={<PlusCircleOutlined />}
            onClick={() => {
              history.push('/protocols/form')
            }}
          >Adicionar Protocolo</Button>
        </Col>
      </Row>
      <Row gutter={[16,20]}>
        {
          protocolList.map(item => (
            <Col key={item.id} lg={6} md={12} sm={24} xs={24}>
               <Card 
                  style={{ height:'60vh' }}
                  cover={<img style={{ height:'25vh' }} src={item.image} alt={item.image}></img>} 
                  bordered={false}
                  hoverable
                >
                  <Meta 
                    title={
                      <div className="protocolCard__header">
                        <p className="protocolCard__title">
                          {item.title}
                        </p>
                        <Dropdown className="protocolCard__menu" overlay={menu} trigger={['click']}>
                          <MoreOutlined onClick={()=>{setSelectedProtocol(item.id)}}/>
                        </Dropdown>
                      </div>
                    }
                    description={
                      <Typography.Paragraph ellipsis={{rows: 4}}>
                        {item.describe}
                      </Typography.Paragraph>
                    }

                  />
              </Card>
            </Col>
          ))
        }
      </Row>
    </section>
  )
}

export default ProtocolsList
