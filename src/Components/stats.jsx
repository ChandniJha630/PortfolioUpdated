import React from 'react';

export default function Stats() {

  return (
      
    <div className="stats stats-vertical  shadow mx-5 lg:mx-2 bg-gray-900 text-gray-400">
      
      <div className="stat" >
        <div className="stat-title text-gray-400 " >Upcoming SDE Intern</div>
        <div className="stat-value" >Amazon</div>
        <div className="stat-desc text-gray-400" >Jan 2025-June 2025</div>
      </div>

      <div className="stat" >
        <div className="stat-title text-gray-400 " >LeetCode</div>
        <div className="stat-value" >450+</div>
        <div className="stat-desc text-gray-400" >Rank- 1.4 Lakh (Top 4%)</div>
      </div>

      <div className="stat" >
        <div className="stat-title text-gray-400" >GFG</div>
        <div className="stat-value " >200+</div>
      </div>

      <div className="stat" >
        <div className="stat-title text-gray-400" >Github</div>
        <div className="stat-value" >45+</div>
        <div className="stat-desc text-gray-400" > Rank- C+ </div>
      </div>
    </div>
  );
}
