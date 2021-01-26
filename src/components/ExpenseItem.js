import React from 'react';

const ExpenseItem = ({ expense, handleDelete }) => {
  return (
    <tr key={expense.id}>
      <td>{expense.date}</td>
      <td>{expense.description}</td>
      <td>{expense.merchantName}</td>
      <td>
        {parseFloat(expense.amount).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </td>
      <td className='delete'>
        <i
          onClick={() => handleDelete(expense.id)}
          className='fas fa-minus-circle'
        />
      </td>
    </tr>
  );
};

export default ExpenseItem;
