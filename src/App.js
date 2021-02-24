import React, { useState } from 'react';
import { Form, Container, Header, Button } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

const url = 'https://sheet.best/api/sheets/a0304ee7-2e5b-49f8-8da0-94e96babd8bd'

function App() {
  const [values, setValues] = useState({
    userName: '',
    age: '',
    salary: '',
    hobby: ''
  });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(url, values)
    .then(response => {
      console.log(response)
    })
  };

  return (
    <Container fluid className='container'>
      <Header as='h2'>React Google Sheets</Header>
      <Form className='form' onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder='Enter your userName'
            type='text'
            name='userName'
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            placeholder='Enter your age'
            type='number'
            name='age'
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            placeholder='Enter your salary'
            type='number'
            name='salary'
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            placeholder='Enter your hobby'
            type='text'
            name='hobby'
            onChange={changeHandler}
          />
        </Form.Field>

        <Button color='blue' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
