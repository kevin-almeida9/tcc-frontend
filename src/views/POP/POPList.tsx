import React, { useEffect, useState } from 'react'
import { Row, Input, Col, Card,Button, Typography, Menu, Dropdown } from 'antd'
import { Meta } from 'antd/lib/list/Item'
import { PlusCircleOutlined  } from '@ant-design/icons'
import { useHistory } from 'react-router'
import FailModeForm from 'views/FMEA/FailModeForm'
import { MoreOutlined } from '@ant-design/icons'
import popConsumer  from './consumer/pop'
import { IPOP } from './pop'

function POPList () {
  const history = useHistory()
  const [openModal, setOpenModal] = useState(false)
  const [selectedProcess, setSelectedProcess] = useState('')
  const [processList, setprocessList] = useState<IPOP[]>([])

  const onSearch = (value: string ) => {
    try {
      const response = popConsumer.search(value)
      if (response) setprocessList(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const getProcess = () => {
      try {
        const response = popConsumer.list()
        if (response) setprocessList(response)
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
          process={selectedProcess}
        />
      <Typography.Title  level={2}>POP</Typography.Title>
      <Row style={{marginBottom:'1.5rem'}}  gutter={[15,15]}>
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
              history.push('/process/form')
            }}
          >Adicionar Processo</Button>
        </Col>
      </Row>
      <Row gutter={[16,20]}>
        {
          processList.map(item => (
            <Col key={item.id} lg={6} md={12} sm={24} xs={24}>
               <Card 
                  style={{ height:'60vh' }}
                  cover={<img style={{ height:'25vh' }} src={item.image} alt={item.image}></img>} 
                  bordered={false}
                  hoverable
                >
                  <Meta 
                    title={
                      <div className="popCard__header">
                        <p className="popCard__title">
                          {item.title}
                        </p>
                        <Dropdown className="popCard__menu" overlay={menu} trigger={['click']}>
                          <MoreOutlined onClick={()=>{setSelectedProcess(item.id)}}/>
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

export default POPList
