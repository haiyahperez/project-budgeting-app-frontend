import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Transactions = ({ transactions, setTransactions }) => {
  const [sumAmount, setSumAmount] = useState(0);

  function handleDelete(id) {
    const options = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3003/transactions/${id}`, options)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }

  useEffect(() => {
    let sum= 0;
    transactions.forEach((transaction) => {
    const { amount } = transaction
      sum += amount;
    });
    setSumAmount(sum);
  }, [transactions]);
  

//   let sum = '';
//   if (amount > 100) {
//     sum = 'green';
//   } else if (amount >= 0) {
//     sum = 'yellow';
//   } else {
//     sum = 'red';
//   }

  return (
    <div>
    <div>
       <p className="total-amount">Total Amount: {sumAmount}</p>
    </div>
    
    <ul>
      {transactions.map(({ id, item, amount, date }) => (
        <li key={id}>
          <h3>Item Name: {item}</h3>
          <p>Amount: {amount}</p>
          <p>Date: {date}</p>
          <div>
            <Link to={`/${id}`}>
              <button>details</button>
            </Link>
            <Link to={`/edit/${id}`}>
              <button>edit</button>
            </Link>
            <button onClick={() => handleDelete(id)}>delete</button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Transactions;
