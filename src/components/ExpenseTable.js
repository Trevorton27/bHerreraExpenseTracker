import React from 'react';
import Table from 'react-bootstrap/Table';
import ExpenseItem from './ExpenseItem';

function ExpenseTable({ expenseData, handleDelete }) {
  const expenseItemComponents = expenseData.map((expense) => (
    <ExpenseItem
      expense={expense}
      key={expense.id}
      handleDelete={handleDelete}
    />
  ));
  return (
    <div className='card'>
      <Table className='table-borderless'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Merchant Name</th>
            <th>Amount</th>
            <th className='delete'>Delete</th>
          </tr>
        </thead>
        <tbody>{expenseItemComponents}</tbody>
      </Table>
    </div>
  );
}

export default ExpenseTable;
