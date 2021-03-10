import React, {Component} from 'react';

export class User extends Component {

    constructor(props){
        super(props)
    }
    render(){
        
        console.log(this.props)
        return(
            <th>
                <tr> {this.props.email} </tr>
                <tr> {this.props.name} </tr>
                <tr> {this.props.pass} </tr>
            </th>
        );

    }
}

export default User;