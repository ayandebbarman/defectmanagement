import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


// const [selectedDate, setSelectedDate] = React.useState(new Date('2019-09-09T21:11:54'));

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const priorties = [
  {
    value: 'P1',
    label: 'P1',
  },
  {
    value: 'P2',
    label: 'P2',
  },
  {
    value: 'P3',
    label: 'P3',
  },
  {
    value: 'P4',
    label: 'P4',
  },
];

const statuses = [
  {
    value: 'New',
    label: 'New',
  },
  {
    value: 'Open',
    label: 'Open',
  },
  {
    value: 'Fixed',
    label: 'Fixed',
  },
  {
    value: 'Closed',
    label: 'Closed',
  },
];

// function handleDateChange(date) {
//   setSelectedDate(date);
// }

function NewDefectForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      name: '',
      age: '',
      multiline: 'Controlled',
      priorty: 'Select',
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
  
    return (
      <form noValidate autoComplete="off">
              <Grid>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
        />
        <div>
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows="4"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
        </div>
        <TextField
          id="standard-select-currency-native"
          select
          label="Priority"
          className={classes.textField}
          value={values.priorty}
          onChange={handleChange('priorty')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select defect Priority"
          margin="normal"
        >
          {priorties.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Status"
          className={classes.textField}
          value={values.priorty}
          onChange={handleChange('priorty')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select defect Status"
          margin="normal"
        >
          {statuses.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <br/>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Target Date"
          format="MM/dd/yyyy"
          value="2019-09-09T21:11:54"
          onChange=""
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
    </Grid>

    <br/>
        <button>Submit</button>
      
      </form>
    );
  }

export default NewDefectForm