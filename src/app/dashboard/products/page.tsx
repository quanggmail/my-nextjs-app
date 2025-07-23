'use client'; // This component will contain client-side interactivity (like Links)

import Link from 'next/link';
import styles from './Products.module.css'; // Import your new CSS module

const Products = () => {
    // Dummy product data
    const products = [
        { id: 'PROD001', name: 'Wireless Mouse', category: 'Accessories', price: 25.99, stock: 150 },
        { id: 'PROD002', name: 'Mechanical Keyboard', category: 'Accessories', price: 79.99, stock: 80 },
        { id: 'PROD003', name: '27-inch Monitor', category: 'Electronics', price: 299.00, stock: 45 },
        { id: 'PROD004', name: 'USB-C Hub', category: 'Peripherals', price: 35.50, stock: 200 },
        { id: 'PROD005', name: 'Webcam 1080p', category: 'Peripherals', price: 49.99, stock: 120 },
    ];

    return (
        <div className={styles.productsPage}>
            <div className={styles.productsHeader}>
                <h2 className={styles.productsTitle}>Product List</h2>
                <Link href="/dashboard/products/create" className={styles.createButton}>
                    Create New Product
                </Link>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.productsTable}>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>{product.stock}</td>
                                <td>
                                    {/* These links/buttons would ideally go to edit/delete pages or trigger modals */}
                                    <Link href={`/dashboard/products/edit/${product.id}`} className={`${styles.actionButton} ${styles.editButton}`}>
                                        Edit
                                    </Link>
                                    <button className={`${styles.actionButton} ${styles.deleteButton}`}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;