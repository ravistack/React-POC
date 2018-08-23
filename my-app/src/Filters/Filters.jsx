import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Label} from 'react-bootstrap';
import './Filters.css';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing :true,
            numberOfGuests: 20
        }
    }

    render() {
        return (
            <form className='FormFilter'>
                <h5>
                    <strong>Type</strong>
                </h5>
                <Checkbox>
                  DQ
                </Checkbox>
                <Checkbox>
                  Technical
                </Checkbox>
                <Checkbox>
                  Categorie
                </Checkbox>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Product</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Categorie</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Rule</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
            </form>
        );
    }
}

export default Filters;