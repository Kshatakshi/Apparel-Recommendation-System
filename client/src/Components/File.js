import React, { Component } from 'react'
import { useState } from 'react';
import { useEffect} from 'react';
import web from './web.svg';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import axios from 'axios';

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
    //   width: '100%',
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
    const [method,setMethod] = useState('word-to-vec');

       const handletitleChange = (e)=>{
         let value = e.target.value  
         //console.log(value);  
         setTitle(value);
         

        }
        const handlemethodChange = (e)=>{
            let value = e.target.value    
           setMethod(value);
           //console.log(value);

        }

        const handleSubmit = (e)=>{
            e.preventDefault()
           
           console.log(`${title}`)
           console.log(`${method}`)

            console.log("submitted");
        }
        async function getData(){

          try{
            let result= await fetch('/BOW',{
              method: 'GET',
              // mode: 'no-cors',
              headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
      
              },
              
                title: 'huafeiwude womens cardigan wool waistcoat casual vest black'
            //  body:{
            //    title: 'huafeiwude womens cardigan wool waistcoat casual vest black'
            //   }
              
            });
            console.log( result)
          } catch(e){
            console.log(e)
          }
        }
  
  useEffect(() => {
    
     getData();
    // fetch('/BOW'
  //   ,{
  //     headers:{
  //         "accepts":"application/json"
  //     }
  // }
  // ).then(response =>console.log(response)).catch(function(error){
  //     console.log(error);
  //   })
 
  }, [])

  


  
        
    // render() {

      const classes = useStyles();
        return (

            <form className="searchf" onSubmit={handleSubmit} action="http://localhost:5000/BOW" method="get">
                
                    
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
                        <option value="bag-of-words">Bag-of-words</option>
                        <option value="word-to-vec">Word-to-vec</option>
                        
                    </select>

                    </div>
                     {/* <div>
                    <button style = {{display:'flex', marginLeft:'10px'}} className="btn" type="submit" >Search</button>
                    </div> */}
               
            </form>
       
            
        )
    }