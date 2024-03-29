import axios from 'axios'

const watchLaterUrl = '/api/user/watchlater';

// get watch later videos

export async function getwatchLater() {
    try {
        const response = await axios.get(`/api/user/watchlater`, { headers: { authorization: localStorage.getItem('token') } })
        return response;
    } catch (error) {
        console.error(error)
    }
}

// post watch later video
export async function postwatchVideo(watchlatervideo) {
    try {
        const response = await axios.post(watchLaterUrl, { data: watchlatervideo }, { headers: { authorization: localStorage.getItem("token") } });
        return response;
    } catch (error) {
        console.error(error)
    }
}


// delete watched video


export async function deletewatchVideo(watchlater) {
    try {
        const response = await axios.delete(`/api/user/watchlater/${watchlater}`, { headers: { authorization: localStorage.getItem('token') } })
        return response;
    } catch (error) {
        console.error(error)
    }
}