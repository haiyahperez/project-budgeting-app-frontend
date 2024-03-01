import React from 'react';
import { Link } from "react-router-dom" 

const Transactions = ({ transactions, setTransactions }) => {
  if (transactions.length === 0) return null;

  return (
    <div>
      {transactions.map(({ id, item_name, amount, date }) => (
        <div key={id}>
            <h3>Item Name:{item_name}</h3>
                <p>Amount:{amount}</p>
                <p>date:{date}</p>
            <div>
                <Link to={`/${ id }`}>
                    <button>details</button>
                </Link>
                <Link to={`/edit/${ id }`}>
                    <button>edit</button>
                </Link>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
