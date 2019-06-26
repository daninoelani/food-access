import React from 'react';
import { Button, Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components';
import { Link } from "@reach/router";


const HomePage = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto
`

const hStyle = {
  fontSize: '200%',
  fontWeight: 'bold',
}

const pStyle = {
  fontSize: '100%',
}

export default () => {

  return (
    <HomePage>
      <Jumbotron fluid>
        <Container fluid>
          <h3 className="display-3" style={hStyle}>What do you Need?</h3>
          <p className="lead" style={pStyle}>Click a button below to find the nearest location that is currently open.</p>
        </Container>
      </Jumbotron>
      <Link to="/location"><Button color="info" size="lg" block>Find a Store that Accepts My Benefits</Button></Link>
      <br />
      <Link to="/location"><Button color="info" size="lg" block>Find Emergency Food</Button></Link>
      <br />
      <Link to="/location"><Button color="info" size="lg" block>Renew My Benefits</Button></Link>
    </HomePage>
  )
}