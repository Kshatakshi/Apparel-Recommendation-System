
import React, { Component } from 'react'
import {Grid} from '@material-ui/core'

export class Flex extends Component {
    render() {
        return (
            <div className="container" >
           <Grid item xs={24} container spacing={2} >

               <Grid  className="item" item lg={6} sm={6} xs={12}>
                   <h1 >Block </h1>
               </Grid>
               <Grid className="item" item lg={6} sm={6} xs={12}>
                   <h1 style={{backgroundColor: 'grey'}}>Block </h1>
               </Grid>
               <Grid className="item" item lg={6} sm={6} xs={12}>
                   <h1 style={{backgroundColor: 'grey'}}>Block </h1>
               </Grid>
               <Grid className="item" item lg={6} sm={6} xs={12}>
                   <h1 style={{backgroundColor: 'grey'}}>Block </h1>
               </Grid>
               <Grid className="item" item lg={6} sm={6} xs={12}>
                   <h1 style={{backgroundColor: 'grey'}}>Block </h1>
               </Grid>
               <Grid className="item" item lg={6} sm={6} xs={12}>
                   <h1 style={{backgroundColor: 'grey'}}>Block </h1>
               </Grid>
           </Grid>

</div>

        )
    }
}

export default Flex



