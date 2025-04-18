/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';
import { motion } from 'framer-motion';
import variants from '../variants';
import Button from './Button';
import { ReactComponent as Github } from '../assets/images/github.svg';


const Hero = () => {
    return (
      
        <motion.div
        initial="before"
        animate="after"
        transition={{ staggerChildren: 0.2, delayChildren: 1.5 }}
        css={tw`h-[80vh] flex flex-col justify-center  w-full laptop:(h-screen)`}
      >
        <section id="" >
        <motion.span variants={variants.title} css={tw`font-mono text-md text-blue mb-4`}>
          Hi, my name is
        </motion.span>
        <motion.h1 variants={variants.title} >Bui Thanh Tam.</motion.h1>
        <motion.h1 variants={variants.title} css={tw`!text-slate`}>
          I build many things about software products.
        </motion.h1>
        <motion.p
          variants={variants.title}
          css={tw`text-left text-justify laptop:(!text-xl w-[540px] py-4 leading-7)`}
        >
          I'm a software engineer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        <motion.div variants={variants.title} css={tw`mt-8 flex`}>
          {/* <Button title="Check out my course!" size="lg" /> */}
          
          <a href='https://github.com/ThahTamB' css={tw`flex items-center gap-x-5 border rounded text-blue border-blue font-mono p-2 hover:(text-white bg-blue)`}><Github/> Github.com/ThahTamB</a>
        </motion.div>
        </section>
      </motion.div>
     
    );

};

export default Hero;