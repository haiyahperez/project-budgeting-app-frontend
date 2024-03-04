import { useState, useEffect } from 'react';
import {Routes, Route, Link } from "react-router-dom";
import './App.css'

import Transactions from "../components/Transactions";
import TransactionDetails from "../components/TransactionDetails";
import TransactionForm from "../components/TransactionForm";

const App = () => {
  const [transactions, setTransactions] = useState([])
  
useEffect (() => {
  fetch("http://localhost:3003/transactions")
  .then((res) => res.json())
  .then((data) => {
  setTransactions(data.transactions)
  })
}, [])

  return (
  <div>
    <nav>
      <header>
        <Link to="/">
          <h1 className='title'>Wallet Wizard</h1>
        </Link>
      </header>
    </nav>
    <Link to="/new">
      <button className='add-trans'>Add transaction</button>
    </Link>
    <Routes>
      <Route 
      path="/"
      element={
        <Transactions 
          transactions={transactions} 
          setTransactions={setTransactions}/>
        }
        />
      <Route
        path="/new"
        element={
          <TransactionForm 
            setTransactions={setTransactions}
          />
         }
        />
      <Route
         path="/edit/:id"
         element={
          <TransactionForm
            setTransactions={setTransactions}
          />
         }
      />
      <Route 
      path="/:id"
      element={
        <TransactionDetails/>
      } />
    </Routes>
  
  </div>
  )
}
export default App;
