'use client'; // This component uses client-side hooks like usePathname

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../../dashboard/DashboardLayout.module.css'; // Assuming this path is correct for your CSS

// Helper function to capitalize the first letter and replace hyphens with spaces
const capitalizeAndFormat = (s) => {
    return s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const Breadcrumb = () => {
    const pathname = usePathname();
    // Split the pathname, filter out empty strings (from leading/trailing slashes)
    const pathSegments = pathname.split('/').filter(segment => segment); // e.g., ['dashboard', 'products', 'create']

    const breadcrumbs = [];
    let accumulatedPath = ''; // To build the href for each breadcrumb item

    // 1. Add a base "Home" or "Dashboard" entry
    if (pathname === '/') {
        // If it's the root URL, just display "Home"
        breadcrumbs.push({ name: 'Home', href: '/' });
    } else {
        // For any path under /dashboard, start with "Dashboard"
        breadcrumbs.push({ name: 'Dashboard', href: '/dashboard' });
        accumulatedPath = '/dashboard'; // Initialize path for subsequent segments
    }

    // 2. Process remaining path segments
    pathSegments.forEach((segment, index) => {
        // If the first segment is 'dashboard' and we've already added 'Dashboard' as the base, skip it here.
        if (index === 0 && segment === 'dashboard' && pathname !== '/dashboard') {
            return; // Skip adding 'dashboard' again if it was the initial base segment
        }

        accumulatedPath += `/${segment}`;
        const displayName = capitalizeAndFormat(segment);

        // You can add more complex logic here for dynamic segments (e.g., [id])
        // For example, if a segment is an ID, you might want to fetch and display the actual name
        // of the item (e.g., Product X instead of just '123').
        // For now, it will just capitalize the ID (e.g., '123' -> '123').
        // If your segment names contain hyphens (e.g., 'new-product'), `capitalizeAndFormat` handles it.

        breadcrumbs.push({ name: displayName, href: accumulatedPath });
    });

    // 3. Final adjustment for the `/dashboard` path itself
    // If the path is exactly '/dashboard', ensure we don't have a duplicate 'Dashboard' entry
    if (pathname === '/dashboard' && breadcrumbs.length > 1 && breadcrumbs[0].name === 'Dashboard' && breadcrumbs[1].name === 'Dashboard') {
        breadcrumbs.pop(); // Remove the redundant second 'Dashboard' entry
    }

    return (
        <ol className={styles.breadcrumb}>
            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                    // Use the key based on href for stable rendering
                    <li key={crumb.href}>
                        {isLast ? (
                            // The last item is typically not a link and is just text
                            <span>{crumb.name}</span>
                        ) : (
                            // Other items are clickable links
                            <Link href={crumb.href}>
                                {crumb.name}
                            </Link>
                        )}
                    </li>
                );
            })}
        </ol>
    );
};

export default Breadcrumb;