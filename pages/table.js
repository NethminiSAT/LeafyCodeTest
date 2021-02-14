import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Navbar from "./Navbar";

const useStyles = makeStyles({
	table: {
	  minWidth: 650,
	},
  });
  
  function createData(Pname, PID, Uprice, qty) {
	return { Pname, PID, Uprice, qty };
  }
  
  const rows = [
	createData('Frozen yoghurt', 1001, 60.0, 60, ),
	createData('Ice cream sandwich', 1002, 90.0, 40, ),
	createData('Eclair', 1003, 100.0, 25, ),
	createData('Cupcake', 1004, 45.5, 20, ),
	createData('Gingerbread', 1005, 30.0, 50, ),
  ];
  
  export default function table() {
	const classes = useStyles();
  
	return (
		<container>
			<Navbar/>
			<div>
	  <TableContainer component={Paper}>
		<Table className={classes.table} aria-label="simple table">
		  <TableHead>
			<TableRow>
			  <TableCell>Product Name</TableCell>
			  <TableCell align="right">Product ID</TableCell>
			  <TableCell align="right">Unit Price</TableCell>
			  <TableCell align="right">Quantity</TableCell>
			 </TableRow>
		  </TableHead>
		  <TableBody>
			{rows.map(row => (
			  <TableRow key={row.Pname}>
				<TableCell component="th" scope="row">
				  {row.Pname}
				</TableCell>
				<TableCell align="right">{row.PID}</TableCell>
				<TableCell align="right">{row.Uprice}</TableCell>
				<TableCell align="right">{row.qty}</TableCell>
				</TableRow>
			))}
		  </TableBody>
		</Table>
	  </TableContainer>
			</div>
		</container>
	);
  }