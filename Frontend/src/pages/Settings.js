import {Form} from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../Context/Context';

function Settings() {
  const { toggle, toggleFunction } = useContext(ThemeContext);
  return (
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Dark Mode"
          onChange={toggleFunction}
          checked={toggle}
        />
      </Form>
  );
}

export default Settings;