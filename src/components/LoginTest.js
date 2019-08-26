import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
class LoginTest extends React.Component {
	constructor() {
		super();
		// const classes = useStyles();
		this.state = {
			username : 'ss',
			password: ''
		}
	}
	submitLogin = (event) =>{
		 // console.log(event.current.name);
		// var data = { ...event.target.name,  ...event.target.value };
		 console.log(this.state);
		
		event.preventDefault();
	}
	setValue = (event) => {
		console.log('event ' ,event)
		// this.setState({ ...event.target.name : ...event.target.value })
	}
	render() {	
		return (
			<div>
				<form onSubmit={this.submitLogin}>
					<Grid container spacing={3} justify="center">
						<Grid item xs={8}>							
								<TextField
									required
									id="username"
									label="Required"
									defaultValue=""
									margin="normal"
									placeholder="Username"
									name="username"
									value={this.state.username}
									onChange={this.setValue}
								/>
								<input type="text" name="test" value={this.state.username} onChange={this.setValue} />
						</Grid>	
						<Grid item xs={8}>
							<TextField
									required
									id="password"
									label="Required"
									defaultValue=""
									margin="normal"
									placeholder="Password"
									type='password'
									name="password"
									value={this.state.password}
									onChange={this.setValue}
								/>
						</Grid>
						<Grid item xs={8} justify="center">
							<Button type="submit" variant="contained" color="primary">Login</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		)
	}
}

export default LoginTest