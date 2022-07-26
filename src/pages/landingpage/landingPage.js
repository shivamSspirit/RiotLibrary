import React,{useEffect} from 'react'
import * as  categoryApi from '../../api/category'
import Header from '../../components/header/Header'
import Land from '../../components/land/Land'
import Card from '../../components/sections/categorySection/Card'
import { useGlobal } from '../../context/GlobalContext'
import { ScrollToTop } from '../../components/scrolltotop/ScroolTotop'
import { ToastContainer } from 'react-toastify'
import Loader from '../../components/Loader/Loader'
 import './landing.css'
function LandingPage() {
    const { globalVidCategory,loaderState,setLoaderState ,setGlobalVidCategory} = useGlobal();


    useEffect(() => {
		const fetchcate = async () => {
			setLoaderState(true)
			const response = await categoryApi?.getCategoryList();
			if (response) {
				setLoaderState(false)
				setGlobalVidCategory(response?.data?.categories)
			}
		}
		fetchcate()
	}, [])

    return (
        <div className='main-land'>
            <ScrollToTop/>
            <Header />
            <Land />
            <div className='main-category-container'>
            {loaderState?<Loader/>:<Card Videoscatee={globalVidCategory} />}  
            </div>
        </div>
    )
}

export default LandingPage
