import React from "react";
import {useParams} from "react-router-dom";
import {NavLink} from 'react-router-dom';
import useFetch from '../customize/fetch';

import classNames from 'classnames/bind';
import styles from'./DetailBlog.module.scss'
const cx = classNames.bind(styles);

function DetailBlog() {
    let { id } = useParams();

    const { data: dataDetailBlog , isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    return (
        <>  
            <button className={cx("btn")}>{<NavLink to="/blog" exact>COME BACK PAGE</NavLink>}</button>
            <div className={cx("info-Detail")}>
                {isLoading === false && dataDetailBlog && <>
                    <h1>{dataDetailBlog.id}. {dataDetailBlog.title}</h1>
                    <h2>{dataDetailBlog.body}</h2>
                </>}
            </div>

            {isLoading === true && isError === false && <span className={cx("Loading")}>Loading...</span>  }
            {isError !== false && <span className={cx("Loading error")}>{isError}</span>  }
        </>
    )
}

export default DetailBlog;