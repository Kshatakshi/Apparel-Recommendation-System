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
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Imageupload from './Imageupload'

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
  root2: {
    maxWidth: 345,
    background: '#333333'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function File() {

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('BOW');
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

    const response = axios.post(`http://localhost:5000/${method}`, {

      title: `${title}`
    }).then(data => { console.log(data.data); setapparel(data.data.data) }).catch(e => console.log(e))

  }

  console.log(apparels);


  const classes = useStyles();
  return (

    <div className="main">
     <div >
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
        <div  className="select">
          {/* <select style={{ flex: '1', padding: '10px', top: '5', width: '130px', left: '4' }} onChange={handlemethodChange}>
            <option value="BOW">Bag-of-words</option>
            <option value="W2V">Word-to-vec</option>

          </select> */}
           {/* <div > */}
           {/* <InputLabel htmlFor="age-native-required">Method</InputLabel> */}
            <Select
              native
             
              value={method}
              onChange={handlemethodChange}
              name="method"
              inputProps={{
                id: 'age-native-required',
              }}
            >
              
              <option value="BOW">Bag-of-words</option>
              <option value="W2V">Word-to-vec</option>
              
            </Select>
            {/* <FormHelperText>Required</FormHelperText> */}
          {/* </div> */}

        </div>


      </form>
      <Imageupload/>
      </div>
       <div className={classes.root}>
       <Grid container spacing={4}>
        {apparels &&
        apparels.map((data, index) => {

          return (
                <Grid item xs={12} sm={12} md={6}>
                  
                    <div className="book" key={index}>
                    <Card className={classes.root1}>
                    <CardHeader
                      // action={
                      //   <IconButton aria-label="settings">
                      //     <MoreVertIcon />
                      //   </IconButton>
                      // }
                      title={data.Title}
                      subheader={data.Brand}
                    />
                    <CardMedia
                      className={classes.media}
                      image={data.medium_image_url}
                      title={data.Title}
                    />
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Apparel {index + 1} description.
                    </Typography>
                    </CardContent>
    
                      </Card>
                    </div>  
                </Grid>
             
            
          )
          
        })}
         </Grid>
        </div>
    </div>
  );
}