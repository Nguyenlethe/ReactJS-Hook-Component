import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function Covit() {

    const [dataCovit, setDataCovit] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)



    

    useEffect( () => {
        async function fetchData() {
            try {
                const res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-10T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');
                let data = res && res.data ? res.data : [];
                if(data && data.length > 0 ){
                    data.map(function(item){
                        item.Date = moment(item.Date).format('DD/MM/YYYY')
                        return item
                    })
                    data = data.reverse()
                    setDataCovit(data)
                    setIsLoading(false)
                    setIsError(false)
                }
            }
            catch(error) {
                if(error){
                    setTimeout(()=> {
                        setIsLoading(null)
                        setIsError(error.message)
                    },4000)
                }
            }
        }
        fetchData()
    },[])


    return ( 
        <div className="list-table">
            <table>
                <tbody>
                    <tr>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Date</th>
                    </tr>
                        {isLoading === false && dataCovit && dataCovit.length > 0 && 
                            dataCovit.map((covit, index) => {
                                return (                                
                                    <tr key={covit.ID}>
                                        <td>{covit.Confirmed}</td>
                                        <td>{covit.Active}</td>
                                        <td>{covit.Deaths}</td>
                                        <td>{covit.Recovered}</td>
                                        <td>{covit.Date}</td>
                                    </tr>)
                            })
                        }
                        {isLoading === true && isError === false && <tr><td>Loading...</td></tr>  }
                        {isError !== false && <tr><td>{isError}</td></tr>  }
                </tbody>
            </table>
        </div>
    );
}

export default Covit;