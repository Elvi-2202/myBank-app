import React, { useEffect, useState } from 'react';
import { getOperations } from '../services/operationService';

function DashboardPage() {
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        const fetchOperations = async () => {
            const data = await getOperations();
            setOperations(data);
        };
        fetchOperations();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {operations.map((operation) => (
                    <li key={operation.id}>
                        {operation.label} - ${operation.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DashboardPage;
