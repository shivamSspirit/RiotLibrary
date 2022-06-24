import axios from 'axios'

const VideoUrl = '/api/videos';


export function getVideoList() {
	return axios.get(`${VideoUrl}`,(req,res)=>{
        console.log(res);
    });
}

export function getSingleVideo(videoId) {
	return axios.get(`${'/api/video'}/${videoId}`,(req,res)=>{
        console.log(res)
    }); 
}




