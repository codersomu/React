import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
class Login extends Component {
	constructor() {
		super();
		// const classes = useStyles();
		this.state = {
			username : '',
			password: ''
		}
	}
	submitLogin = (event) =>{		
		event.preventDefault();
	}
	setValue = (event) => {		
		this.setState({ [event.target.name]: event.target.value })
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
									type="email"
									value={this.state.username}
									onChange={(e) => this.setValue(e)}
								/>
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
									onChange={(e) => this.setValue(e)}
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

export default Login