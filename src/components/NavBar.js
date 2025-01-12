import React, { useContext } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

  return (
      <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color:'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto" style={{color:'white'}}>
                    <Button 
                        onClick={() => history(ADMIN_ROUTE)}
                        variant={"outline-light"}
                        >
                            Админ панель
                    </Button>
                    <Button 
                        onClick={() => logOut()}
                        variant={"outline-light"} 
                        className='ms-2'
                        >
                            Вийти
                    </Button>
                </Nav>
                :
                <Nav className="ms-auto" style={{color:'white'}}>
                    <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
        </Container>
        </Navbar>
  )
})


export default NavBar