import Form from 'react-bootstrap/Form';
import classes from './Settings.module.css';
function Switch() {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Dark Mode"
      />
    </Form>
  );
}

function Settings () {
  return (
    <section className={classes.section}>
      <Switch />
    </section>
  )
}

export default Settings;