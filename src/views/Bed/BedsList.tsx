import React, { useEffect, useState } from 'react'
import { Col, Input, Row, Typography, List, Card } from 'antd'
import CardBed from './BedCard'
import FailModeForm from 'views/FMEA/FailModeForm' 
import { IBed } from './bed'
import bedConsumer from './consumer/bed'

function BedsList() {
  const [bedsList, setBedsList] = useState<IBed[]>([])
  const [isLoading, setIsLoading] = useState(true)
 

  const getFields = () => {
    setIsLoading(true)
    const timeOut = setTimeout(() => {
      const response = bedConsumer.list()
      if (response) setBedsList(response)
      setIsLoading(false)
    }, 3000)
  }

  useEffect(() => {
    getFields()
  }, [])

  const onSearch = (value: string ) => {
    try {
      const response = bedConsumer.search(value)
      if (response) setBedsList(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
      <Typography.Title level={2} >Leitos</Typography.Title>
      <Row style={{ marginBottom: '1.5rem' }}>
        <Col span={12}>
          <Input.Search
            placeholder="Pesquisar"
            onSearch={onSearch}
          />
        </Col>
      </Row>
      <List
        grid={{ 
          gutter: 16,
          column: 3,
          lg:3,
          md:1,
          sm:2,
          xs:1
        }}  
        pagination={{
          pageSize: 6,
          responsive: false,
        }}
        loading={isLoading}
        dataSource={bedsList}
        renderItem={(item: IBed) => (
          <List.Item>
            <CardBed bed={item} />
          </List.Item>
        )}
      />
    </section>
  )
}

export default BedsList
