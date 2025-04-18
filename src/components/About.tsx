/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Avatar from '../assets/images/DSC01448.jpg';

// interface AboutProps {}

const About = () => {
  return (
    <div css={tw`py-10`}>
      <h2 className="customHeading text-heading text-mono text-green" >ABOUT ME</h2>

      {/* <div css={tw`grid grid-cols-2 mb-4 mt-10 gap-10`}>
        <p css={tw`text-justify`}>
          Problem solver, well organized, independent and attentive to detail.
          Interested in systems areas and working on ambitious projects with proactive people.
        </p>
        <p css={tw`text-justify`}>
          Problem solver, well organized, independent and attentive to detail.
          Interested in systems areas and working on ambitious projects with proactive people.
        </p>
      </div>
      <p css={tw`text-justify mt-8`}>
        Problem solver, well organized, independent and attentive to detail.
        Interested in systems areas and working on ambitious projects with proactive people.
      </p> */}

      <div css={tw`flex flex-col mt-8 laptop:(grid grid-cols-2 gap-[50px])`}>
        <div css={tw`laptop:(!text-lg)`}>
          <div css={tw`flex flex-col gap-4`}>
            <p css={tw`text-justify`}>
              I graduated from
              {' '}
              <a
                className="link"
                href="https://ou.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"

              >
                Ho Chi Minh Open University
              </a>{' '}
              in Ho Chi Minh City, Vietnam with a major in Information Technology. I have a great passion for full-stack web development,
              UI effects and animations.
            </p>
            <p css={tw`text-justify`}>
              Problem solver, well organized, independent and attentive to detail.
              Interested in systems areas and working on ambitious projects with proactive people.
            </p>
            
          </div>
        </div>
        <div className="avatar" css={tw`flex relative mx-auto  w-[300px] h-[400px] `}>
          <img css={tw`w-full z-10 rounded-md`} src={Avatar} alt="" />
        </div>
      </div>
      <div css={tw`laptop:(w-[100%] py-4 mt-12 px-2  bg-navy-light rounded-md z-20 mb-4 )`}>
        <ul className="custom-marker-1 text-xl" css={tw`grid grid-cols-2 mb-4 `}>
          <li>AGE : 23</li>
          <li>RESIDENCE : Ho Chi Minh City</li>
          <li>FREELANCE : Available</li>
          <li>ADDRESS : Go Vap</li>
          <li>PHONE : 0963479975</li>
          <li>EMAIL: thahtamb@gmail.com</li>
        </ul>
      </div>
      {/* <div>
        <p css={tw`text-slate-lightest font-bold text-heading duration-150 text-right`}>Other</p>
        <p css={tw`text-justify mt-4`}>
          In addition to my technical expertise, I possess strong skills in event organization,
          activity coordination, and communications. These skills have enabled me to effectively
          plan and execute events, manage team dynamics, and engage with audiences. My experience
          in these areas has refined my ability to handle logistics, promote initiatives, and create
          impactful communications, adding value beyond my core professional competencies.
        </p>
        <p css={tw`mt-4`}>
          Here are a few tools and technologies I've been working for this job.
        </p>
        
      </div> */}
    </div>
  );
};

export default About;
