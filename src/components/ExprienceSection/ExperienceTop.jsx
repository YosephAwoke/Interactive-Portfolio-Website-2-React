import ExperienceTopLeft from "./ExperienceTopLeft"
import ExperienceTopMiddle from "./ExperienceTopMiddle"
import ExperienceTopRight from "./ExperienceTopRight"


const ExperienceTop = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row gap-4 items-center jestify-center">
     
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  )
}

export default ExperienceTop;