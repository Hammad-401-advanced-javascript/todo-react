/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { FilterContext } from './items';
import { Navbar, Container } from 'react-bootstrap';
import './todo.scss';

function ToDo() {
  const context = useContext(FilterContext);
  const [count, setCount] = useState(0);


  useEffect(() => {
    setCount(context.list.filter(item => !item.complete).length);
    document.title = `There are ${count} Items To Complete`;
  }, [count, context.list]);

  return (
    <>

      <Container>
        <Navbar bg="dark" variant="dark" style={{ marginTop: 2 + 'em' }}>
          <Navbar.Brand >There are {count} Items To Complete</Navbar.Brand>
        </Navbar>
      </Container>



    </>
  );
}



export default ToDo;
