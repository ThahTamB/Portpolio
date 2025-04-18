/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';
import { CameraOutlined, ProjectOutlined, GlobalOutlined , ApartmentOutlined, FileTextOutlined, TeamOutlined } from "@ant-design/icons";

// interface ContactProps {}

const Service = () => {
  return (
    <div css={tw`py-6`}>
      <h2 className="customHeading text-heading text-mono " >SERVICES</h2>
      <p css={tw`text-blue`}>What I Have</p>
      <div css={tw`grid grid-cols-3 mb-4 mt-4`}>
        <div css={tw`laptop:(w-[400px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4 )`}>
        <GlobalOutlined css={tw`text-xxxl text-blue`}/>
          <p css={tw`text-white font-mono font-bold text-xl`}>Web Development </p>
          <p css={tw`text-justify mt-2`}>Designing, developing, and maintaining dynamic and responsive websites using modern frontend and backend technologies to ensure high performance, scalability, and user-friendly experiences.</p>
        </div>
        <div css={tw`laptop:(w-[400px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4)`}>
        <ApartmentOutlined css={tw`text-xxxl text-blue`}/>
          <p css={tw`text-white font-mono font-bold text-xl`}>Process Automation </p>
          <p css={tw`text-justify mt-2`}>Automating workflows with Power Automate, RPA, and low-code tools</p>
        </div>
        <div css={tw`laptop:(w-[400px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4)`}>
        <FileTextOutlined css={tw`text-xxxl text-blue`}/>
          <p css={tw`text-white font-mono font-bold text-xl`}>IT Business Analysis </p>
          <p css={tw`text-justify mt-2`}>Analyzing requirements, working with clients, and supporting system development</p>
        </div>
        <div css={tw`laptop:(w-[400px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4)`}>
        <CameraOutlined css={tw`text-xxxl`}/>
          <p css={tw`text-white font-mono font-bold text-xl`}>UI/UX & Multimedia Design </p>
          <p css={tw`text-justify mt-2`}>Designing logos, posters, infographics, video editing, and promotional content</p>
        </div>
        <div css={tw`laptop:(w-[400px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4)`}>
        <TeamOutlined css={tw`text-xxxl text-blue`}/>
          <p css={tw`text-white font-mono font-bold text-xl`}>Event & Communication Management </p>
          <p css={tw`text-justify mt-2`}>Organizing events, managing communications, and community engagement</p>
        </div>
        <div css={tw`laptop:(w-[400px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4)`}>
        <CameraOutlined css={tw`text-xxxl text-blue`}/>
          <p css={tw`text-white font-mono font-bold text-xl`}>Photography </p>
          <p css={tw`text-justify mt-2`}>Capturing portraits, outdoor shoots, and professional photography services</p>
        </div>
      </div>

    </div>
  );
};

export default Service;