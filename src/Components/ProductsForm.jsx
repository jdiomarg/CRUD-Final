import React, { useState } from 'react';

const ProductsForm = () => {

    const submit = e => {
        e.preventDefault();
        const newProduct = {
            name: name,
            category: category,
            price: price,
            isAvailable: isAvailable,
            description: isDescription
        }

        console.log(newProduct);
        reset();
    }

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [isAvailable, setIsAvailable] = useState(false)
    const [isDescription, setIsDescription] = useState("");

    const reset = () => {
        setName("");
        setCategory("");
        setPrice("");
        setIsAvailable(false);
        setIsDescription("");
    }


    return (
        <form onSubmit={submit}>
            <h1>Products Form</h1>
            <div className='input-cointainer'>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </div>

            <div className='input-cointainer'>
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    onChange={e => setCategory(e.target.value)}
                    value={category}
                />
            </div>

            <div className='input-cointainer'>
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                />
            </div>

            <div className='input-cointainer'>
                <label htmlFor="description">Description</label>
                <textarea id="description" cols="30" rows="10" onChange={e => setIsDescription(e.target.value)} value={isDescription}></textarea>
            </div>

            <div className='input-cointainer'>
                <label htmlFor="isAvailable">Is Available</label>
                <input
                    type="checkbox"
                    id="isAvailable"
                    onChange={e => setIsAvailable(e.target.checked)}
                    checked={isAvailable}
                />
            </div>

            <button>Create</button>
        </form>
    );
};

export default ProductsForm;