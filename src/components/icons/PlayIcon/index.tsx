import React from 'react';


function PlayIcon() {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="5.92 5.92 20.16 20.19"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path> </g></svg>
  )
}


// Wrap the PlayIcon component in React.memo as it is a pure component
export default React.memo(PlayIcon);