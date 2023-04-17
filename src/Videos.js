import React from 'react';
import ReactPlayer from 'react-player/youtube';

function Videos() {
    return (
        <div>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=eV6lTEY95yY'
            controls
            
            />
        </div>
    )
}

export default Videos;