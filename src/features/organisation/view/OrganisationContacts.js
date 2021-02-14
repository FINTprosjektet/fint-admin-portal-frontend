import React, {Component} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import PropTypes from "prop-types";
import Sort from "../../../common/utils/Sort";


class OrganisationContacts extends Component {


  constructor(props) {
    super(props);
    this.state = {
      open: props.show,
      organisation: props.organisation,
      contacts: props.contacts,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return {
        open: nextProps.show,
        organisation: nextProps.organisation,
        contacts: nextProps.contacts,
      };
    }

    return null;
  }

  handleCancel = () => {
    this.props.onClose();
  };

  updateOrganisationState = (event) => {
    const field = event.target.name;

    const organisation = this.state.organisation;
    const contacts = this.state.contacts;
    organisation[field] = event.target.value;
    return this.setState({organisation: organisation, contacts: contacts});
  };

  renderDialog() {
    const organisation = this.state.organisation;
    const contacts = this.state.contacts.sort(Sort.alphabetically);
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleCancel}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Kontakter</DialogTitle>
          <DialogContent>
            <List>
              {contacts.filter(it => organisation.technicalContacts.includes(it.dn)).map((contact) => 
                <ListItem className={classes.listItem} key={contact.dn}>
                  <ListItemAvatar>
                      <Avatar className={classes.itemAvatar}>
                          <ContactIcon/>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                      primary={contact.firstName}
                      secondary={contact.lastName}
                  />
                </ListItem>,
              )}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleCancel()} color="primary">
              Lukk
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  };

  render() {
    return this.renderDialog();
  };
}

OrganisationContacts.propTypes = {
  organisation: PropTypes.any.isRequired,
  contacts: PropTypes.array.isRequired,
  onClose: PropTypes.any.isRequired,
  show: PropTypes.any.isRequired
};

export default OrganisationContacts;
