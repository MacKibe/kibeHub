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
    <div className="experience">
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
              <h5>({job.duration})</h5>
            </div>
          ))}
        </div>

        {/* Right section: Job description */}
        <div className="job-description">
          {selectedJob ? (
            <>
              <h4>
                {selectedJob.position} - {selectedJob.company}
              </h4>
              <p>{selectedJob.description}</p>
              {selectedJob.roles_responsibilities && (
                <ul>
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
    </div>
  );
};

export default WorkExperience;
