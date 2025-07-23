'use client'; // <--- IMPORTANT: Add this directive at the very top of your file

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <--- Correct import for App Router
import styles from '../../dashboard/DashboardLayout.module.css'; // Assuming this path is correct

function Sidebar() {
    const pathname = usePathname(); // <--- Get the current pathname

    return (
        <div>
            <aside className={styles.sideMenu}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        <Link
                            href="/dashboard/products"
                            // Use startsWith to check if the current path begins with /dashboard/products
                            className={`${styles.menuLink} ${pathname.startsWith('/dashboard/products') ? styles.active : ''}`}
                        >
                            Products
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link
                            href="/dashboard/images"
                            className={`${styles.menuLink} ${pathname.startsWith('/dashboard/images') ? styles.active : ''}`}
                        >
                            Images
                        </Link>
                    </li>
                    {/* Add more menu items here as needed */}
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;