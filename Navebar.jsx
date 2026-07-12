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
<ul className="nav-links">
    <li><a href="#home">home</a></li>
<li><a href="#home">Dashboard</a></li>
<li><a href="#home">Symptons</a></li>
<li><a href="#home">Profile</a></li>
</ul></div>
</div>
  </nav>

  )
}

export default Nav