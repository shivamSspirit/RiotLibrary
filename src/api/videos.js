import axios from 'axios'

const VideoUrl = '/api/videos';


export function getVideoList() {
	return axios.get(`${VideoUrl}`,(res)=>{
        console.log(res);
    });
}

export function getSingleVideo(videoId) {
	return axios.get(`${'/api/video'}/${videoId}`,(res)=>{
        console.log(res)
    }); 
}

// export function getPagesVideos(pageNum){
//     console.log('feeed',pageNum)
//     return axios.get(`${'/api/videos'}/${pageNum}`,(res)=>{
//         console.log(res)
//     })
// }




