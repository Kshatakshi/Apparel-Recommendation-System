import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'5vw',
    zIndex:'100',
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background:'grey',
    color: theme.palette.text.secondary,
    height: '20vh',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
 //const [placeholder, setPlaceholder] = useState('Hi');


   /* fetch('/BOW').then(res => res.json()).then(data => {
      console.log(data.result);
    });*/
  /*  axios.get('/BOW', data)
    .then((response) => {
        // Handle request response here
        console.log(data.result)
    }; */
   /* axios.post('http://127.0.0.1:5000/BOW')
      .then(res => {
        const persons = res.data;
        console.log(persons)
       // this.setState({ persons });
      })*/

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
      
    </div>

  
  );
}


