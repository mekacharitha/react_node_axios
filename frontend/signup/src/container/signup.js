import React , {Component} from 'react';
import Redirect from 'react-router-dom';
import './signUp.css';
const axios=require('axios')

class Signup extends Component{
    constructor(props){
        super(props);

        this.state={
          email:'',
          password:'',
          username:''
        };
        this.handlemail=this.handlemail.bind(this);
        this.handlepass=this.handlepass.bind(this);
        this.handleusername=this.handleusername.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this);
        }
        handlemail(e)
        {
            this.setState({
                email:e.target.value
            })
        }
        handlepass(e){
          this.setState({
            password:e.target.value
          })
        }
        handleusername(e){
          this.setState({
            username:e.target.value
          })
        }
        handleSubmit(e)
      {console.log(this.state.email)
        let   reg_exp_ecode=/^[a-zA-Z0-9]+@+[a-zA-Z]+.+com/
        if(!this.state.email.match(reg_exp_ecode))
        {alert("required valid email")}
        else if(this.state.password.length<8)
        alert("password should be greater then 8 length")
        else {
            axios.post('http://localhost:8000/users',{
                userName:this.state.username,
                email:this.state.email,
                password:this.state.password
            })
            .then(function (response) {
            console.log(response.data.users)
        })
            .catch(function (error) {
            console.log(error);
        });
        }
      }

   
    
    render(){
        return(
            <div className="mainContainer">
                    <div className="text">Sign Up</div>
                    <input className="inputFields" placeholder="UserName" onChange={this.handleusername} type="text"></input><br/>
                    <input className="inputFields" placeholder="Email" type="email" onChange={this.handlemail}></input><br/>
                    <input className="inputFields" placeholder="Password" type="password" onChange={this.handlepass}></input><br/>
                    <button className="signUpButton" type="submit" onClick={this.handleSubmit}>Sign Up</button>
            </div>
        );
    }
}

export default Signup;