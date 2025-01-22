import React, { useState } from 'react';
import { createCategory } from '../services/categoryService';

function CategoryPage() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCategory({ title });
    };

    return (
        <div>
            <h2>Create Category</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add Category</button>
            </form>
        </div>
    );
}

export default CategoryPage;
