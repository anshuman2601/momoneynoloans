import React from 'react';
import ReactPlayer from 'react-player/youtube';

function Videos() {
    return (
        <div>
            <h1>Videos</h1>
            <ReactPlayer url='https://www.youtube.com/watch?v=eV6lTEY95yY' />
        </div>
    )
}

export default Videos;