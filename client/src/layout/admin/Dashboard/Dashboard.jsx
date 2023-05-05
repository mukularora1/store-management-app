import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import React from 'react';
import DashboardInfoCard from './DashboardInfoCard';
import DashboardRight from './DashboardRight';
import LineGraph from './LineGraph';
import './adminDashboard.css';
const dashboardInfoArr = [
    {
        heading: 'Sales',
        icon: <AttachMoneyIcon sx={{ color: 'blue' }} />,
        amount: '5000',
        isIncrease: true,
        percentage: '25%',
    },
    {
        heading: 'Unique user',
        icon: <GroupAddIcon sx={{ color: 'blue' }} />,
        amount: '150',
        isIncrease: false,
        percentage: '17%',
    },
    {
        heading: 'Sales',
        icon: <AttachMoneyIcon sx={{ color: 'blue' }} />,
        amount: '5000',
        isIncrease: true,
        percentage: '9%',
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
            <div className='dashboard__divide'>
                <div className='dashboard__left'>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            padding: 25,
                        }}>
                        {dashboardInfoArr.map(
                            ({
                                heading,
                                icon,
                                amount,
                                isIncrease,
                                percentage,
                            }) => {
                                return (
                                    <DashboardInfoCard
                                        heading={heading}
                                        dashboardIcon={icon}
                                        amount={amount}
                                        isIncrease={isIncrease}
                                        percentage={percentage}
                                    />
                                );
                            }
                        )}
                    </div>
                    <div>
                        <LineGraph />
                    </div>
                </div>
                <div className='dashboard__right'>
                    <DashboardRight />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
