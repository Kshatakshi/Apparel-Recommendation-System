import React, { Component } from 'react'
import { useState } from 'react';
import { useEffect} from 'react';
import web from './web.svg';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import axios from 'axios';

import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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

  
  

  

 
    
    const [title,setTitle] = useState('');
    const [method,setMethod] = useState('W2V');

       const handletitleChange = (e)=>{
         let value = e.target.value  
         
         setTitle(value);
         

        }
        const handlemethodChange = (e)=>{
            let value = e.target.value    
           setMethod(value);
           

        }

        const handleSubmit = (e)=>{
            e.preventDefault()
           
           console.log(`${title}`)
           console.log(`${method}`)

            console.log("submitted");

           // useEffect(() => {

              axios.post(`http://localhost:5000/${method}`, {
         
            // title :// "tart womens collections ann wrap top xs black" {title}
            title: `${title}`
             }).then(data=> console.log(data)).catch(e=>console.log(e))
             
            //  }, []) 
         
      

}
      
              
              

 
  
  


  
        
    // render() {

      const classes = useStyles();
        return (

            <form className="searchf" onSubmit={handleSubmit} action="" method="POST">
                
                    
                    {/* <img className="web1" src={web} /> */}
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
                      //<input className="title" type="text"  name="title"  /placeholder="enter the kind of clothes"/ onChange={handletitleChange} />
                    //</div>
                }

                    <div>
                    <select style= {{flex: '1', padding: '10px', top:'5', width:'130px', left:'4'}} onChange={handlemethodChange}> 
                        <option value="BOW">Bag-of-words</option>
                        <option value="W2V">Word-to-vec</option>
                        
                    </select>

                    </div>
                     {/* <div>
                    <button style = {{display:'flex', marginLeft:'10px'}} className="btn" type="submit" >Search</button>
                    </div> */}
               
            </form>
       
            
        )
    }
