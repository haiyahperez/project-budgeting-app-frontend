import { useState, useEffect } from 'react';
import {Routes, Route, Link } from "react-router-dom";

import Transactions from "../components/Transactions";
import TransactionDetails from "../components/TransactionDetails";
import TransactionForm from "../components/TransactionForm";

const App = () => {
  const [transactions, setTransactions] = useState([])
  const [toggleDetails, setToggleDetails] = useState({ show:false, id:null })
  const [toggleForm, setToggleForm] = useState(false)
  const [edit, setEdit] = useState({ show:false, id:null})

useEffect (() => {
  fetch("http://localhost:3003/transactions")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    setTransactions(data.transactions)
  })
}, [])

  return (
  <div>
    <nav>
      <header>
        <h1>Wallet Wizard</h1>
      </header>
    </nav>

    <Routes>
      <Route 
      path="/"
      element={
        <Transactions 
          transactions={transactions} 
          setTransactions={setTransactions} />}
        />
      <Route
        path="/new"
        element={
          <TransactionForm 
            edit={edit}
            setEdit={setEdit}
            setTransactions={setTransactions}
            setToggleForm={setToggleForm}
          />
        }
      />
    </Routes>
  </div>
  )
}
export default App;
