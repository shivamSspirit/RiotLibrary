import axios from 'axios'

const playListUrl = '/api/user/playlists';


// get playlist videos

export const getPlayList = async () => {
  try {
    const response = await axios.get(playListUrl, { headers: { authorization: localStorage.getItem("token") } })
    return response;
  } catch (error) {
    console.error(error);
  }
}

// post playlist video

export const postPlayList = async (playlist) => {
  try {
    const response = await axios.post("/api/user/playlists", { playlist },
      { headers: { authorization: localStorage.getItem("token") }, }
    );
    if (response.status === 201) {
      return response.data;
    } else throw new Error();
  } catch (e) {
    console.error(e);
  }
};

// delete playlist video


export const deleteplayList = async (playlistId) => {
  try {
    const response = await axios.delete(`${playListUrl}/${playlistId}`, { headers: { authorization: localStorage.getItem("token") } })
    return response;
  } catch (error) {
    console.error(error)
  }
}

// get single playlist

export const getSingleplayList = async (playlistId) => {
  try {
    const response = await axios.get(`${playListUrl}/${playlistId}`, { headers: { authorization: localStorage.getItem("token") } })
    return response
  } catch (error) {
    console.error(error)
  }
}

// post single playlist
//  This API call adds a new video to the playlist of the user in the db.

export const postSingleplayList = async (playlistId, video) => {
  try {
    const response = await axios.post(`${playListUrl}/${playlistId}`, { data: { video } }, { headers: { authorization: localStorage.getItem("token") } })
    if (response.status === 201) {
      return response
    } else {
      console.log(response)
    }
  } catch (error) {
    throw new Error(error)
  }
}

// delete single playlist videos


export const deleteSingleplayList = async (playlistId, videoId) => {
  try {
    const response = axios.delete(`${playListUrl}/${playlistId}/${videoId}`, { headers: { authorization: localStorage.getItem("token") } })
    return response
  } catch (error) {
    console.error('in delete dingle video', error)
  }
}


