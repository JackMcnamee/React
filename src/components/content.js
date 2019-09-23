import React from 'react';

class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );    
    }
}
export default Content;