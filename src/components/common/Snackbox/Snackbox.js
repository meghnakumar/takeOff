import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './Snackbox.scss';

const Snackbox = ({message, severity}) => {
  
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const [open, setOpen] = React.useState(true);

  const { vertical, horizontal } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    setOpen(false)
  };

  useEffect(() => {
    var element = document.getElementById('check');
    element.click();
  }, []);

  return (
    <div>
      <Button id="check"
        style={{ display: 'none' }}
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}
      >
        open snack bar
      </Button>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Snackbox;
