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
  const [formValues, setFormValues] = useState(initialFormValues);
  return (
    <div className="App">
      <Form values={formValues} />
    </div>
  );
}

export default App;
