/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Constants from '../../utils/constants';
import PromoDialog from './PromoDialog';
import handleDeleteCheck from './HandleDeleteCheck';
import updateProducts from './ProductEditInfoService';
import notify from '../Toast/Toast';
import fetchPatients from './DataViewService';
import styles from './PatientsTable.css';

/**
 * @name DataTable
 * @description create a table view of products
 * @return component
 */
const useStyles = makeStyles({
  divButton: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  root: {
    '& .table-header': {
      backgroundColor: '#add8e6',
      fontWeight: 'bold',
      fontSize: '20px'
    },
    '& .MuiDataGrid-root .MuiDataGrid-cell': {
      fontSize: '17px'
    }
  },
  button: {
    '& .MuiButton-root': {
      background: '#666666',
      borderRadius: '20px',
      cursor: 'pointer',
      height: '3em',
      marginTop: '2em'
    }
  },
  buttonLabel: {
    '& .MuiButton-label': {
      color: '#EEEEEE',
      fontSize: '100%'
    }
  }
});

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'table-header',
    hide: true
  },
  {
    field: 'delete',
    headerName: <DeleteIcon />,
    headerClassName: 'table-header',
    width: 100,
    renderCell:
      handleDeleteCheck
  },
  {
    editable: true,
    field: 'firstName',
    headerName: 'First Name',
    headerClassName: 'table-header',
    width: 185
  },
  {
    editable: true,
    field: 'lastName',
    headerName: 'Last Name',
    headerClassName: 'table-header',
    width: 185
  },
  {
    editable: true,
    field: 'ssn',
    headerName: 'SSN',
    headerClassName: 'table-header',
    width: 200
  },
  {
    editable: true,
    field: 'email',
    headerName: 'E-Mail',
    headerClassName: 'table-header',
    width: 350
  },
  {
    editable: true,
    field: 'street',
    headerName: 'Street',
    headerClassName: 'table-header',
    width: 350
  },
  {
    editable: true,
    field: 'city',
    headerName: 'City',
    headerClassName: 'table-header',
    width: 250
  },
  {
    editable: true,
    field: 'state',
    headerName: 'State',
    headerClassName: 'table-header',
    width: 150
  },
  {
    editable: true,
    field: 'postal',
    headerName: 'Postal',
    headerClassName: 'table-header',
    width: 150
  },
  {
    editable: true,
    field: 'age',
    headerName: 'Age',
    headerClassName: 'table-header',
    width: 150
  },
  {
    editable: true,
    field: 'height',
    type: 'number',
    headerName: 'Height (inches)',
    headerClassName: 'table-header',
    width: 270
  },
  {
    editable: true,
    field: 'weight',
    type: 'number',
    headerName: 'Weight (pounds)',
    headerClassName: 'table-header',
    width: 250
  },
  {
    editable: true,
    field: 'insurance',
    headerName: 'Insurance',
    headerClassName: 'table-header',
    width: 200
  },
  {
    editable: true,
    field: 'gender',
    headerName: 'Gender',
    headerClassName: 'table-header',
    width: 150
  }
];

const DataTable = () => {
  const classes = useStyles();
  const [patients, setPatients] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [open, setOpen] = useState(false);
  const updatedPatients = [];
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetchPatients(setPatients, setApiError);
  }, []);

  /**
   * given changed cells save to the product field
   * and the product to a new array to update the product info
   *
   * @param {*} selections - updated cell with product id, field name, and value
   * @returns - nothing if the value is an empty string or null
   */
  const onCellEditCommit = (selections) => {
    if (selections.value === '' || selections.value === null) {
      notify('error', 'Fields can not be left empty');
      return;
    }
    switch (selections.field) {
      case 'name':
        patients[selections.id - 1].name = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'firstName':
        patients[selections.id - 1].description = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'lastName':
        patients[selections.id - 1].category = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'ssn':
        patients[selections.id - 1].demographic = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'email':
        patients[selections.id - 1].type = selections.value;
        updatedPatients.push(updatedPatients[selections.id - 1]);
        break;
      case 'street':
        patients[selections.id - 1].releaseDate = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'city':
        patients[selections.id - 1].primaryColorCode = selections.value;
        updatedPatients.push(updatedPatients[selections.id - 1]);
        break;
      case 'state':
        patients[selections.id - 1].secondaryColorCode = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'postal':
        patients[selections.id - 1].styleNumber = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'age':
        patients[selections.id - 1].GlobalProductCode = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'height':
        patients[selections.id - 1].brand = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'weight':
        patients[selections.id - 1].material = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'insurance':
        patients[selections.id - 1].price = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      case 'gender':
        patients[selections.id - 1].quantity = selections.value;
        updatedPatients.push(patients[selections.id - 1]);
        break;
      default:
    }
  };

  /**
   * calls the update products
   */
  const handleSubmit = () => {
    updateProducts(updatedPatients, setApiError);
    notify('success', 'Update was Successful');
  };
  return (
    <div>
      {apiError && (
        <p className={styles.errMsg} data-testid="errMsg">
          {Constants.API_ERROR}
        </p>
      )}
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          height: 700,
          width: '100%'
        }}
        className={classes.root}
      >
        <DataGrid
          rows={patients}
          columns={columns}
          editMode="row"
          onCellEditCommit={onCellEditCommit}
          rowsPerPageOptions={[20]}
        />
      </div>
      <div className={classes.divButton}>
        <ButtonGroup className={classes.button}>
          <Button href="/maintenance/create" variant="contained" className={classes.buttonLabel}>
            Create
          </Button>
          <Button
            className={classes.buttonLabel}
            style={{ marginLeft: '100px' }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Create Promo
          </Button>
          <Button
            className={classes.buttonLabel}
            style={{ marginLeft: '100px' }}
            variant="contained"
            onClick={handleSubmit}
          >
            Update
          </Button>
        </ButtonGroup>
        <PromoDialog open={open} handleClose={handleClose} />

      </div>
    </div>
  );
};
export default DataTable;
