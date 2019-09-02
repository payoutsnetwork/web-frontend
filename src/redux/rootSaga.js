import {takeLatest} from 'redux-saga/effects';

/* ------ Action Types ------ */
import {types as employeeActionTypes} from './employees/actions';
import {types as statesActionTypes} from './states/actions';

/* ------ Sagas ------ */
import {getEmployees, postEmployees, deleteEmployees, patchEmployees} from './employees/sagas'
import {getStates} from './states/sagas'

/* ------ API ------ */
import {API} from '../services/api';

export default function* root() {
  yield takeLatest(employeeActionTypes.GET_EMPLOYEES, getEmployees, API);
  yield takeLatest(employeeActionTypes.POST_EMPLOYEES, postEmployees, API);
  yield takeLatest(employeeActionTypes.DELETE_EMPLOYEES, deleteEmployees, API);
  yield takeLatest(employeeActionTypes.PATCH_EMPLOYEES, patchEmployees, API);

  yield takeLatest(statesActionTypes.GET_STATES, getStates, API);
}