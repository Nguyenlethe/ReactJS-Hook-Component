
import Nav from './views/Nav';
import Todo from './views/Todo';
import Covit from './views/Covit';
import Blog from './views/Blog';
import {Countdown,  NewCoundown} from './views/Countdown';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
import DetailBlog from './views/DetailBlog';
import NotFound from './views/NotFound';


import classNames from 'classnames/bind';
import styles from'./App.module.scss'
import YoutobeSearch from './views/YoutobeSearch';
const cx = classNames.bind(styles);


function App() {
  return (
      <Router>
        <Nav NavLink={NavLink} Link={Link}/>

        <Switch>

          <Route path="/" exact>
            <Covit/> 
          </Route>

          <Route path="/todos">
            <Todo/>
          </Route>

          <Route path="/timer">
            <div className={cx("List-countdown")}>
              <Countdown/>
              <hr/>
              <NewCoundown/>
            </div>
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>

          <Route path="/blog/:id">
            <DetailBlog/>
          </Route>

          <Route path="/404">
            <NotFound/>
          </Route>

          <Route path="/secret">
            <YoutobeSearch/>
          </Route>

         
          <Route path="*">
            <NotFound/>
          </Route>



        </Switch>
      </Router>
  );
}

export default App;
