import { useState, useEffect } from "react";

const TransactionForm = ({ setTransaction, setToggleForm, edit, setEdit }) => {
    const [transaction, setTransaction] = useState({
        item: "",
        amount: "",
        date: "", 
        from: "",
        category: ""
    })
}

function handleChange(e) {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
}

function handleSubmit() {

}
function handleSubmit() {

}

return (
    <div>
        <h1> New Transaction Form </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">
                Item:
            <input 
                onChange={handleChange}
                type="text"
                id="item"
                name="item"
                value={transaction.item_name}
            />
            </label>
            <label htmlFor="amount">
                Amount:
            <input 
                onChange={handleChange}
                type="number"
                id="item"
                name="item"
                value={transaction.amount}
            />
            </label>
            <label htmlFor="date">
                Date:
            <input 
                onChange={handleChange}
                type="text"
                id="date"
                name="date"
                value={transaction.date}
            />
            </label>
            <label htmlFor="from">
                From:
            <input 
                onChange={handleChange}
                type="text"
                id="from"
                name="from"
                value={transaction.from}
            />
            </label>
            <label htmlFor="category">
                Category:
            <input 
                onChange={handleChange}
                type="text"
                id="category"
                name="category"
                value={transaction.category}
            />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        <button onClick={handleCancel}>Cancel</button>
    </div>
)

export default TransactionForm; 