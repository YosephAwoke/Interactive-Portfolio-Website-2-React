

const SingleExperience = ({experience}) => {
  return (
    <div className="md:h-[410px] md:w-[300px] sm:h-auto sm:w-full border-2 border-orange-400 border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-cyan-400">{experience.job}</p>
      <p className="text-orange-400">{experience.company}</p>
      <p className="text-gray-400">{experience.year}</p>
      <ul className="list-disc mt-4 pl-4 text-white">{experience.responsibilities.map((resp, index) => {
        return <li key={index}>{resp}</li>;
      })}</ul>
    </div>
  )
}

export default SingleExperience
 