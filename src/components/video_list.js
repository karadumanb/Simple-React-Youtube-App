import React from 'react';
import VideoListItem from './video_list_item';

 const VideoList = (props) => {
     const videoItems = props.videos.map((item, i)=>{
     return (
            <VideoListItem 
            onVideoSelect = {props.onVideoSelect}
            key={`key-${i}`} 
            video={item}/>
        );
     });
     return (
        <ul className="list-group">
            {videoItems}
        </ul>
     );
 }

 export default VideoList;