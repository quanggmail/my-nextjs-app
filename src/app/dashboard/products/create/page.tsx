'use client'; // This component will contain client-side interactivity (form inputs)

import React from 'react';
import styles from './CreateProduct.module.css'; // Import your new CSS module

const CreateProductPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // In a real application, you would collect form data here
        // and send it to your backend API or perform client-side validation.
        console.log('Form submitted!');
        const formData = new FormData(event.target);
        const productData = Object.fromEntries(formData.entries());
        console.log(productData);
        alert('Product created (check console for data)!'); // Using alert for demo, replace with proper UI feedback
        // Redirect or clear form after submission
    };

    return (
        <div className={styles.createProductPage}>
            <h1 className={styles.formTitle}>Create New Product</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        placeholder="e.g., Wireless Gaming Mouse"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" required>
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="accessories">Accessories</option>
                        <option value="peripherals">Peripherals</option>
                        <option value="software">Software</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="price">Price ($):</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        step="0.01"
                        min="0"
                        placeholder="e.g., 49.99"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="stock">Stock Quantity:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        min="0"
                        placeholder="e.g., 100"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Provide a detailed description of the product..."
                    ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default CreateProductPage;