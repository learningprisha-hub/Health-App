

function Dashboard({profile,history,onOpenHistory,onGetStarted}) {
 // const latest=history[0]
  return (
   <section className="py-5 bg-light" id="dashboard">

    <div className="container">
      <div className="justify-content-between d-flex align-items-end mb-4 flex-wrap gap-2">
        <div className="">
          <h2 className="fw-bold mb-1">Your Dashboard</h2>
          <p className="text-secondary">
            {profile?`Welcome,${profile.name}`:"Set up your profile to start tracking your Health check ins"}
          </p>
        </div>
        <button className="btn-primary btn rounded-pill" type="button">New Check In</button>
      </div>
    </div>
   </section>
  )
}

export default Dashboard