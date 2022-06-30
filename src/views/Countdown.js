import React from "react";
import { useState,useEffect} from 'react';


class Countdown extends React.Component {
    
    state = {
        count: 60
    }

    // Sau khi component này được render componentDidMount này sẽ được thực thi
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }


    // Được gọi ngay sau render() từ lần render thứ 2 trở đi.Đây cũng là 1 cơ hội để thao tác với các phần tử DOM bằng JS.
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count && this.state.count === 0) {
            if(this.timer) clearInterval(this.timer);
        }
    }



    render(){
        return (
            <h2>{this.state.count}</h2>
        )
    }
}




function NewCoundown() {

    const [count, setCount] = useState(60) 

    useEffect(() => {
        if(count === 0){
            return
        }

        var timer = setInterval(() =>{
            setCount(count - 1);
        },1000)

        return () => {
            clearInterval(timer)
        }
    },[count])

    return ( <h2>{count}</h2> );
}

export { NewCoundown, Countdown }