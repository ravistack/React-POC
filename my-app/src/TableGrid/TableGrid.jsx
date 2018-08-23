import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class TableGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
        //change it her
            columnDefs: [
                {headerName: "As_Of_Date", field: "as_of_date"},
                {headerName: "Label_Name", field: "label_name"},
                {headerName: "DQ_Rule_ID", field: "dq_rule_id"},
                {headerName: "DQ_Entity", field: "dq_entity"},
                {headerName: "DQ_Attribute", field: "dq_attribute"},
                {headerName: "DQ_Attribute_Value", field: "dq_attribute_value"},
                {headerName: "DQ_Exception_MSG", field: "dq_exception_msg"},
                {headerName: "Primary_Key", field: "primary_key"},
                {headerName: "Category", field: "category"},

            ],
            rowData: [
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"},
                {as_of_date: "as_of_date-1", label_name: "label_name-1", dq_rule_id: 1, dq_entity: "dq_entity-1", dq_attribute: "dq_attribute-1", dq_attribute_value: "dq_attribute_value-1", dq_exception_msg: "dq_exception_msg-1", primary_key: "primary_key-1", category: "category-1"}
            ]
        }
    }

    render() {
        return (
                <div
                  className="ag-theme-balham"
                  style={{
	                height: '500px',
	                width: '100%' }}
		            >
                    <AgGridReact
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        onGridReady={ params => this.gridApi = params.api }>
                    </AgGridReact>
                </div>
            );
    }
}

export default TableGrid;
