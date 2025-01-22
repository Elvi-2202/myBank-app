import React, { useState } from 'react';
import { createOperation } from '../services/operationService';

function OperationPage() {
    const [label, setLabel] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const operation = { label, amount, category };
        await createOperation(operation);
    };

    return (
        <div>
            <h2>Create Operation</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button type="submit">Add Operation</button>
            </form>
        </div>
    );
}

export default OperationPage;
