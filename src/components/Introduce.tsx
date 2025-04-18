/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';
import Avatar from '../assets/images/avatar1.jpg';
import { motion } from 'framer-motion';
import variants from '../variants';
import { ReactComponent as Github } from '../assets/images/github.svg';

// interface ContactProps {}

const Introduce = () => {
  return (
    <div css={tw`flex flex-col mt-8 laptop:(grid grid-cols-2 gap-[50px])`}>
      <div  css={tw`flex relative mx-auto  w-[80%] h-[600px] `}>
      <img css={tw`w-full z-10 rounded-md`} src={Avatar} alt="" />
    </div>
    <div css={tw`laptop:(!text-lg)`}>
      <motion.div
        initial="before"
        animate="after"
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
        css={tw` flex flex-col justify-center  w-full laptop:()`}
      >
        <section id="" >
        <motion.h1 variants={variants.title} css={tw`font-mono text-xxxl text-blue mb-4 mb-8 mt-8`} >BUI THANH TAM</motion.h1>
        
        <motion.span variants={variants.title} css={tw`font-mono text-xxxl text-blue mb-4`}>
          Software Developer
        </motion.span>
        <br/>
        <motion.span variants={variants.title} css={tw`font-mono text-xxxl text-blue mb-4`}>
          Web Desinger
        </motion.span>
        <br/>
        <motion.span variants={variants.title} css={tw`font-mono text-xxxl text-blue mb-4`}>
        Photographer & Designer
        </motion.span>
        {/* <motion.h1 variants={variants.title} css={tw`!text-slate`}>
          I build many things about software products.
        </motion.h1> */}
        <motion.p
          variants={variants.title}
          css={tw`text-left text-justify laptop:(!text-xl w-[650px] py-4 leading-7)`}
        >
          I am passionate about technology, design, and multimedia content creation.
           With experience in programming, communication design, and event organization, 
           I am always seeking opportunities to grow and create valuable products. I believe 
           that combining the logical mindset of programming with the creativity of design allows me
            to deliver effective and impressive solutions.
        </motion.p>
        
        </section>
      </motion.div>
    </div>
    
  </div>
  );
};

export default Introduce;