import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components'

const LocationPage = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto
`

const hStyle = {
  fontSize: '300%',
  fontWeight: 'bold',
}

export default () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = JSON.stringify({address, city, state, zip})
    await fetch('http://localhost:4000/', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(data)
  }

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(position => console.log(position));
  };

  return (
    <LocationPage>
      <Jumbotron fluid>
        <Container fluid>
          <h3 className="display-3" style={hStyle}>Where are you?</h3>
        </Container>
      </Jumbotron>
      <br />
      <Button color="secondary" size="lg" block onClick={e => handleClick(e)}>Use My Current Location</Button>
      <br />
      <Form onSubmit={e => handleSubmit(e)}>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" value={address} onChange={e => setAddress(e.target.value)}/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" value={city} onChange={e => setCity(e.target.value)} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleSelect">State</Label>
              <Input type="select" name="select" id="exampleSelect" value={state} onChange={e => setState(e.target.value)}>
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NY</option>
                <option>NC</option>
                <option>ND</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip" value={zip} onChange={e => setZip(e.target.value)} />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary" size="lg" block>Submit</Button>
      </Form>
    </LocationPage>
  )
}