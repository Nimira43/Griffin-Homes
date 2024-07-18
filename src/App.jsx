const App = () => {
  return (
    <>
      <nav className="bg-[#111] border-b border-[#ff4500]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a href="/index.html" className="flex flex-shrink-0 items-center mr-4">
                <img src="../images/logo.png" alt="Jobcoder" className="h-10 w-auto" />
                <span className="hidden md:block text-2xl ml-2 text-[#ff4500]">Jobcoder</span>
              </a>
              <div className="md:ml-auto">
                <div className="flex-space-x-2">
                  <a href="/index.html" className="text-[#ff4500]  hover:text-[#ffd700] px-4 py-2">Home</a>
                  <a href="/jobs.html" className="text-[#ff4500] hover:text-[#ffd700] px-3 py-2">Jobs</a>
                  <a href="/add-job.html" className="text-[#ff4500] hover:text-[#ffd700] px-3 py-2">Add Job</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <section className="bg-[#eee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl text-[#111] sm:text-5xl md:text-6xl">
              Find the Right Coding Job
            </h1>
            <p className="my-4 text-xl text-[#ff4500]">
              Discover the many opportunities waiting for you. 
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#ccc]">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-[#ff4500] text-[#eee] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Developers</h2>
              <p className="mt-2 mb-4">
                Browse our Web Dev jobs and start your career today
              </p>
              <a href="/jobs.html" className="inline-block bg-[#111] text-[#eee] rounded-lg px-4 py-2 hover:text-[#ffd700]">
                Browse Jobs
              </a>
            </div>
            <div className="bg-[#111] text-[#eee] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <a href="/add-job.html" className="inline-block bg-[#ff4500] text-[#eee] rounded-lg px-4 py-2 hover:text-[#ffd700]">
                Add Job
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>

      </section>

      <section>

      </section>

    </>
  )
}

export default App

