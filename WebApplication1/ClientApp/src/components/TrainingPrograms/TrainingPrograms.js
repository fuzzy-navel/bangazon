import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AddTrainingProgram from './AddTrainingProgram/AddTrainingProgram';
import AllTrainingPrograms from './AllTrainingPrograms/AllTrainingPrograms';
import TrainingProgram from './TrainingProgram/TrainingProgram';

import './TrainingPrograms.css';

const TrainingPrograms = () => (
  <Switch>
    <Route exact path='/trainingprograms' component={AllTrainingPrograms} />
    <Route path='/trainingprograms/addtrainingprogram' component={AddTrainingProgram} />
    <Route path='/trainingprograms/:id' component={TrainingProgram} />
  </Switch>
);

export default TrainingPrograms;