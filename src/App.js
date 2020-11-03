import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import WishListItem from './components/WishListItem';
import GlobalStyle from './GlobalStyle';
import Welcome from './pages/Welcome';
import Add from './pages/Add';
import WishList from './pages/WishList';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <WishListItem title="René" />
          <Button>+</Button>
        </Route>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/wishlist">
          <WishList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
