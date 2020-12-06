import React from 'react'

function about() {

    
    return (
        <React.Fragment>
            <h1 style={links}>About</h1>
            <p style={links1}>Makers of the App</p>

            
        </React.Fragment>
    )
}

export default about;

const links= {
    marginLeft: '47%'
}
const links1= {
    marginLeft: '45%',
    marginTop:'10%'
}