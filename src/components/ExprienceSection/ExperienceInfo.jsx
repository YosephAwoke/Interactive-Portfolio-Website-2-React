import PropTypes from 'prop-types';

const ExperienceInfo = ({number, text}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-6xl text-cyan-500 -ml-5" >{number}</p>
      <p className="font-bold text-center text-xl text-gray-400 uppercase ">{text}</p>
    </div>
  )
}
ExperienceInfo.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default ExperienceInfo; 