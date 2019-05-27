import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";

export default class DataStoreConsistency extends Component {
  handleChange = () => {
    console.log("sdf");
  };

  render() {
    return (
      <div>
        <Button color="primary" variant="contained">
          Kjør
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={this.handleChange()}
              value="checkedB"
              color="default"
            />
          }
          label="Organisasjon"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={this.handleChange()}
              value="checkedB"
              color="default"
            />
          }
          label="Adapter"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={this.handleChange()}
              value="checkedB"
              color="default"
            />
          }
          label="Klienter"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={this.handleChange()}
              value="checkedB"
              color="default"
            />
          }
          label="Juridisk kontakt"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={this.handleChange()}
              value="checkedB"
              color="default"
            />
          }
          label="Teknisk kontakt"
        />
      </div>
    );
  }
}
