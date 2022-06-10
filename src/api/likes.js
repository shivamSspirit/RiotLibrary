const likesUrl = '/api/user/likes';
import axios from 'axios'
const encodedToken = localStorage.getItem('token')


// get liked videos

export function getLikedList() {
  return axios({
        method: 'get',
        url: likesUrl,
        headers:{
            authorization: encodedToken
        }
      })
}

// post like video

export function postLikedVideo(likedVideo){
    return axios({
        method: 'post',
        url: likesUrl,
        headers:{
            authorization: encodedToken
        },
        data:likedVideo
      })
}


// delete liked video


export function deleteLikedVideo(likedtodeleteVideo){
    return axios({
        method: 'delete',
        url: `${likesUrl}/${likedtodeleteVideo}`,
        headers:{
            authorization: encodedToken
        }
      })
}

