import React, { useState, useContext } from "react";

export const Context = React.createContext("defaultContext");


const GlobalContext = (props) => {
	const [globalStateProperties, setglobalStateProperties] = useState(null);  // object contains multiple global state variable
	const [globalVideos, setGlobalVideos] = useState(null);
	const [globalVidCategory, setGlobalVidCategory] = useState(null);
	const [curretcategory, setCurrentCategory] = useState()
	const [loaderState, setLoaderState] = useState(false)
	const [openmodal, setModalOpen] = useState(false);


	const setDynamicProperties = (name, value) => {
		setglobalStateProperties({ ...globalStateProperties, [name]: value });   // set dynamic properties with this
	};

	let contextValue = {
		globalStateProperties,
		setDynamicProperties,
		globalVideos,
		globalVidCategory,
		curretcategory, setCurrentCategory,
		loaderState, setLoaderState,
		setGlobalVidCategory,
		setGlobalVideos,
		openmodal,
		setModalOpen
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