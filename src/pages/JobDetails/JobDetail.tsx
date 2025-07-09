import { Link, useParams } from "react-router-dom";
import { jobsInfo } from "../../data/jobs";
import CompanySite from "../../components/buttons/CompanySite/CompanySite";
import AboutJob from "../../components/AboutJob/AboutJob";
import "./JobDetail.css";
import Jobs from "../../components/Jobs/Jobs";

function JobDetail() {
  const { id } = useParams();
  const job = jobsInfo.find((j) => j.id.toString() === id);
  console.log(job);

  if (!job) return <p>job doesn't exist</p>;

  return (
    <>
      <section className="main">
        <div className="companyHeader">
          <img src={`../../../src${job.logo}`} style={{backgroundColor:job.logoBackground}} alt="" />
          <div className="inner">
            <Link to={job.website}>
              <h3>{job.company}</h3>
              <span>{job.website}</span>
            </Link>
            <CompanySite></CompanySite>
          </div>
        </div>
      </section>

      <section className="aboutJob">
        <AboutJob
          postedAt={job.postedAt}
          company={job.company}
          contract={job.contract}
          description={job.description}
          id={job.id}
          location={job.location}
          logo={job.logo}
          position={job.position}
          requirements={job.requirements.content}
          reqItems={job.requirements.items}
          role={job.role.content}
          roleItems={job.role.items}

        ></AboutJob>
      </section>
    </>
  );
}

export default JobDetail;
