import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const ExpenseForm = ({
  handleSubmit,
  handleChange,
  description,
  merchantName,
  amount,
  date
}) => {
  return (
    <div className='card'>
      <h1 className='display-4'>Expense Tracker</h1>
      <h4>Add an expense item:</h4>

      <Form id='myForm' onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              name='description'
              value={description}
              placeholder='Ex: Coffee'
              autoComplete='off'
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Merchant Name:</Form.Label>
            <Form.Control
              name='merchantName'
              value={merchantName}
              placeholder='Ex: Starbucks'
              autoComplete='off'
              onChange={handleChange}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Label>Date:</Form.Label>
            <Form.Control
              name='date'
              value={date}
              type='date'
              autoComplete='off'
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Amount:</Form.Label>
            <div className='input-container'>
              <Form.Control
                id='amount'
                name='amount'
                value={amount}
                type='number'
                autoComplete='off'
                onChange={handleChange}
              />
              <span className='unit'>$</span>
            </div>
          </Col>
        </Form.Row>
        <Button variant='primary' id='submitButton' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ExpenseForm;
