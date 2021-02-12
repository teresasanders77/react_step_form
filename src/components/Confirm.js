import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_thog09r', 'template_n5fkwh9', e.target, 'user_gPHNoNvHZXPJbxdR46FjF')
      .then((result) => {
        console.log(result.text);
        this.props.nextStep();
      }, (error) => {
        console.log(error.text);
      });
  }

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <form onSubmit={this.sendEmail}>
              <List>
                <ListItem>
                  <input type="hidden" className="form-control" name="firstName" value={firstName} />
                  <ListItemText primary="First Name" secondary={firstName} />
                </ListItem>
                <ListItem>
                  <input type="hidden" className="form-control" name="lastName" value={lastName} />
                  <ListItemText primary="Last Name" secondary={lastName} />
                </ListItem>
                <ListItem>
                  <input type="hidden" className="form-control" name="email" value={email} />
                  <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                  <input type="hidden" className="form-control" name="occupation" value={occupation} />
                  <ListItemText primary="Occupation" secondary={occupation} />
                </ListItem>
                <ListItem>
                  <input type="hidden" className="form-control" name="city" value={city} />
                  <ListItemText primary="City" secondary={city} />
                </ListItem>
                <ListItem>
                  <input type="hidden" className="form-control" name="bio" value={bio} />
                  <ListItemText primary="Bio" secondary={bio} />
                </ListItem>
              </List>
              <br />

              <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
              >Back</Button>
              <Button
                color="primary"
                variant="contained"
                type="submit" id="submitBtn"
              >Confirm & Continue

              </Button>
            </form>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
