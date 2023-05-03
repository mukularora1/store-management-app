import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react';
import DashboardInfoCard from './DashboardInfoCard';
import LineGraph from './LineGraph';
const dashboardInfoArr = [
    {
        heading: 'Sales',
        icon: <AttachMoneyIcon />,
        amount: '5000',
        isIncrease: true,
        percentage: '17%',
    },
    {
        heading: 'Sales',
        icon: <AttachMoneyIcon />,
        amount: '5000',
        isIncrease: true,
        percentage: '17%',
    },
    {
        heading: 'Sales',
        icon: <AttachMoneyIcon />,
        amount: '5000',
        isIncrease: true,
        percentage: '17%',
    },
];

function Dashboard() {
    return (
        <div>
            <div className='manageStore__heading'>
                <h1
                    style={{
                        marginLeft: '24px',
                        padding: '7px',
                        borderBottom: '1px solid red',
                        fontWeight: 400,
                        width: 'contain',
                    }}>
                    Dashboard
                </h1>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}>
                {dashboardInfoArr.map(
                    ({ heading, icon, amount, isIncrease, percentage }) => {
                        return (
                            <DashboardInfoCard
                                heading
                                icon
                                amount
                                isIncrease
                                percentage
                            />
                        );
                    }
                )}
            </div>
            <div>
                <LineGraph />
            </div>
        </div>
    );
}

export default Dashboard;
