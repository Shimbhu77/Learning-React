import { TextField, Typography } from '@mui/material'
import {FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox, Button} from '@mui/material';
import React from 'react'

export default function AddTask() {
    return (
        <div>
            <FormControl>
            <Typography variant='h5'>Add New Task</Typography>
                <FormGroup sx={{ padding: '10px' ,width:'900px'}}>
                    <TextField label="Task Title"  sx={{ margin: '10px' }}  />
                    <TextField label="Task Details"  sx={{ margin: '10px' }}/>
                </FormGroup>
                <Button variant="contained" color="primary">Submit</Button>
            </FormControl>

        </div>
    )
}
