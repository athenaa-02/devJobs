import './Jobs.css'
import { jobsInfo } from '../../data/jobs'
import { Link } from 'react-router-dom';



function Jobs() {
  return (
    <main>
      {jobsInfo.map((eachJob) => (
        <Link to={`/jobs/${eachJob.id}`} key={eachJob.id}>
        <div className='jobPreview' >
          <div className='innerBox'>
          <img src={eachJob.logo}/>
          <p className='generalInfo'>
            <span className='time'>{eachJob.postedAt}</span>
            <span className='type'>{eachJob.contract}</span>
          </p>
          <h2>{eachJob.position}</h2>
          <article>{eachJob.company}</article>
          <p className='country'>{eachJob.location}</p>
        </div>
        </div>
        </Link>
      ))}
    </main>
  );
}
export default Jobs