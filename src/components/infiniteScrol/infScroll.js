import React, { useEffect, useState } from 'react'
import './infscroll.css'
import { useGlobal } from '../../context/GlobalContext';
import * as VideoApis from '../../api/videos'


function ScrollComponent() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(0);
  const [prevY, setPrevy] = useState(0);

  // const { globalVideos } = useGlobal()

  const handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    if (prevY > y) {
      const lastvideo = globalVideos[globalVideos.length - 1];
      const curPage = lastvideo.albumId;
      VideoApis?.getPagesVideos(curPage)?.then(res => setVideos(res?.data?.videos))
      setpage(curPage);
    }
    setPrevy(y);
  }

  useEffect(() => {

    VideoApis?.getPagesVideos(page)?.then(res => setVideos(res?.data?.videos))

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    let observer = new IntersectionObserver(
      handleObserver,
      options
    );
    observer.observe(loadingRef);
  }, [page])

  return (
    <div className="container">
      {videos && videos.map((item, idx) => (
        <div>
          {idx}
        </div>
      ))}
    </div>
  );

}

export default ScrollComponent;




