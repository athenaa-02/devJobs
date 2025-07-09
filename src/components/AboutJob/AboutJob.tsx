import Apply from "../../components/buttons/ApplyNow/Apply";
import "./AboutJob.css";

function AboutJob(props: any) {
  return (
    <>
    <div className="wholeInfo">
      <section className="heading">
        <span className="postedAt">{props.postedAt}</span>
        <span>{props.contract}</span>
        <div className="wrapper">
          <h2 className="position">{props.position}</h2>
          <Apply></Apply>
        </div>
        <p className="location">{props.location}</p>
      </section>

      <section className="text">
        <article>{props.description}</article>
        <h4>Requirements</h4>
        <article>{props.requirements}</article>
        {props.reqItems.map((item: String) => (
          <li className="req">{item}</li>
        ))}
        <h5>What You Will Do</h5>
        <article>{props.role}</article>
        <ol>
          {props.roleItems.map((item: String) => (
            <li>{item}</li>
          ))}
        </ol>
      </section>
      </div>
    </>
  );
}

export default AboutJob;
