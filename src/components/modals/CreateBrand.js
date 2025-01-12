import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createBrand } from '../../http/deviceAPI'
import { useState } from 'react'

const CreateBrand = ({show, onHide}) => {
  
  const [value, setValue] = useState('')

    const addBrand = () => {
      createBrand({name: value}).then(data=> {
        setValue('')
        onHide()
      })
    }
    
  return (
    <Modal 
        show={show} 
        onHide={onHide} 
        centered>
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить новий бренд
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <Form>
              <Form.Control
               value={value}
               onChange={e => setValue(e.target.value)}
               placeholder={'Введите название бренда'}
              />
            </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрить
          </Button>
          <Button variant="primary" onClick={addBrand}>
            Зберегти зміни
          </Button>
        </Modal.Footer>
      </Modal>
  )
}


export default CreateBrand