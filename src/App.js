import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseData: [],
      description: '',
      merchantName: '',
      amount: '',
      date: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const storedExpenseItems =
      JSON.parse(localStorage.getItem('expenses')) || [];
    this.setState({
      expenseData: storedExpenseItems
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenseData.length !== this.state.expenseData.length) {
      localStorage.setItem('expenses', JSON.stringify(this.state.expenseData));
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleDelete(id) {
    this.setState((prevState) => {
      const updatedExpenseData = prevState.expenseData.filter(
        (expense) => expense.id !== id
      );

      return {
        expenseData: updatedExpenseData
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const isFormComplete =
      this.state.description &&
      this.state.merchantName &&
      this.state.amount &&
      this.state.date;

    if (!isFormComplete) {
      return alert('Please fill out all fields before submitting.');
    }

    const newExpense = {
      id: Math.random(),
      description: this.state.description,
      merchantName: this.state.merchantName,
      amount: this.state.amount,
      date: this.state.date
    };

    this.setState({
      expenseData: [...this.state.expenseData, newExpense],
      description: '',
      merchantName: '',
      amount: '',
      date: ''
    });
  }

  render() {
    return (
      <div className='container'>
        <ExpenseForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          description={this.state.description}
          merchantName={this.state.merchantName}
          amount={this.state.amount}
          date={this.state.date}
        />
        <ExpenseTable
          expenseData={this.state.expenseData}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
