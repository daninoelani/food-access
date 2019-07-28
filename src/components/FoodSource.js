import React from 'react';
import { Button, Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components';
import { Link } from "@reach/router";


const FoodSource = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto
`

const hStyle = {
  fontSize: '300%',
  fontWeight: 'bold',
}

const pStyle = {
  fontSize: '100%',
}

export default () => {

  return (
    <FoodSource>
      <Jumbotron fluid>
        <Container fluid>
          <h3 className="display-3" style={hStyle}>What are you looking for?</h3>
          <p className="lead" style={pStyle}>Click a button below to find the nearest location that is currently open.</p>
        </Container>
      </Jumbotron>
      <Link to="/location"><Button color="info" size="lg" block>Soup Kitchen</Button></Link>
      <br />
      <Link to="/location"><Button color="info" size="lg" block>Food Pantry</Button></Link>
      <br />
      <Link to="/location"><Button color="info" size="lg" block>Meals on Wheels Service</Button></Link>
      <br />
      <Link to="/location"><Button color="info" size="lg" block>Other</Button></Link>
    </FoodSource>
  )
}
