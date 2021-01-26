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
    //const { name, value } = e.target;
    console.log('name ', e.target.name, 'value ', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveExpense(expense) {
    const savedExpenses = this.getSavedExpenses();
    const updatedExpenses = [...savedExpenses, expense];
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  }

  handleDelete(id) {
    this.setState((prevState) => {
      const updatedExpenseData = prevState.expenseData.filter(
        (expense) => expense.id !== id
      );
      localStorage.setItem('expenses', JSON.stringify(updatedExpenseData));
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

    const newExpense = {
      id: Math.random(),
      description: this.state.description,
      merchantName: this.state.merchantName,
      amount: this.state.amount,
      date: this.state.date
    };
    isFormComplete
      ? this.setState({
          expenseData: [...this.state.expenseData, newExpense],
          description: '',
          merchantName: '',
          amount: '',
          date: ''
        })
      : alert('Please fill out all fields before submitting.');

    localStorage.setItem('expenses', JSON.stringify(this.state.expenseData));
    console.log('expenseData though: ', this.state.expenseData);
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
