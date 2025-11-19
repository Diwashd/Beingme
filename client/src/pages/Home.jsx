import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
// import Seo from '../components/Seo';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {/* <Seo
        title="Being Me Nepal | Zodiac Custom T-Shirts"
        description="Explore zodiac-based T-shirts & customizable apparel. Express your identity, design your vibe, and wear a story that's unmistakably yours."
        url="https://beingmenepal.com"
        image="https://beingmenepal.com/og-home.jpg"
      /> */}

      <AnimatePresence>
        {snap.intro && (
          <motion.section className="home" {...slideAnimation("left")}>

            <motion.header {...slideAnimation("down")}>
              <img
                src="./beingme.png"
                alt="logo"
                className="w-60 h-60 object-contain"
              />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text font-comfortaa">
                  BEiNG ME <br className="xl:block hidden" />
                </h1>

                <h3 className="text-4xl font-bold text-gray-600 xs:mb-16 mb-10 font-comfortaa">
                  Wear your identity!
                </h3>
              </motion.div>

              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md text-xl text-gray-600">
                  <strong>Being Me</strong> brings self-expression to the front line with premium fits, bold zodiac drops, and fully customizable apparel. Craft your identity, design your vibe, and wear a story that’s unmistakably yours.
                </p>

                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-xl"
                />
              </motion.div>
            </motion.div>

          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
