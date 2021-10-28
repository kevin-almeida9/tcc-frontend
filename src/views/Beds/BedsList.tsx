import React, { useEffect, useState } from 'react'
import { Col, Input, Row, Typography, List, Card } from 'antd'
import { beds, IBed } from './mock'
import CardBed from './CardBed'
import FailModeForm from 'views/FMEA/FailModeForm' 

function BedsList() {
  const [bedsList, setBedsList] = useState<IBed[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [openModal, setOpenModal] = useState(true)

  const getFields = () => {
    setIsLoading(true)
    const timeOut = setTimeout(() => {
      const response = beds.list()
      if (response) setBedsList(response)
      setIsLoading(false)
    }, 3000)
  }

  useEffect(() => {
    getFields()
  }, [])

  return (
    <section>
      <FailModeForm 
        open={openModal}
        onClose={()=>{
          setOpenModal(false)
        }}
      />
      <Typography.Title level={2} >Leitos</Typography.Title>
      <Row style={{ marginBottom: '1.5rem' }}>
        <Col span={12}>
          <Input.Search
            placeholder="Pesquisar"
          />
        </Col>
      </Row>
      <List
        grid={{ gutter: 16, column: 3 }}
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
