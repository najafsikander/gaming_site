import { useState } from "react";
import { Star } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import CustomCursor from "./CustomCursor";

const Characters = () => {
  //   Track which Avatar is currently selected
  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");
  const [cursonInModelArea, setCursorInModelArea] = useState(false);

  const avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      star: 3,
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      star: 4,
    },
  };

  const currentAvatar = avatar[selectedAvatar];
  const evaSpline =
    "https://prod.spline.design/XVfKlwDCr-hKQjv1/scene.splinecode";
  const vikiSpline =
    "https://prod.spline.design/GsJEp-DIIZAXoYWl/scene.splinecode";

  const handle3DAreaMouseEnter = () => {
    setCursorInModelArea(true);
  };

  const handle3DAreaMouseLeave = () => {
    setCursorInModelArea(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">
      <CustomCursor isHovering3D={cursonInModelArea}/>
      {/* Section Title */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:-mb-14 mb-8"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.7" }}
        >
          FIGHTERS
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* Left Side - Avatar info and selection */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* Select Avatar Info Card */}
          <div className="bg-gray-900/80 backdrop:blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
            <h1 className="text-2xl font-semibold mb-2">
              {currentAvatar.name}
            </h1>
            {/* Avatar Statistics */}
            <div className="space-y-3 mb-16">
              {/* Power Stat */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Power</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.power}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.power}</span>
              </div>

              {/* Stable Stat */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Stable</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.stable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.stable}</span>
              </div>

              {/* Penetrate Stat */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Penetrate</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.penetrate}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.penetrate}</span>
              </div>

              {/* Portable Stat */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Portable</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.portable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.portable}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Proficient
              </button>
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* Avatar Selection */}
          <div className="grid grid-cols-2 gap-4">
            {/* VIKI CARD */}
            <div
              onClick={() => setSelectedAvatar("VIKI")}
              className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
            >
              <div className="text-lg mb-2">VIKI</div>

              {/* Avatar visual placeholder */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="/images/VIKI.png" alt="VIKI Avatar" />
              </div>

              {/* Star rating */}
              <div className="flex">
                {[...Array(currentAvatar.star)].map((_, index) => (
                  <Star
                    key={index}
                    className="text-violet-500 fill-violet-400 w-4 h-4"
                  />
                ))}
              </div>

              {/* Hightlight for selected card */}
              {selectedAvatar === "VIKI" && (
                <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
              )}
            </div>

            {/* EVA CARD */}
            <div
              onClick={() => setSelectedAvatar("EVA")}
              className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
            >
              <div className="text-lg mb-2">EVA</div>

              {/* Avatar visual placeholder */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="/images/EVA.png" alt="EVA Avatar" />
              </div>

              {/* Star rating */}
              <div className="flex">
                {[...Array(currentAvatar.star)].map((_, index) => (
                  <Star
                    key={index}
                    className="text-violet-500 fill-violet-400 w-4 h-4"
                  />
                ))}
              </div>

              {/* Hightlight for selected card */}
              {selectedAvatar === "EVA" && (
                <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - 3D model */}
        <div className="relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden" onMouseEnter={handle3DAreaMouseEnter} onMouseLeave={handle3DAreaMouseLeave}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAvatar}
              className="absolute inset-0"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              <Spline
                scene={selectedAvatar === "EVA" ? evaSpline : vikiSpline}
              />
              {/* <img src={`/images/${selectedAvatar}.png`} alt={`${selectedAvatar} Image`} /> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Characters;
