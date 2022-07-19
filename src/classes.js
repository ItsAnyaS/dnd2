// const UserObject = {
//     firstName: 'Michael',
//     lastName: 'Law',
//     signup: function(){
//         console.log(this.firstName, 'signed up')
//     }
// } 

// class User {
//     constructor(name, email, passowrd){
//         this.name = name
//         this.email = email
//         this.passowrd = passowrd
//     }

//     signup(){
//         console.log(this.name, 'signed up')
//     }
// }

// class AdminUser extends User{
//     constructor(name, email, passowrd){
//         super(name, email, passowrd)
//         this.admin = true
//     }
// }
// let user = new User('Michael', 'michael@gmail.com', '12345678')
// // let admin = new AdminUser
// // user.signup()

// // console.log(user)
// // console.log(UserObject)
import React from "react";
import {useState} from 'react'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }

    render(){
        return (
          <div>
            <button onClick={()=> {this.setState({count: this.state.count + 1})}}>Click me</button>
            <h2>Count is {this.count}</h2>
          </div>
        );
    }
}

export default App