import axios from 'axios'

const historyUrl = '/api/user/history';
const authorization = localStorage.getItem('token')


// get history 

export async function getHistoryList() {
    try {
        const response = await axios.get(historyUrl, { headers: { authorization: localStorage.getItem("token") } })
        return response;
    } catch (error) {
        console.error(error);
    }
}

// post history video

export async function postHistory(video) {
    try {
        const response = await axios.post(historyUrl,{ video }, { headers: { authorization: localStorage.getItem("token") } })
        return response
    } catch (error) {
        console.error(error)
    }
}


// delete HISTORY video


export async function deleteHistoryVideo(videoId) {
    try {
        const response = await axios.delete(`${historyUrl}/${videoId}`, { headers: { authorization: localStorage.getItem("token") } })
        return response;
    } catch (error) {
        console.error(error)
    }
}


// delete all history

export async function deleteHistoryVideos() {
    try {
        const response = await axios.delete(`${historyUrl}/all`, { headers: { authorization: localStorage.getItem("token") } })
        return response
    } catch (error) {
        console.error(error)
    }
}

