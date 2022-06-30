import classNames from 'classnames/bind';
import styles from'./Nav.module.scss'
const cx = classNames.bind(styles);

function Nav({Link, NavLink}) {
    return ( 
    <div className={cx("topnav")}>
        <NavLink activeClassName={cx("active")} to="/" exact>      Home</NavLink>
        <NavLink activeClassName={cx("active")} to="/todos">   Todo App</NavLink>
        <NavLink activeClassName={cx("active")} to="/timer">  Timer App</NavLink>
        <NavLink activeClassName={cx("active")} to="/blog">    Blog App</NavLink>
        <NavLink activeClassName={cx("active")} to="/secret">Secret App</NavLink>
    </div> );
}
export default Nav;