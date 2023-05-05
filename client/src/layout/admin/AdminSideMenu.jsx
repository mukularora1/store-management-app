import DashboardIcon from '@mui/icons-material/Dashboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaletteIcon from '@mui/icons-material/Palette';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function AdminSideMenu() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    useEffect(() => {
        setSelectedIndex(0);
    }, [selectedIndex]);
    const handleListItemClick = (event, index, method) => {
        console.log(event, index);
        setSelectedIndex(index);
        method();
    };
    const handleOnClick = () => {
        console.log('hee');
    };
    const handleOnChange = (e) => {
        console.log('h', e);
    };
    const SideBarItems = [
        {
            title: 'Dashboard',
            icon: <DashboardIcon />,
            method: handleOnClick,
            link: '/admin/dashboard',
        },
        {
            title: 'Manage store',
            icon: <StoreIcon />,
            method: handleOnClick,
            link: '/admin/manage-store',
        },
        {
            title: 'Sales',
            icon: <MonetizationOnIcon />,
            method: handleOnClick,
            link: '/admin/sales',
        },
        {
            title: 'Purchase',
            icon: <DashboardIcon />,
            method: handleOnClick,
            link: '/admin/purchase',
        },
        {
            title: 'Bill design',
            icon: <PaletteIcon />,
            method: handleOnClick,
            link: '/admin/bill-design-setup',
        },
        {
            title: 'Store setting',
            icon: <SettingsIcon />,
            method: handleOnClick,
            link: '/admin/store-setting',
        },
    ];
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant='permanent'
            anchor='left'>
            <Toolbar />
            <Divider />
            <List onChange={handleOnChange}>
                {SideBarItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        style={{ textDecoration: 'none', color: '#000000' }}>
                        <ListItem
                            disablePadding
                            selected={selectedIndex === index}
                            onClick={(event) =>
                                handleListItemClick(event, index, item.method)
                            }>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            {/* <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Drawer>
    );
}

export default AdminSideMenu;
