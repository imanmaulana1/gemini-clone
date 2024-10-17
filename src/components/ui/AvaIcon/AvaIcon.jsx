const AvaIcon = ({ icons, alt = 'Icon', classes = '' }) => {
  return (
    <img src={icons} alt={alt} className={`w-10 rounded-full ${classes}`} />
  );
};

export default AvaIcon;
