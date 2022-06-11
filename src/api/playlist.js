import axios from 'axios'

const playListUrl = '/api/user/playlists';

const encodedToken = localStorage.getItem('token')

// get playlist videos

export const getPlayList = async () => {
  try {
    const response = await axios.get(playListUrl, { headers: { encodedToken } })
    return response;
  } catch (error) {
    console.error("getPlaylistfromServer : Error in getting playlist");
  }
}

// post playlist video

export const postPlayList = async (playlist) => {
  try {
    const response = await axios.post("/api/user/playlists", { playlist },
      { headers: { encodedToken }, }
    );
    if (response.status === 201) {
      return response.data;
    } else throw new Error();
  } catch (e) {
    console.error("addPlaylistToServer : Error in adding playlist", e);
  }
};

// delete playlist video


export const deleteplayList = async (playlistId) => {
  try {
    const response = await axios.delete(`${playListUrl}/${playlistId}`, { headers: { encodedToken } })
    return response;
  } catch (error) {
    console.log('in delete', error)
  }
}

// get single playlist

export const getSingleplayList = async (playlistId) => {
  try {
    const response = await axios.get(`${playListUrl}/${playlistId}`, { headers: { encodedToken } })
    return response
  } catch (error) {
    console.log('getting single playsit', error)
  }
}

// post single playlist
//  This API call adds a new video to the playlist of the user in the db.

export const postSingleplayList = async (playlistId, video) => {
  try {
    const response = await axios.post(`${playListUrl}/${playlistId}`, { data: {video} }, { headers: { encodedToken } })
    return response
  } catch (error) {
    console.log('in adding single playlist')
  }
}

// delete single playlist videos


export const deleteSingleplayList = async (playlistId, videoId) => {
  try {
    const response = axios.delete(`${playListUrl}/${playlistId}/${videoId}`, { headers: { encodedToken } })
    return response
  } catch (error) {
    console.log('in delete dingle video', error)
  }
}


