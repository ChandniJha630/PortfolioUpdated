import React from 'react';

export default function Stats() {

  return (
    <div className="stats stats-vertical  shadow mx-5 lg:mx-2">
      <div className="stat" >
        <div className="stat-title" >LeetCode</div>
        <div className="stat-value" >400+</div>
        <div className="stat-desc" >Rank- 1.5 Lakh</div>
      </div>

      <div className="stat" >
        <div className="stat-title" >GFG</div>
        <div className="stat-value" >200+</div>
      </div>

      <div className="stat" >
        <div className="stat-title" >Github</div>
        <div className="stat-value" >45+</div>
        <div className="stat-desc" > Rank- C+ </div>
      </div>
    </div>
  );
}
