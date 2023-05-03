import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
function AddInventory({ isModalOpen, setIsModalOpen }) {
    const handleClose = () => {
        setIsModalOpen(false);
    };
    return (
        <Modal
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={style}>
                <Typography id='modal-modal-title' variant='h5' component='h2'>
                    Add items into inventory
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '10px',
                    }}>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        justifyContent='space-around'
                        alignItems='center'>
                        <Grid item xs={6}>
                            <TextField
                                id='outlined-basic'
                                label='Name'
                                variant='outlined'
                                style={{
                                    width: '95%',
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id='outlined-basic'
                                label='Quantity'
                                type='number'
                                variant='outlined'
                                style={{
                                    width: '95%',
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label='Manufacturing Date'
                                    sx={{ width: '95%' }}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label='Expiry date'
                                    sx={{ width: '95%' }}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id='outlined-basic'
                                label='Serial number'
                                variant='outlined'
                                style={{
                                    width: '95%',
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id='outlined-basic'
                                label='Company name'
                                variant='outlined'
                                style={{
                                    width: '95%',
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                    }}>
                    <Button variant='contained' sx={{ padding: '10px 50px' }}>
                        Save
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}

export default AddInventory;
