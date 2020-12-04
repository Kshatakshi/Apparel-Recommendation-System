import React, { Component } from 'react'

export class Search extends Component {
   /* state = { 

        title: '',
        method: 'Word-to-vec '
    } */

   constructor(props)
    {
       super(props)

        this.state= {
            title1: '',
            method: 'Word-to-vec '

        }
    }
       handletitleChange = (e)=>{
            this.setState({
                title1:e.target.value
            })

        }
        handletitleChange = (e)=>{
            this.setState({
                method:e.target.value
            })

        }

        handleSubmit = (e)=>{
e.preventDefault()
this.setState({title1: ' '})
        }
     
    render() {
        /*const { title, method}= this.state*/
        return ( 
            <form style = {{display:'flex', marginLeft:'10px'}} onSubmit={this.handleSubmit  }>
            <div className="inp">
                
                 <input type="text"  style= {{flex: '1', padding: '10px', top:'5', width:'350px', left:'4'}}  name="title1" value={this.state.title1} /*placeholder="enter the kind of clothes"*/ onChange={this.handletitleChange} />
            </div>
            <div>
                
                <select value={this.state.method} onChange= {this.handlemethodChange}> 
                    <option value="Bag-of-words">Bag-of-words</option>
                    <option value="Word-to-vec">Word-to-vec</option>
                    
                </select>
            </div>
            <button className="btn" type="submit" >Search</button>
            </form>
        ) 
    }
}

export default Search

