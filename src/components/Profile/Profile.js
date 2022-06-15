import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {Grid} from '@material-ui/core';
import Card from '@mui/material/Card';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import './Profile.scss'


export default function ProfileScreen() {


  const LogOutUser = () => {   
    
    navigate('/logout', {state:null})   
  }
  
  const navigate = useNavigate();

  return (
    <div class="div-1">
        
        <Grid container className='profileContainer' xs={6}>
        <Grid item xs={3} >
            <AccountBoxIcon sx={{ fontSize: 200 }}/>
        </Grid>
        <Grid item xs={9} align = "center">
                <div class="mb-3 mt-3 col-12 col-md-6">
                <TableContainer component={Paper}>
                    <Table  size="small" aria-label="a dense table">
                      
                      <TableBody>
                          <TableRow key="Name" >
                            
                            <TableCell align="center">Sharad Kumar</TableCell>
                            
                          </TableRow>
                          <TableRow key="Email" >
                            
                            <TableCell align="center">Sharad99kr@gmail.com</TableCell>
                            
                          </TableRow>
                          <TableRow key="Gender" >
                            
                            <TableCell align="center">Male</TableCell>
                            
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                

                <div class="mb-2 mt-2 col-12 col-md-6">
                    <Button id="submit" variant="contained" className='submit' onClick={LogOutUser} >Logout</Button>
                </div>  
          
        </Grid>
      </Grid>
        
        
    </div>
        
    
  );
}