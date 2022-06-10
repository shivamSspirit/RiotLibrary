const historyUrl = '/api/user/history';
import axios from 'axios'
const encodedToken = localStorage.getItem('token')


// get history 

export function getHistoryList() {
  return axios({
        method: 'get',
        url: historyUrl,
        headers:{
            authorization: encodedToken
        }
      })
}

// post history video

export function postHistory(historyVideo){
    return axios({
        method: 'post',
        url: historyUrl,
        headers:{
            authorization: encodedToken
        },
        data:historyVideo
      })
}


// delete liked video


export function deleteHistoryVideo(videoId){
    return axios({
        method: 'delete',
        url: `${historyUrl}/${videoId}`,
        headers:{
            authorization: encodedToken
        }
      })
}


// delete all history

export function deleteHistoryVideos(){
    return axios({
        method: 'delete',
        url: `${historyUrl}/all`,
        headers:{
            authorization: encodedToken
        }
      })
}

