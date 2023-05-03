import BillSetup from '../layout/admin/BillSetup/BillSetup';
import Dashboard from '../layout/admin/Dashboard/Dashboard';
import StoreManage from '../layout/admin/manageStore/StoreManage';

const AdminRoutes = [
    {
        path: '/admin/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/admin/manage-store',
        element: <StoreManage />,
    },
    {
        path: '/admin/bill-design-setup',
        element: <BillSetup />,
    },
];
export default AdminRoutes;
