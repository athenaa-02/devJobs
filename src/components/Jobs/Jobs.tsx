import './Jobs.css'
import { jobsInfo } from '../../data/jobs'


function Jobs() {
  return (
    <main>
      {jobsInfo.map((eachJob) => (
        <div className='jobPreview' key={eachJob.id}>
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
      ))}
    </main>
  );
}
export default Jobs