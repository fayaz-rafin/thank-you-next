import React from "react";

function Playlist() {
    return (
        <div className="Playlist" style={{display: "inline"}}>
            <iframe src="https://open.spotify.com/embed/playlist/5LJRoEz90OZvqJyhqeUUUn?utm_source=generator" 
            width="25%" 
            height="500" 
            frameBorder="50" 
            allowfullscreen=""             
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>             
        </div>
    );
}

export default Playlist;