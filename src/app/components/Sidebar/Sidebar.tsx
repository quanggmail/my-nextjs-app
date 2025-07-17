import styles from '../../dashboard/DashboardLayout.module.css'
import Link from 'next/link';

function Sidebar() {
    return(
        <div>
            <aside className={styles.sideMenu}>
                <ul className={styles.menuList}>
                    <li>
                    <Link href="/dashboard/products">
                   Products
                    </Link>
                    </li>
                    <li>
                    <Link href="/dashboard/images">
                   Images
                    </Link>
                    </li>
                    
                </ul>
            </aside>
        </div>
    );
}
export default Sidebar;