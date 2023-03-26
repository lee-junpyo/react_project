import React from 'react'
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { searchAction } from '../redux/action/searchAction';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { keyword } = useSelector((state)=> state.search);
  const setKeyword = (event) => {
    dispatch({
      type : "SET_KEYWORD",
      payload : event.target.value
    })
  }

  const search = (event) => {
    event.preventDefault();
    if(keyword){
      dispatch(searchAction.getSearchList(keyword));
      navigate('/movies');
    }
  }

  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img width={100} src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/movies" className='nav-item'>Movies</Link>
          </Nav>
          <Form className="d-flex" onSubmit={ search }>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event)=> setKeyword(event)} value={keyword}
            />
            <Button variant="outline-danger" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation