const SkillCard = ({ logoImage, name }) => {
  return (
    <div className="bg-[#304565] rounded-lg p-5 flex flex-col justify-center items-center w-24">
      <img
        className="object-center object-cover h-14 w-14"
        src={logoImage}
        alt="user-card"
      />
      <p className="text-sm text-white font-bold mt-8">{name}</p>
    </div>
  );
};

export default SkillCard;
