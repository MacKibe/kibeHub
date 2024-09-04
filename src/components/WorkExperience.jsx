import { useState, useEffect } from "react";

const WorkExperience = () => {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    fetch("/data/work.json")
      .then((response) => response.json())
      .then((data) => setWorkData(data.work))
      .catch((error) => console.error("Error fetching the work data:", error));
  }, []);
  return (
    <div className="work-experience">
      {workData.map((job, index) => (
        <div key={index} className="job">
          <div>{job.duration}</div>
          <div>
            <h3>{job.position}</h3>
            <h3>
              {job.company}
            </h3>
            <p>{job.description}</p>
            {job.roles_responsibilities && (
              <ul>
                {job.roles_responsibilities.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            )}
            {job.notable_achievements && (
              <ul>
                {job.notable_achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
