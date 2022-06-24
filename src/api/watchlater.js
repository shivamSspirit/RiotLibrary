import axios from 'axios'

const watchLaterUrl = '/api/user/watchlater';
const encodedToken = localStorage.getItem('token')

// get watch later videos

export async function getwatchLater() {
    try {
        const response = await axios.get(`/api/user/watchlater`, { headers: { encodedToken } });
        return response;
    } catch (error) {
        console.log(error)
    }
}

// post watch later video

export async function postwatchVideo(watchlatervideo) {
    try {
        const response = await axios.post(watchLaterUrl, { data: watchlatervideo }, { headers: { encodedToken } });
        return response;
    } catch (error) {
        console.log(error)
    }
}


// delete watched video


export async function deletewatchVideo(watchlater) {
    try {
        const response = await axios.delete(`/api/user/watchlater/${watchlater}`, { headers: { encodedToken } })
        return response;
    } catch (error) {
        console.log(error)
    }
}