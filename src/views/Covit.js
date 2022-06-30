
import useFetch from '../customize/fetch';
import moment from 'moment';
import { memo } from 'react';

import classNames from 'classnames/bind';
import styles from'../App.module.scss'
const cx = classNames.bind(styles);

function Covit() { 

    let d = new Date();
    var date = `${d.getFullYear()}-${d.getMonth()+ 1}-${d.getDate()}`
    var priorDate = `${d.getFullYear()}-${d.getMonth()+ 1}-${d.getDate()-20}`

    const { data: dataCovit , isLoading, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}T00%3A00%3A00Z&to=${date}T00%3A00%3A00Z`)
    return ( 
        <div className={cx("list-table")}>           
            <h2>Danh sách tình hình Covit 19 tại Việt Nam </h2> <br/>   
            <h4>Tính từ {priorDate} đến {date}</h4> 

            <table>
                <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Date</th>
                    </tr>
                        {isLoading === false && dataCovit && dataCovit.length > 0 && 
                            dataCovit.reverse().map((covit, index) => {
                                return (                                
                                    <tr key={covit.ID}>
                                        <td>{index}</td>
                                        <td>{covit.Confirmed}</td>
                                        <td>{covit.Active}</td>
                                        <td>{covit.Deaths}</td>
                                        <td>{covit.Recovered}</td>
                                        <td>{moment(covit.Date).format('DD/MM/YYYY')}</td>
                                    </tr>)
                            })
                        }
                        {isLoading === true && isError === false && <tr><td>Loading...</td></tr>  }
                        {isError !== false && <tr><td>{isError}</td></tr>  }
                </tbody>
            </table>
        </div>
    )
}

export default memo(Covit);