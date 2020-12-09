import React, { Component } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import web from './web.svg';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import axios from 'axios'


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    margin: '5vw',
    zIndex: '100',
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'grey',
    color: theme.palette.text.secondary,
    height: '20vh',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function File() {

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('word-to-vec');
  const [apparels, setapparel] = useState([]);

  const handletitleChange = (e) => {
    let value = e.target.value

    setTitle(value);


  }
  const handlemethodChange = (e) => {
    let value = e.target.value
    setMethod(value);


  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(`${title}`)
    console.log(`${method}`)

    console.log("submitted");

    // useEffect(() => {

    //   axios.post(`http://localhost:5000/${method}`, {

    // // title :// "tart womens collections ann wrap top xs black" {title}
    // title: `${title}`
    //  }).then(data=> console.log(data)).catch(e=>console.log(e))

    // //  }, []) 


    const response = axios.post(`http://localhost:5000/${method}`, {

      title: `${title}`
    }).then(data => { console.log(data.data); setapparel(data.data.data) }).catch(e => console.log(e))






  }

  console.log(apparels);


  const classes = useStyles();
  return (

    <div className="main">

      <form className="searchf" onSubmit={handleSubmit} action="" method="Post">



        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            name="title"
            onChange={handletitleChange}
          />
        </div>
        { //<div>
          //<input className="title1" type="text"  name="title1"  /*placeholder="enter the kind of clothes"*/ onChange={handletitleChange} />
          //</div>
        }

        <div>
          <select style={{ flex: '1', padding: '10px', top: '5', width: '130px', left: '4' }} onChange={handlemethodChange}>
            <option value="BOW">Bag-of-words</option>
            <option value="W2V">Word-to-vec</option>

          </select>

        </div>


      </form>


      {/* <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={classes.paper}> */}

      {apparels &&
        apparels.map((data, index) => {

          return (
            <div className={classes.root}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} lg={4}>
                  <Paper className={classes.paper}>

                    <div className="book" key={index}>
                      <h3>Apparel {index + 1}</h3>
                    
                      <h2>{data.Title}</h2>
                      <div>
                    

                      <div >

                        <p>{data.Brand}</p>

                      </div>
                      <img 
      src={data.medium_image_url}
      alt="new"
      />
      </div>
                    </div>
                  </Paper>

                </Grid>
              </Grid>
            </div>


          )
        })}


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
