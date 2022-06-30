

import { useState} from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from'./AddNewBlog.module.scss'
const cx = classNames.bind(styles);


function AddNewBlog({handleClose, newData}) {
    const [title, setTitle] = useState('')
    const [content, setcontent] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title && content){
            let data = {
                title: title, 
                body: content,
                userId:1
            }

            let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`,data)
            if(res && res.data){
                handleClose()
                newData.unshift(res.data)
            }
        }
    }



    return (
        <div className={cx("wraper")}>
            <form action="">
                <label htmlFor="fname">Title</label>
                <input value={title}   onChange={(e)=> setTitle(e.target.value)} type="text" id="fname" name="firstname" placeholder="Your title.."/>
                <label htmlFor="lname">Content</label>
                <input value={content} onChange={(e)=> setcontent(e.target.value)} type="text" id="lname" name="lastname" placeholder="Your content.."/>
                <input type="submit" value="Submit"  onClick={(e) => handleSubmit(e)}/>
            </form>
        </div>
    )
}

export default AddNewBlog;