import React from 'react'
import { Row, Input, Col, Card } from 'antd'
import { protocolsList } from './mocks'
import { Meta } from 'antd/lib/list/Item'
import Title from 'antd/lib/typography/Title'

function Protocols () {
  return (
    <section>
      <Title>Protocolos</Title>
      <Row style={{marginBottom:'1.5rem'}}>
        <Col span={12}>
           <Input.Search
            placeholder="Pesquisar"
           />
        </Col>
      </Row>
      <Row gutter={[16,20]}>
        {
          protocolsList.map(item => (
            <Col key={item.id} lg={6} md={6} sm={12} xs={24}>
               <Card 
                  style={{ height:'60vh' }}
                  cover={<img style={{ height:'25vh' }} src={item.image} alt={item.image}></img>} 
                  bordered={false}
                  hoverable
                >
                  <Meta 
                    title={item.title} 
                    description={item.describe}
                  />
              </Card>
            </Col>
          ))
        }
      </Row>
    </section>
  )
}

export default Protocols
