import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
function DashboardInfoCard({
    heading,
    dashboardIcon,
    amount,
    isIncrease,
    percentage,
}) {
    return (
        <Box sx={{ width: 300 }}>
            <Card variant='outlined'>
                <CardContent>
                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}>
                        <Typography
                            sx={{ fontSize: 20, color: 'blue' }}
                            component='span'>
                            {heading}
                        </Typography>
                        <IconButton
                            size='large'
                            aria-label='show 4 new mails'
                            color='inherit'>
                            {dashboardIcon}
                        </IconButton>
                    </Box>
                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center ',
                            alignItems: 'center',
                            width: '100%',
                            margin: '25px 0',
                        }}>
                        <Typography sx={{ fontSize: 36, fontWeight: 500 }}>
                            {amount}
                        </Typography>
                    </Box>

                    <Box
                        component='div'
                        sx={{
                            width: '100%',
                        }}>
                        <IconButton
                            size='large'
                            aria-label='show 4 new mails'
                            color='text.secondary'>
                            {isIncrease ? (
                                <TrendingUpIcon />
                            ) : (
                                <TrendingDownIcon />
                            )}
                        </IconButton>
                        <Typography
                            sx={{ fontSize: 14, margin: '0 10px' }}
                            component='span'
                            color='text.secondary'>
                            {percentage}
                        </Typography>
                        <Typography
                            sx={{ fontSize: 14 }}
                            component='span'
                            color='text.secondary'>
                            Since last week
                        </Typography>
                    </Box>
                </CardContent>

                <CardActions>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default DashboardInfoCard;
