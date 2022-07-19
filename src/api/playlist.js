import axios from 'axios'

const playListUrl = '/api/user/playlists';
const authorization = localStorage.getItem('token')

// console.log('token',authorization)

// get playlist videos

export const getPlayList = async () => {
  try {
    const response = await axios.get(playListUrl, { headers:  {authorization:authorization}  })
    console.log('resjdskfjdskjkrishannnnnnsss', response)
    return response;
  } catch (error) {
    console.error("getPlaylistfromServer : Error in getting playlist");
  }
}

// post playlist video

export const postPlayList = async (playlist) => {
  try {
    const response = await axios.post("/api/user/playlists", { playlist },
      { headers: { authorization }, }
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
    const response = await axios.delete(`${playListUrl}/${playlistId}`, { headers:  {authorization:authorization}  })
    return response;
  } catch (error) {
    console.log('in delete', error)
  }
}

// get single playlist

export const getSingleplayList = async (playlistId) => {
  try {
    const response = await axios.get(`${playListUrl}/${playlistId}`, { headers:  {authorization:authorization}  })
    return response
  } catch (error) {
    console.log('getting single playsit', error)
  }
}

// post single playlist
//  This API call adds a new video to the playlist of the user in the db.

export const postSingleplayList = async (playlistId, video) => {
  try {
    const response = await axios.post(`${playListUrl}/${playlistId}`, { data: { video } }, { headers:  {authorization:authorization}  })
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
    const response = axios.delete(`${playListUrl}/${playlistId}/${videoId}`, { headers:  {authorization:authorization}  })
    return response
  } catch (error) {
    console.log('in delete dingle video', error)
  }
}


