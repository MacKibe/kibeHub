import { useState, useEffect } from "react";

const WorkExperience = () => {
  const [workData, setWorkData] = useState([]);
  const [selectedJob, setSelectedJob] = useState([]);

  useEffect(() => {
    fetch("/data/work.json")
      .then((response) => response.json())
      .then((data) => {
        setWorkData(data.work);
        setSelectedJob(data.work[0]);
      })
      .catch((error) => console.error("Error fetching the work data:", error));
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <section className="experience min-width">
      <h2>Where I've Worked.</h2>
      <div className="work-experience">
        {/* Left section: Job list */}
        <div className="job-list">
          {workData.map((job, index) => (
            <div
              key={index}
              className={`job-item ${selectedJob === job ? "job-item-active" : ""}`}
              onClick={() => handleJobClick(job)}
            >
              <h3>{job.shortName}</h3>
            </div>
          ))}
        </div>

        {/* Right section: Job description */}
        <div className="job-description">
          {selectedJob ? (
            <>
              <h4>
                {selectedJob.position} <strong>@ {selectedJob.company}</strong>
              </h4>
              <h5>Duration : <strong>{selectedJob.duration}</strong></h5>
              <p><strong>Description.</strong></p>
              <p>{selectedJob.description}</p>
              {selectedJob.roles_responsibilities && (
                <ul>
                  <p><strong>Roles and responsibilities.</strong></p>
                  {selectedJob.roles_responsibilities.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              )}
              {selectedJob.notable_achievements && (
                <ul>
                  {selectedJob.notable_achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <p>Please select a job to view its details</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
