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
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
    const { globalVidCategory,loaderState,setLoaderState ,setGlobalVidCategory} = useGlobal();

    const {authToken} = useAuth()

 const navigate =  useNavigate()


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

    // useEffect(()=>{
    //     if(!localStorage.getItem("authToken")){
    //         navigate('/auth/login')
    //     }
    //  },[localStorage.getItem("authToken")])



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
