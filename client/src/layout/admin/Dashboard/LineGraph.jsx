import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
} from 'chart.js';
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
);

function LineGraph() {
    const LineOptions = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis',
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    const LineLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ];

    const LineData = {
        LineLabels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [15, 16, 18, 6, 8, 5, 18],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Dataset 2',
                data: [6, 8, 5, 18, 15, 16, 18],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y1',
            },
        ],
    };
    // donut
    const data = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3, 15],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                weight: 10,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        responsive: true,
        maintainAspectRatio: true,
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box sx={{ width: 500 }}>
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
                                Sales
                            </Typography>
                            <IconButton
                                size='large'
                                aria-label='show 4 new mails'
                                color='inherit'>
                                <AttachMoneyIcon sx={{ color: 'blue' }} />
                            </IconButton>
                        </Box>
                        <Box
                            component='div'
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <div style={{ width: '400px', height: '400px' }}>
                                <Doughnut data={data} options={options} />
                            </div>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ width: 500 }}>
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
                                Sales
                            </Typography>
                            <IconButton
                                size='large'
                                aria-label='show 4 new mails'
                                color='inherit'>
                                <AttachMoneyIcon sx={{ color: 'blue' }} />
                            </IconButton>
                        </Box>
                        <Box
                            component='div'
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <div style={{ width: '400px', height: '400px' }}>
                                <Line data={LineData} options={LineOptions} />
                            </div>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}

export default LineGraph;
