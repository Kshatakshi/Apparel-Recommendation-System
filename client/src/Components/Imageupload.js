import React, { useState } from 'react';
import placeholder from './placeholder2.svg';
import axios from 'axios'
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
  



const Imageupload = () => {
    const [{alt, src}, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image'
    });

    const [apparels, setapparel] = useState([]);


   const  handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                
                alt: e.target.files[0].name
            });  
            //console.log(e.target.files[0])
           var x= e.target.files[0].name
           var y= x.slice(0, -4)
           // console.log(y)
  
            
        }   
       console.log(y)
       const response = axios.post(`http://localhost:5000/CNN`, {

      title: `${y}`
    }).then(data => { console.log(data.data); setapparel(data.data.data) }).catch(e => console.log(e))


    
    }
    const classes = useStyles();
    return (
        <div>
        <form encType="multipart/form-data">
            
            <div className="form__img-input-container">
                <input 
                    type="file" 
                    accept=".png, .jpg"
                    id="photo" 
                    className="visually-hidden"
                    onChange={handleImg}
                />
                <label htmlFor="photo" className="form-img__file-label">
                    
                </label>
                <img src={src} alt={alt} className="form-img__img-preview" width="200px"/>
            </div>
        </form>


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


export default Imageupload;

