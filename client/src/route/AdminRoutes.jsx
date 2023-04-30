import Dashboard from '../layout/view/Dashboard';
import StoreManage from '../layout/view/manageStore/StoreManage';

const AdminRoutes = [
    {
        path: '/admin/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/admin/manage-store',
        element: <StoreManage />,
    },
];
export default AdminRoutes;
