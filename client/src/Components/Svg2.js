


import React, { Component } from 'react'
import pic1 from './pic1.svg';
import blog from './blog.svg';


export class Svg2 extends Component {
    render() {
        return (
          
            <div className="svgs">
                <div className="r">
                    <img src={pic1} className="pic1" /*width="400px" height="270px"*//>
                </div>
                <div className="l">
                    <img src={blog} className="blog"/>
                </div>
        
            </div>
        )
    }
}

export default Svg2

