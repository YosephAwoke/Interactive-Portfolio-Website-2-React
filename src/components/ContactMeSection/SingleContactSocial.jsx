import PropTypes from 'prop-types';

const SingleContactSocial = ({Icon, link }) => {
  return (
    <div className="text-2xl h-15 w-15 border border-orange-300 text-white rounded-full flex justify-center items-center p-3">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );

}
SingleContactSocial.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
};
export default SingleContactSocial;

