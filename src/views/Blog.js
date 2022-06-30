
import useFetch from "../customize/fetch";
import {NavLink} from 'react-router-dom';
import { useState, useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import AddNewBlog from "./AddNewBlog";

import classNames from 'classnames/bind';
import styles from'./Blog.module.scss'
import './Bootstraps.scss'
const cx = classNames.bind(styles);


function Blog() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [newData, setNewData] = useState([])
    const { data: dataBlogs , isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`)

    useEffect(()=> {
        if(dataBlogs && dataBlogs.length > 0){
            let newDataBlogs = dataBlogs.slice(0, 9)
            setNewData(newDataBlogs)
        } 
    },[dataBlogs])
    
    

    return (
        <>
            <button onClick={handleShow} className={cx('Click-add')}>+ Add New Blog</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton><Modal.Title>Add New Blog</Modal.Title></Modal.Header>
                <Modal.Body> 
                    <AddNewBlog newData={newData} handleClose={handleClose}/> 
                </Modal.Body>
            </Modal>
            
            <div className={cx("List-blog")}>
                {isError === false && newData && newData.length > 0 && newData.map((blog, index) => {
                    return (
                    <div key={index} className={cx("blog")}>
                        <h1 className={cx("title")}>{index + 1}.{blog.title}</h1>
                        <h2 className={cx("content")}>{blog.body}</h2>
                        <button><NavLink to={`/blog/${blog.id}`}>Views Detail</NavLink></button> 
                        <button><NavLink to='#/'>Delete</NavLink></button> 
                    </div>)
                })}
                {isLoading === true && isError === false && <span className={cx("Loading")}>Loading...</span>  }
                {isError !== false && <span className={cx("Loading error")}>{isError}</span>  }
            </div>
        </>
    )
}

export default Blog;



