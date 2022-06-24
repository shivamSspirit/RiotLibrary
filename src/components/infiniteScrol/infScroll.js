import React,{useState} from 'react'
import './infscroll.css'



export const useInfiniteLoading = () => {
  const [items, setItems] = useState([]);

  return {
    items
  };
}

function InfiniteScroll() {
  return (
    <div>
      
    </div>
  )
}

export default InfiniteScroll
