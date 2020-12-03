import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from './components/Header';
import PageHeader from './components/PageHeader';
const { default: SideMenu } = require("./components/SideMenu");


const useStyles = makeStyles(()=>({
  appStyles : {
    paddingLeft : 300,
    width : "100%"
  }
}))
function App() {
  const classes = useStyles()
  return (
  <>
      
      <SideMenu/>
      <div className={classes.appStyles}>
        <Header />
        <PageHeader />
      </div>
      <CssBaseline/>
  </>
  );
}

export default App;
