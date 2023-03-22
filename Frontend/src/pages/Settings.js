import {Form} from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../Context/Context';
import {Card} from 'react-bootstrap';

function Settings() {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <Card border="primary" style={toggle ? {backgroundColor: 'var(--dark-color)'} : {backgroundColor: 'var(--light-color)'}}>
      <Form className='d-flex justify-content-center' style={{ width: '18rem', padding: '2rem'}}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Dark Mode"
          onChange={toggleFunction}
          checked={toggle}
        />
      </Form>
      </Card>
  );
}

export default Settings;