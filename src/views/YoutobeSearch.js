
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'







import classNames from 'classnames/bind';
import styles from'./YoutobeSearch.module.scss'
const cx = classNames.bind(styles);


function YoutobeSearch() {

    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')


    useEffect(()=> {
    
    },[])



    const handleSearchYoutobe = async (e) => {
        e.preventDefault()
        
        await axios({
            "method": "GET",
            "url": 'https://youtube.googleapis.com/youtube/v3/search',
            "params":{
                'part':'snippet',
                'maxResults':'20',
                'key':'AIzaSyBQOBHnnECzByOWitAER4vadPozJw4tjBo',
                'type': 'video',
                'q':query
            }
        })

        .then((res) => {
            let arrData = res.data.items
            let newData = arrData.map((elment, index) => {
                return {
                    id : elment.id.videoId,
                    title: elment.snippet.title,
                    createdAt: elment.snippet.publishedAt,
                    author: elment.snippet.channelTitle,
                    description: elment.snippet.description,
                    imgDefault: elment.snippet.thumbnails.medium.url
                }
            })
            if(newData) setVideos(newData)
        })
        .catch((error) => {
            console.log('ẻer',error)
        })
    }




    return (
        <>

            <div className={cx("topnav")}>
                <div className={cx("search-container")}>
                    <form action="">
                    <input type="text" value={query} placeholder="Search.." name="search" onChange={(e) => setQuery(e.target.value)}/>
                    <button type="submit" onClick={(e) => handleSearchYoutobe(e)}>Search</button>
                    </form>
                </div>
            </div> 


            {videos && videos.length > 0 && 
                videos.map((elment, index) => {
                    return (
                        <div key={index} className={cx("yt-result")}>
                            <div className={cx("left")}>
                                <iframe  width="100%" height="100%" 
                                    frameBorder="0" 
                                    src={`https://www.youtube.com/embed/${elment.id}` }
                                    title=" " 
                                    allow=" " 
                                    allowFullScreen>
                                </iframe>
                            </div>
            
                            <div className={cx("right")}>
                                <div className={cx("title")}><p>{elment.title}</p></div>
                                <div className={cx("created-at")}><p>{moment(elment.createdAt).format("DD-MM-YYYY HH:mm:ss A")}</p></div>
                                <div className={cx("author")}><p>{elment.author}</p></div>
                                <div className={cx("description")}><p>{elment.description}</p></div>
                            </div>
                        </div>
                    )
                })
            }


  


        </>
    )
}

export default YoutobeSearch;

/*

{
    "kind": "youtube#searchListResponse",
    "etag": "oFP2wXta46bp8m589bBxAbZ3u_Q",
    "nextPageToken": "CAUQAA",
    "regionCode": "VN",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "HCTdCrGLE0CskTa19yEiScvUWdM",
        "id": {
          "kind": "youtube#video",
          "videoId": "dud9WrkEAiY"
        },
        "snippet": {
          "publishedAt": "2022-06-27T11:05:13Z",
          "channelId": "UCNSCWwgW-rwmoE3Yc4WmJhw",
          "title": "F8 vs Adamo | 300 Bài Code Thiếu Nhi",
          "description": "Phân đoạn: 00:00 - Khởi hành 00:52 - Tới Adamo 01:20 - Code thiếu nhi battle 03:44 - Câu hỏi số 1 05:22 - Đáp án câu số 1 ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dud9WrkEAiY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dud9WrkEAiY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dud9WrkEAiY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "F8 Official",
          "liveBroadcastContent": "none",
          "publishTime": "2022-06-27T11:05:13Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "yuIiarYIv2_ccy2FN_ez_LDnAo4",
        "id": {
          "kind": "youtube#video",
          "videoId": "LQiX-9w3UdM"
        },
        "snippet": {
          "publishedAt": "2022-06-28T11:00:08Z",
          "channelId": "UCNSCWwgW-rwmoE3Yc4WmJhw",
          "title": "Setup Môi Trường Chạy Dự Án Của F8",
          "description": "XEM LỘ TRÌNH HỌC: https://fullstack.edu.vn/learning-paths #hoclaptrinh #javascript #html_css #nodejs #restful_api #backend ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LQiX-9w3UdM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LQiX-9w3UdM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LQiX-9w3UdM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "F8 Official",
          "liveBroadcastContent": "none",
          "publishTime": "2022-06-28T11:00:08Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "a0LOGeLrm0GKKTV9Bq73OZQTvwU",
        "id": {
          "kind": "youtube#video",
          "videoId": "FpGPFALaD-M"
        },
        "snippet": {
          "publishedAt": "2022-04-19T13:54:21Z",
          "channelId": "UCNSCWwgW-rwmoE3Yc4WmJhw",
          "title": "F8 &quot;Sập&quot; Có Phải Do Bị &quot;Hack&quot;? | Tấn Công DDOS là gì?",
          "description": "100mbps, 200mbps hay 500mbps mà mình nhắc tới trong video gọi là \"megabit\", đây là \"tốc độ mạng\" các bạn nhé. Trong video ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FpGPFALaD-M/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FpGPFALaD-M/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FpGPFALaD-M/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "F8 Official",
          "liveBroadcastContent": "none",
          "publishTime": "2022-04-19T13:54:21Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "RtPxFNG3zDcmUwPcLXlATt0Yhrw",
        "id": {
          "kind": "youtube#video",
          "videoId": "IF1dd3KV84w"
        },
        "snippet": {
          "publishedAt": "2020-08-17T17:00:03Z",
          "channelId": "UCNSCWwgW-rwmoE3Yc4WmJhw",
          "title": "8 lời khuyên giúp học lập trình tại F8 hiệu quả hơn!",
          "description": "Gia nhập F8: http://fullstack.edu.vn - Học HTML, CSS toàn tập: http://bit.ly/2LWomwn - Học Javascript cơ bản - nâng cao: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/IF1dd3KV84w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/IF1dd3KV84w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/IF1dd3KV84w/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "F8 Official",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-17T17:00:03Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "i9NJn-nFWBMO_gwpkBzUKXCLWqo",
        "id": {
          "kind": "youtube#video",
          "videoId": "DpvYHLUiZpc"
        },
        "snippet": {
          "publishedAt": "2020-12-26T02:00:00Z",
          "channelId": "UCNSCWwgW-rwmoE3Yc4WmJhw",
          "title": "Phương pháp HỌC LẬP TRÌNH của Sơn Đặng! | Lộ trình học lập trình | Phương pháp học lập trình",
          "description": "Video mang quan điểm và trải nghiệm của cá nhân mình, miễn bàn chuyện đúng/sai. Những gì phù hợp với bạn thì bạn áp dụng, ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DpvYHLUiZpc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DpvYHLUiZpc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DpvYHLUiZpc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "F8 Official",
          "liveBroadcastContent": "none",
          "publishTime": "2020-12-26T02:00:00Z"
        }
      }
    ]
  }
  
  */