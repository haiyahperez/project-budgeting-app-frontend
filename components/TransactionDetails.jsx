import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const TransactionDetails = () => {
    const { id } = useParams();

    const [transactionDetails, setTransactionDetails] = useState();

    useEffect(() => {
        fetch (`http://localhost:3003/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setTransactionDetails(data.transaction));
    }, [id]);

    if (!transactionDetails) return null;
    return (
        <div className="trans-details">
            <h1> Transaction Details</h1>
            <div className="detail-name">
            <p>Item: {transactionDetails.item}</p>
            <p>From: {transactionDetails.from}</p>
            <p>Category: {transactionDetails.category}</p>
            </div>
        </div>
    )
}

export default TransactionDetails;