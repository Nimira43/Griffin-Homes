import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-[#111] border-b border-[#ff4500]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a href="/index.html" className="flex flex-shrink-0 items-center mr-4">
                <img src={ logo } alt="Jobcoder" className="h-10 w-auto" />
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
  )
}

export default Navbar
