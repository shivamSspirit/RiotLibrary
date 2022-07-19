
import axios from 'axios'

const authorization = localStorage.getItem('token')
const likesUrl = '/api/user/likes'


// get liked videos

export const getLikedList = async () => {
    try {
        const response = await axios.get(likesUrl,  { headers:  {authorization:authorization}   })
        return response;
    } catch (error) {
        console.error(error);
    }
}


// post like video

export const postLikedVideo = async (likedVideo) => {
    try {
        const response = await axios.post(likesUrl, { likedVideo },  { headers:  {authorization:authorization}   })
        return response;
    } catch (error) {
        console.log(error)
    }
}

// delete liked video


export const deleteLikedVideo = async (likedtodeleteVideo) => {
    try {
        const response = await axios.delete(`${likesUrl}/${likedtodeleteVideo}`,  { headers:  {authorization:authorization}   })
        return response;
    } catch (error) {
        console.log(error)
    }
}

