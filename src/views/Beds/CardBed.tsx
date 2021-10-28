import React from 'react'
import { Card, Typography, Menu, Dropdown } from 'antd'
import { IBed, _statusBed } from './mock'
import { getColorStatus } from 'utils'
import { DangerIcon, WarningIcon } from 'assets/Icons'
import { MoreOutlined } from '@ant-design/icons'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

function HeaderCard({ name, status }: { name: string, status: _statusBed }) {
  return (
    <div className="CardBed__header">
      <div style={{ background: getColorStatus(status) }} />
      <Typography.Title level={5}>{name}</Typography.Title>
      <Dropdown className="CardBed__header" overlay={menu} trigger={['click']}>
        <MoreOutlined />
      </Dropdown>
    </div>
  )
}

function CardBed({ bed }: { bed: IBed }) {
  const { name, status, failures, warnings, patient, level, ambient, classification, specialty } = bed
  return (
    <Card className={`CardBed ${['disbled'].includes(status) && 'CardBed__disbled'}`} title={<HeaderCard name={name} status={status} />}>
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
