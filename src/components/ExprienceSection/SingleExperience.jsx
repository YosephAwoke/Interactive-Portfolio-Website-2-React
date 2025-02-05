

const SingleExperience = ({experience}) => {
  return (
    <div>
      <p>{experience.job}</p>
      <p>{experience.company}</p>
      <p>{experience.date}</p>
      <ul>{experience.responsibilities.map((resp, index) => {
        return <li key={index}>{resp}</li>;
      })}</ul>
    </div>
  )
}

export default SingleExperience
