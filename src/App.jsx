import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="py-4">
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

      <section className="px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl text-[#111] mb-6 text-center">
            Browse Jobs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#ff4500] rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-[#eee]">Full-Time</div>
                  <h3 className="text-[#111] text-xl">Senior Angular Developer</h3>
                </div>
                <div className="text-[#eee] mb-5">
                  We are seeking a talented Front-End Developer to join our team in Manchester, UK. The ideal candidate will
                  have strong skills in HTML, CSS, and JavaScript...
                </div>
                <h3 className="text-[#111] mb-2">£70K - £80K / Year</h3>
                <div className="border border-[#ffd700] mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-[#111] mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                      Manchester, UK
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-[#111] text-[#eee] hover:text-[#ffd700] px-4 py-2 rounded-lg text-center text-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
  
            <div className="bg-[#111] rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-[#eee]">Full-Time</div>
                  <h3 className="text-[#ff4500] text-xl">Backend Django Developer</h3>
                </div>
                <div className="text-[#eee] mb-5">
                  Join our team as a Back-End    Developer in Barcelona. We are looking for a motivated individual with a passion for backend Django projects.
                </div>
                <h3 className="text-[#ff4500] mb-2">£80K - £90K / Year</h3>
                <div className="border border-[#ffd700] mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-[#ff4500] mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                      Barcelona, Spain
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-[#ff4500] text-[#eee] hover:text-[#ffd700] px-4 py-2 rounded-lg text-center text-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
  
            <div className="bg-[#ff4500] rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-[#eee]">Full-Time</div>
                  <h3 className="text-[#111] text-xl">Senior Laraval Developer</h3>
                </div>
                <div className="text-[#eee] mb-5">
                  Are you passionate about full stack development? Join our team in vibrant London, and work on our exciting Laraval projects that make a difference</div>
                <h3 className="text-[#111] mb-2">£90K - £95K / Year</h3>
                <div className="border border-[#ffd700] mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-[#111] mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                      London, UK
                  </div>
                  <a href="job.html"
                    className="h-[36px] bg-[#111] text-[#eee] hover:text-[#ffd700] px-4 py-2 rounded-lg text-center text-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a href="jobs.html" className="block bg-[#111] text-[#eee] text-center py-4 px-6 rounded-xl hover:text-[#ff4500]">View All
      Jobs</a>
      </section>

    </>
  )
}

export default App

