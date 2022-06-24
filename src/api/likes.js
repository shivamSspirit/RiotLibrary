
import axios from 'axios'
const encodedToken = localStorage.getItem('token')
const likesUrl = '/api/user/likes'


// get liked videos

export const getLikedList = async () => {
    try {
        const response = await axios.get(likesUrl, { headers: { encodedToken } })
        return response;
    } catch (error) {
        console.error(error);
    }
}


// post like video

export const postLikedVideo = async (likedVideo) => {
    try {
        const response = await axios.post(likesUrl, { likedVideo }, { headers: { encodedToken } })
        return response;
    } catch (error) {
        console.log(error)
    }
}

// delete liked video


export const deleteLikedVideo = async (likedtodeleteVideo) => {
    try {
        const response = await axios.delete(`${likesUrl}/${likedtodeleteVideo}`, { headers: { encodedToken } })
        return response;
    } catch (error) {
        console.log(error)
    }
}

