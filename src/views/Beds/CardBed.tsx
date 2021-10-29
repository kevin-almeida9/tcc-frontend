import React, { useState } from 'react'
import { Card, Typography, Menu, Dropdown } from 'antd'
import { IBed, _statusBed } from './mock'
import { getColorStatus } from 'utils'
import { DangerIcon, WarningIcon } from 'assets/Icons'
import { MoreOutlined } from '@ant-design/icons'
import FailModeForm from 'views/FMEA/FailModeForm'


function HeaderCard({ name, status, id }: { name: string, status: _statusBed, id: string}) {
  const [openModal, setOpenModal] = useState(false)

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={()=>{setOpenModal(true)}}>
        Relatar Falha
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="CardBed__header">
      <FailModeForm 
        open={openModal}
        onClose={()=>{
          setOpenModal(false)
        }}
        bed={id}
      />
      <div style={{ background: getColorStatus(status) }} />
      <Typography.Title level={5}>{name}</Typography.Title>
      <Dropdown className="CardBed__menu" overlay={menu} trigger={['click']}>
        <MoreOutlined />
      </Dropdown>
    </div>
  )
}

function CardBed({ bed }: { bed: IBed }) {
  const { name, status, failures, warnings, patient, level, ambient, classification, specialty, id } = bed
  return (
    <Card className={`CardBed ${['disbled'].includes(status) && 'CardBed__disbled'}`} title={<HeaderCard id={id} name={name} status={status} />}>
      {
        ['warning'].includes(status) && warnings?.length && (
          warnings.map((item, idx) => (
            <div className="CardBed__List CardBed__List--warning" key={idx}>
              <WarningIcon />
              <p>{item}</p>
            </div>
          ))
        )
      }
      {
        ['danger'].includes(status) && failures?.length && (
          failures.map((item, idx) => (
            <div className="CardBed__List CardBed__List--danger" key={idx}>
              <DangerIcon/>
              <p>{item}</p>
            </div>
          ))
        )
      }
      {
        ['using'].includes(status) && patient && (
          <>
          </>
        )
      }
      {
        ['empty', 'disbled'].includes(status) && (
          <div className="CardBed__props">
            <p><strong>Tipo:</strong>{level}</p>
            <p><strong>Ambiente:</strong>{ambient}</p>
            <p><strong>Classificação:</strong>{classification}</p>
            {['Especializada'].includes(classification) && <p><strong>Especializadade:</strong>{specialty}</p>}
          </div>
        )
      }

    </Card>
  )
}

export default CardBed
