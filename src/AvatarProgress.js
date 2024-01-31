// AvatarProgress.js
import React from 'react';


const AvatarProgress = ({nome, avatar,percentualFala}) => {
  const percFala = percentualFala.toFixed(0) 
  return (
    <div className="avatar-progress-container">
      <img src={avatar} alt="Avatar" className="avatar" />
      <div className="progress-bar" style={{ width: `${percFala}%` }} />
      <div className="avatar-name">{nome}</div>
    </div>
  );
};

export default AvatarProgress;