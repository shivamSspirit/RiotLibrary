import axios from 'axios'

const historyUrl = '/api/user/history';
const encodedToken = localStorage.getItem('token')


// get history 

export async function getHistoryList() {
    try {
        const response = await axios.get(historyUrl, { headers: { encodedToken } })
        return response;
    } catch (error) {
        console.error(error);
    }
}

// post history video

export async function postHistory(historyVideo) {
    try {
        const response = await axios.post(historyUrl, { headers: { encodedToken } }, { historyVideo })
        return response
    } catch (error) {
        console.error(error)
    }
}


// delete HISTORY video


export async function deleteHistoryVideo(videoId) {
    try {
        const response = await axios.delete(`${historyUrl}/${videoId}`, { headers: { encodedToken } })
        return response;
    } catch (error) {
        console.error(error)
    }
}


// delete all history

export async function deleteHistoryVideos() {
    try {
        const response = await axios.delete(`${historyUrl}/all`, { headers: { encodedToken } })
        return response
    } catch (error) {
        console.error(error)
    }
}

