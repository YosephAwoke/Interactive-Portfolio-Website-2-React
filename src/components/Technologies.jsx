// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { DiRedis } from "react-icons/di";
// import { SiMongodb } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import {BiLogoPostgresql} from "react-icons/bi";

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24 ">
//       <h1 className="my-20 text-center text-4xl"> Technologies used for Full- Stack Developement</h1>
//       <div className="flex flex-wrap items-center justify-center gap-4">
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <RiReactjsLine className="text-7xl text-cyan-400" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <TbBrandNextjs className="text-7xl" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <SiMongodb className="text-7xl text-green-500" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <DiRedis className="text-7xl text-red-700" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <FaNodeJs className="text-7xl text-green-500" />
//         </div>
//         <div className="rounded-2xl border-4 border-neutral-800 p-4">
//           <BiLogoPostgresql className="text-7xl text-sky-700" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technologies;

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";
import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiKeras,
  SiPandas,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      {/* Full-Stack Development Section */}
      <h1 className="my-5 text-2xl text-center">
        Technologies Used for Full-Stack Development
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React */}
        <div className="flex flex-col items-center">
          <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-6xl text-cyan-400" />
          </div>
          <p className="mt-2 text-center">React</p>
        </div>
        {/* Next.js */}
        <div className="flex flex-col items-center">
          <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <TbBrandNextjs className="text-6xl" />
          </div>
          <p className="mt-2 text-center">Next.js</p>
        </div>
        {/* MongoDB */}
        <div className="flex flex-col items-center">
          <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <SiMongodb className="text-6xl text-green-500" />
          </div>
          <p className="mt-2 text-center">MongoDB</p>
        </div>
        {/* Redis */}
        <div className="flex flex-col items-center">
          <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <DiRedis className="text-6xl text-red-700" />
          </div>
          <p className="mt-2 text-center">Redis</p>
        </div>
        {/* Node.js */}
        <div className="flex flex-col items-center">
          <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <FaNodeJs className="text-6xl text-green-500" />
          </div>
          <p className="mt-2 text-center">Node.js</p>
        </div>
        {/* PostgreSQL */}
        <div className="flex flex-col items-center">
          <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <BiLogoPostgresql className="text-6xl text-sky-700" />
          </div>
          <p className="mt-2 text-center">PostgreSQL</p>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
        {/* Graphic Design Section */}
        <div className=" ml-10 mt-10 w-full lg:w-1/2">
          <h1 className=" mb-8 text-2xl text-left">
            Technologies Used for Graphic Design
          </h1>
          <div className=" flex flex-wrap items-center gap-4">
            {/* Photoshop */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiAdobephotoshop className="text-6xl text-blue-500" />
              </div>
              <p className="mt-2 text-center">Photoshop</p>
            </div>
            {/* Illustrator */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiAdobeillustrator className="text-6xl text-orange-500" />
              </div>
              <p className="mt-2 text-center">Illustrator</p>
            </div>
            {/* Premiere */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiAdobepremierepro className="text-6xl text-purple-500" />
              </div>
              <p className="mt-2 text-center">Premiere</p>
            </div>
            {/* After Effects */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiAdobeaftereffects className="text-6xl text-indigo-500" />
              </div>
              <p className="mt-2 text-center">After Effects</p>
            </div>
          </div>
        </div>

        {/* Deep Learning Section */}
        <div className=" mt-10 w-full lg:w-1/2">
          <h1 className="mb-8 text-2xl text-center">
            Technologies Used for Deep Learning
          </h1>
          <div className="flex flex-wrap items-center justify-end gap-4">
            {/* TensorFlow */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiTensorflow className="text-6xl text-orange-600" />
              </div>
              <p className="mt-2 text-center">TensorFlow</p>
            </div>
            {/* PyTorch */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiPytorch className="text-6xl text-red-500" />
              </div>
              <p className="mt-2 text-center">PyTorch</p>
            </div>
            {/* OpenCV */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiOpencv className="text-6xl text-teal-500" />
              </div>
              <p className="mt-2 text-center">OpenCV</p>
            </div>
            {/* Keras */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiKeras className="text-6xl text-red-400" />
              </div>
              <p className="mt-2 text-center">Keras</p>
            </div>
            {/* Pandas */}
            <div className="flex flex-col items-center">
              <div className="p-4 border-4 rounded-2xl border-neutral-800">
                <SiPandas className="text-6xl text-blue-600" />
              </div>
              <p className="mt-2 text-center">Pandas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
