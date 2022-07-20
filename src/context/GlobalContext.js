import React, { useState, useEffect, useContext } from "react";
import * as VideoApi from '../api/videos'
import * as categoryApi from '../api/category'

export const Context = React.createContext("defaultContext");

const GlobalContext = (props) => {
	const [globalStateProperties, setglobalStateProperties] = useState(null);  // object contains multiple global state variable
	const [globalVideos, setGlobalVideos] = useState(null);
	const [globalVidCategory, setGlobalVidCategory] = useState(null);
	const [curretcategory,setCurrentCategory] = useState()

	// useEffect(()=>{
	// 	const fetchPagedVideos = async()=>{
	// 		const response = await VideoApi?.getPagesVideos(2);
	// 		if(response){
	// 			console.log('datqa from paged',response?.data)
	// 		}
	// 	}
	// 	fetchPagedVideos()
	// },[])

	useEffect(() => {
		const fetchVideo = async () => {
			const response = await VideoApi.getVideoList();
			if (response) {
				setGlobalVideos(response?.data?.videos)
			}
		}
		fetchVideo();
	}, [])

	useEffect(() => {
		const fetchcate = async () => {
			const response = await categoryApi?.getCategoryList();
			if (response) {
				setGlobalVidCategory(response?.data?.categories)
			}
		}
		fetchcate()
	}, [])

	// {
	// 	const fetchCategory = async () => {
	// 		const response = await categoryApi?.getCategoryList();
	// 		if (response) {
	// 			setGlobalVidCategory(response?.data?.categories)
	// 		}
	// 	}
	// 	fetchCategory();
	// }, [])

	const setDynamicProperties = (name, value) => {
		setglobalStateProperties({ ...globalStateProperties, [name]: value });   // set dynamic properties with this
	};

	let contextValue = {
		globalStateProperties,
		setDynamicProperties,
		globalVideos,
		globalVidCategory,
		curretcategory,setCurrentCategory
	};

	return (
		<>
			<Context.Provider value={contextValue}>
				{props.children}
			</Context.Provider>
		</>
	);
};


export default GlobalContext;

export const useGlobal = () => useContext(Context)