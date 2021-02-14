import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    alignItems: 'center',
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function addNew() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5" align={"center"}>
          Add New Product
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Product Name"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="Product Id"
              name="id"
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="price"
              label="Unite Price"
              name="price"
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="qty"
              label="Quantity"
              name="qty"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add
          </Button>
        </form>
      </div>
    </Container>
  );
}