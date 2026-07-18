import React from 'react'

function Nav({profile,onOpenProfile,onGetStarted,onNavigate}) {
  return (
  <nav className="navbar navbar-expand-md border-bottom sticky-top">
    <div className="container">
<a className='nav-brand align-item-center gap-2' href="#home" >
<span className="brand-icon">✚</span>
<span className="fw-bold d-sm-inline">Health Companion</span>
</a>
<div className="d-flex align-items-center gap-2 order-md-3">

<button type="button" className="profile-chip d-none d-sm-flex" onClick={onOpenProfile}>
  <span>{profile?profile.avatar:"😊"}</span>
  <span>{profile?profile.name:"set up profile"}</span>
</button>
<button type="button" className="btn btn-primary rounded-pill" onClick={onGetStarted}>
  Get Started
</button>
</div>
<div className="nav-links d-flex gap-3 order-md-2 mx-md-4 mt-2 mt-md-0">
    <li><a href="#home" className='nav-links text-secondary' onClick={(e)=>{e.preventDefault(); onNavigate("home")}}>home</a></li>
<li><a href="#dashboard" className='nav-links text-secondary' onClick={(e)=>{e.preventDefault(); onNavigate("dashboard")}}>Dashboard</a></li>
<li><a href="#about" className='nav-links text-secondary' onClick={(e)=>{e.preventDefault(); onNavigate("about")}}>Profile</a></li>
</div>
</div>
  </nav>

  )
}

export default Nav