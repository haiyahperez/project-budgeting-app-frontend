import React from 'react';

const Transactions = ({ transactions, setTransactions }) => {
  if (transactions.length === 0) return null;

  return (
    <div>
      {transactions.map(({ id, item_name, amount, date }) => (
        <div key={id}>
          <h3>Item Name:{item_name}</h3>
          <p>Amount:{amount}</p>
          <p>date:{date}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
