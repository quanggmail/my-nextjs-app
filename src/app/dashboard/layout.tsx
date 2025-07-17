// Then your dashboard/layout.tsx would just render DashboardClientLayout
// src/app/dashboard/layout.tsx
import { DashboardClientLayout } from './DashboardClientLayout';

export default function DashboardRootLayout({ children }) {
  return <DashboardClientLayout>{children}</DashboardClientLayout>;
}