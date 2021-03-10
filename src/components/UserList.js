import React, {Component} from 'react';
import {User} from './User';
export class UserList extends Component {

    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.uList);
        const items =  this.props.uList.map((item, i) => 
            <th key={i}>
                <User email={item.email} name = {item.nombre} pass = {item.pass} />
            </th>
            
        );

        return(
            <div>  
                <h1>Datos:</h1>
                <center>
                   {items}
                </center>
            </div>
        );

    }
}

export default UserList;