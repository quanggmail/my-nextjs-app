'use client'; // <--- IMPORTANT: Add this directive at the very top of your file

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <--- Change this import!
import styles from '../../dashboard/DashboardLayout.module.css';

function Sidebar() {
    const pathname = usePathname(); // <--- Use usePathname()

    return (
        <div>
            <aside className={styles.sideMenu}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        <Link href="/dashboard/products"
                              className={`${styles.menuLink} ${pathname === '/dashboard/products' ? styles.active : ''}`}>
                            Products
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/dashboard/images"
                              className={`${styles.menuLink} ${pathname === '/dashboard/images' ? styles.active : ''}`}>
                            Images
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;