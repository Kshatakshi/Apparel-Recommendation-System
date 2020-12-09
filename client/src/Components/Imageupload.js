import React, { useState } from 'react';
import placeholder from './placeholder2.svg';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    root2: {
      maxWidth: 345,
      background: '#333333'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));
  



const Imageupload = ({setter,apparels}) => {
    const [{alt, src}, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image'
    });

    // const [apparels, setapparel] = useState([]);


    const  handleImg = (e) => {
      if(e.target.files[0]) {
          setImg({
              src: URL.createObjectURL(e.target.files[0]),
              
              alt: e.target.files[0].name
          });  
          //console.log(e.target.files[0])
         var x= e.target.files[0]
         var data = new FormData();
         data.append("file",x)
         //var y= x.slice(0, -4)
         console.log(x);
         console.log(data)

          
      }   
      const response = axios.post(`http://localhost:5000/CNN`, data,{

        
        headers:{ 'Content-Type': 'multipart/form-data'}
    }).then(data => { console.log(data.data); setter(data.data.data) }).catch(e => console.log(e))


    
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


        {/* <div className={classes.root}>
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
        </div> */}


</div>
    );
}


export default Imageupload;

