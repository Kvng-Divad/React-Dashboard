import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.css'

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "30 March 2022", 'Shipped'),
  createData("Big Baza Bang ", 18908424, "30 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "29 March 2022", "Approved"),
  createData("Cupcake x12", 18908421, "29 March 2022", "Delivered"),
  createData("chicken Pot", 18908560, "28 March 2022", "Delivered"),
];

const makeStyle=(status)=>{
    if(status === "Approved"){
        return{
            background:"rgb(145 254 157 / 47%)",
            color: "green"
        }
    }
    if(status === "Pending"){
        return{
            background:"rgb(245 145 157 / 47%)",
            color: "red"
        }
    }
    if(status === "Shipped"){
      return{
          background:"rgb(205 205 47 / 47%)",
          color: "yellow",
          padding:'.25rem',
          borderRadius:'.25rem',
      }
  }
    else{
        return{
            background:"rgb(15 17 256 / 47%)",
            color: "white"
        }
    }
}



export default function BasicTable() {
  return (
    <div className='table'>
        <h3>Recent Orders </h3>
    <TableContainer component={Paper}
        style={{
            boxShadow:"var(--box-shadow)",
            backGround:"black",
        }}
    >

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='name'>
                {row.name}
              </TableCell>
              <TableCell align="left" className='tracking'>{row.trackingId}</TableCell>
              <TableCell align="left" className='date'>{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='details'>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
