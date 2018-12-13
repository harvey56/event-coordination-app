import * as React from 'react';
import { Hello } from "./Hello";
import { hot } from 'react-hot-loader'
import Button from '@material-ui/core/Button';


const App = () => {
  return (
    <Button variant="contained" color="primary">
      Test
    </Button>
  );
}

export default hot(module)(App);