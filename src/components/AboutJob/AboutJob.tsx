import Apply from "../../components/buttons/ApplyNow/Apply";
import "./AboutJob.css";

function AboutJob(props: any) {
  return (
    <>
      <section className="heading">
        <span>{props.postedAt}</span>
        <span>{props.contract}</span>
        <div>
          <h2>{props.position}</h2>
          <Apply></Apply>
        </div>
        <p className="country">{props.location}</p>
      </section>

      <section className="text">
        <article>{props.description}</article>
        <h4>Requirements</h4>
        <article>{props.requirements}</article>
        {props.reqItems.map((item: String) => (
          <li>{item}</li>
        ))}
        <h5>What You Will Do</h5>
        <article>{props.role}</article>
        <ol>
          {props.roleItems.map((item: String) => (
            <li>{item}</li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default AboutJob;
