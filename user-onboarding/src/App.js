import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form'

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  checked: false
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
