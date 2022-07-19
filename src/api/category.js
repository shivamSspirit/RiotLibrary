import axios from 'axios'

const CategoryUrl = '/api/categories';

export function getCategoryList() {
	return axios.get(`${CategoryUrl}`,(res)=>{
        console.log(res);
    });
}

export function getSingleCategory(CategoryId) {
	return axios.get(`${`/api/category`}/${CategoryId}`,(res)=>{
        console.log(res)
    }); 
}