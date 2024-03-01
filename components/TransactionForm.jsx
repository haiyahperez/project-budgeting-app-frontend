import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



const TransactionForm = ({ setTransactions, setToggleForm, edit, setEdit }) => {
    const navigate = useNavigate;
    const { id } = useParams; 
    const [transaction, setTransaction] = useState({
        item: "",
        amount: "",
        date: "", 
        from: "",
        category: ""
    })


    function handleChange(e) {
        setTransaction({ ...transaction, [e.target.id]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        const options = {
          method: id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(transaction),
        };
    
        const url = id
          ? `http://localhost:3003/transactions/${id}`
          : "http://localhost:3003/transactions";
    
        fetch(url, options)
          .then((res) => res.json())
          .then((data) => {
            setTransactions(data.transactions);
            setToggleForm(false);
            navigate("/");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

    function handleCancel(){
        navigate("/")
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
}
export default TransactionForm;