import { BrowserRouter,Switch ,Route,Link} from"rect-router-dom";
  // IMPORT COMPNENTS
  import Home from "./components/Home";
  import Login from "./components/Login";
  

  // IMPORT CSS
  import"./App.css";
  const App =() => {

  return(
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
    <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/login" component={Login}/>
<Route exact path="*"  component={ Error404}/>
    </Switch>
    </BrowserRouter>
  );
  };
  export default App;