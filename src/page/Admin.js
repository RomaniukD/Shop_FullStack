import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';
import CreateBrand from '../components/modals/CreateBrand';
import { useState } from 'react';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container className='d-flex flex-column'>
        <Button 
        variant={"outline-dark"} 
        className='mt-4 p-2'
        onClick={() => setTypeVisible(true)}
        >
          Добавить тип
        </Button>
        <Button 
        variant={"outline-dark"} 
        className='mt-4'
        onClick={() => setBrandVisible(true)}
        >
          Добавить бренд
        </Button>
        <Button 
        variant={"outline-dark"} 
        className='mt-4'
        onClick={() => setDeviceVisible(true)}
        >
          Добавить устройство
        </Button>
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
    </Container>

  );
};


export default Admin;