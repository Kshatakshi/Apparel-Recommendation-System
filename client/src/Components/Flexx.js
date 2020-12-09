import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'



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
 /*const [apparel, setapparel] = useState(null);

 const fetchData= async()=>{
   const response= await axios.post(`http://localhost:5000/${method}`, {

  title: `${title}`
   })//.then(data=> console.log(data)).catch(e=>console.log(e))

   setapparel(response.data)
  }  */

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


{/* <div className="books">
{books &&
  books.map((book, index) => {
    const cleanedDate = new Date(book.released).toDateString();
    const authors = book.authors.join(', ');

    return (
      <div className="book" key={index}>
        <h3>Book {index + 1}</h3>
        <h2>{book.name}</h2>

        <div className="details">
          <p>👨: {authors}</p>
          <p>📖: {book.numberOfPages} pages</p>
          <p>🏘️: {book.country}</p>
          <p>⏰: {cleanedDate}</p>
        </div>
      </div>
    );
  })}
</div>
</div>
);
} */}