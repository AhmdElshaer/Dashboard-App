import { useState } from 'react';
import {Form} from 'react-bootstrap';
import Context from '../components/Context';

function Settings() {
  const [isDark, setIsDark] = useState();
  if (isDark) {
  localStorage.setItem('DarkMode', isDark);
}
  const onToggleHandler = () => {
    setIsDark(!isDark);
    localStorage.removeItem('DarkMode');
  }
  let darkMode;
  if (localStorage.getItem('DarkMode') === true) {
    darkMode = true;
  } else {
    darkMode = false;
  }

  return (
    <Context.Provider value={{Dark: isDark}}>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Dark Mode"
          onChange={onToggleHandler}
          checked={darkMode}
        />
      </Form>
      </Context.Provider>
  );
}

export default Settings;