import React, { useState } from 'react'
import { Row, Input, Col, Card,Button, Typography, Menu, Dropdown } from 'antd'
import { failModes } from './mocks'
import { Meta } from 'antd/lib/list/Item'
import { PlusCircleOutlined  } from '@ant-design/icons'
import { useHistory } from 'react-router'
import FailModeForm from 'views/FMEA/FailModeForm'
import { MoreOutlined } from '@ant-design/icons'
import bedConsumer from 'views/Bed/consumer/bed'
import processConsumer from 'views/POP/consumer/pop'
import protocolConsumer from 'views/Protocol/consumer/protocol'
import RPNModal from './RPNModal'
import { IfailMode } from './failmode'

function FailModeList () {
  const history = useHistory()
  const [openModal, setOpenModal] = useState(false)
  const [openModalRPN, setOpenModalRPN] = useState(false)
  const [selectedFailMode, setSelectedFailMode] = useState<IfailMode>()

  
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={()=>{setOpenModalRPN(true)}}>
        Avaliar Falha
      </Menu.Item>
    </Menu>
  );

  const getColorRPN = (rpn?:number) => {
    if(!rpn) return '#8D8D8D'
    if(rpn > 70) return '#FF1A27'
    if(rpn > 20 && rpn <= 70) return '#ECF100'
    if(rpn > 0 && rpn <= 20) return '#0DBD49'
    else return '#8D8D8D'
  }

  return (
    <section>
      <FailModeForm 
        open={openModal}
        onClose={()=>{
          setOpenModal(false)
        }}
      />
      <RPNModal
        open={openModalRPN}
        onClose={()=>{
          setOpenModalRPN(false)
        }}
        failMode={selectedFailMode}
      />
      <Typography.Title  level={2}>Modos de Falha</Typography.Title>
      <Row style={{marginBottom:'1.5rem'}}  gutter={[15,15]}>
        <Col  lg={10}  md={14} sm={24} xs={24}>
           <Input.Search
            placeholder="Pesquisar"
           />
        </Col>
        <Col lg={6} md={10} sm={24} xs={24} style={{marginLeft:'auto'}}>
          <Button
            style={{width:'100%'}}
            type="primary"
            shape="round"
            icon={<PlusCircleOutlined />}
            onClick={() => {
              setOpenModal(true)
            }}
          >Relatar Falha</Button>
        </Col>
      </Row>
      <Row gutter={[16,20]}>
        {
          failModes.map(item => (
            <Col key={item.id} lg={6} md={12} sm={24} xs={24}>
               <Card 
                  className="failModeCard"
                  bordered={false}
                  hoverable
                >
                  <Meta 
                    title={
                      <div className="failModeCard__header">
                        <p className="failModeCard__title">
                          {item.title}
                        </p>
                        <Dropdown className="failModeCard__menu" overlay={menu} trigger={['click']}>
                          <MoreOutlined onClick={()=>{setSelectedFailMode(item)}}/>
                        </Dropdown>
                      </div>
                    }
                    description={
                      <>
                        <p 
                          className="failModeCard__rpn"
                          style={{color:getColorRPN(item.RPN)  }}
                        >
                          {item.RPN ?  item.RPN  : '-'}
                        </p>
                        <table className="failModeCard__table">
                          <tbody>
                            {
                              Boolean(item.bed) && (
                              <tr className="failModeCard__row">
                                <th className="failModeCard__label">Leito</th>
                                <td className="failModeCard__value">
                                  <Typography.Paragraph ellipsis={{rows:1, tooltip:bedConsumer.getById(item.bed)?.name}}>
                                    {bedConsumer.getById(item.bed)?.name}
                                  </Typography.Paragraph>
                                </td>
                              </tr>
                              )
                            }
                            {
                              Boolean(item.protocol) && (
                              <tr className="failModeCard__row">
                                <th className="failModeCard__label">Protocolo</th>
                                <td className="failModeCard__value">
                                  <Typography.Paragraph ellipsis={{rows:2, tooltip:protocolConsumer.getById(item.protocol)?.title}}>
                                    {protocolConsumer.getById(item.protocol)?.title}
                                  </Typography.Paragraph>
                                </td>
                              </tr>
                              )
                            }
                            {
                              Boolean(item.process) && (
                              <tr className="failModeCard__row">
                                <th className="failModeCard__label">POP</th>
                                <td className="failModeCard__value">
                                  <Typography.Paragraph ellipsis={{rows:2, tooltip:processConsumer.getById(item.process)?.title}}>
                                    {processConsumer.getById(item.process)?.title}
                                  </Typography.Paragraph>
                                </td>
                              </tr>
                              )
                            }
                            
                          </tbody>
                        </table>
                      </>
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

export default FailModeList

