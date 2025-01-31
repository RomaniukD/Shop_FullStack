import React, { use } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { useContext } from 'react';
import { Context } from '..';
import { useEffect } from 'react';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import { observer } from 'mobx-react-lite';
import Pages from '../components/Pages';


const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices(null, null, 1, 2 ).then(data => { 
        device.setDevices(data.rows)
        device.setTotalCount(data.count)
      })
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 6).then(data => { 
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand])

    return (
      <Container>
          <Row className='mt-2'>
              <Col md={3}>
                  <TypeBar/>
                  <BrandBar/>
              </Col>
              <Col md={9}>
                <Pages/>
                <DeviceList/>
              </Col>
          </Row>
      </Container>
    )
})

export default Shop;