import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Api from '../api'

class Registration extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            password:'',
            username:''
        }
        // Api.getData();
    }
    setValueFor = (event) => {
        console.log({ [event.target.name]:event.target.value})
        this.setState({ [event.target.name]:event.target.value})
    }

    submitUser = (event) => {
        event.preventDefault();       
        console.log('Posting to server',this.state)
        Api.createUser(this.state);
        
    }
    render(){
        return (
            <div>
				<form onSubmit={this.submitLogin}>
					<Grid container spacing={3} justify="center">
						<Grid item xs={8}>
                            <div className="user-registration">
                                <div className="row">
                                    <div className="field">
                                        Name
                                    </div>
                                    <div className="input-field">
                                        <input type="text" value={this.state.name} name='name' onChange={this.setValueFor} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="field">
                                        Username
                                    </div>
                                    <div className="input-field">
                                        <input type="text" value={this.state.username} name='username'  onChange={this.setValueFor}  />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="field">
                                        Password
                                    </div>
                                    <div className="input-field">
                                        <input type="text" value={this.state.password} name='password'  onChange={this.setValueFor}  />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="field">
                                        <button onClick={this.submitUser}>Submit</button>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
export default Registration

