import Appbar from './views/backend/Appbar'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  app: {
    background: theme.palette.primary.dark,
    minHeight: '100vh'
  }
}))

function App() {

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Appbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
