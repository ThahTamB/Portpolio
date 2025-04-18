/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';
import { CameraOutlined, ProjectOutlined, GlobalOutlined, ApartmentOutlined, FileTextOutlined, TeamOutlined } from "@ant-design/icons";

// interface ContactProps {}

const Experience = () => {
  return (
    <div css={tw`py-6`}>
      <h2 className="customHeading text-heading text-mono " >EXPERIENCE</h2>
      <p css={tw`text-blue`}>Where I Work</p>
      <div css={tw`grid grid-cols-2 mb-4 mt-4`}>
        <div css={tw`laptop:(w-[610px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4 )`}>
          <p css={tw`text-lg`}>09/2023 - 01/2024</p>
          <p css={tw`text-white font-mono font-bold text-xxl`}>Citek ISD </p>
          <p css={tw`text-white font-mono font-bold text-xl`}>Backend Developer </p>
          <p css={tw`text-justify mt-2`}>Process data sent from the Frontend to the Backend and
            implement an API to query data for the Frontend and Mobile
            departments using the ASP.NET CORE Framework.
          </p>
          <p css={tw`text-justify mt-2`}>• Support and meet with customers to exchange information
            and gather requirements for building the system.</p>
          <p css={tw`text-justify mt-2`}>• Result: Successfully built and developed the system for
            customers, with the product's effectiveness being highly
            rated by customers</p>
        </div>
        <div css={tw`laptop:(w-[610px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4)`}>
        <p css={tw`text-lg`}>11/2024 - 3/2025</p>
          <p css={tw`text-white font-mono font-bold text-xxl`}>VT Healthcare </p>
          <p css={tw`text-white font-mono font-bold text-xl`}>IT Engineer( Business Analyst/ Automation/ Support )</p>
          <p css={tw`text-justify mt-2`}>• Analyze business requirements, design, and implement process automation solutions to optimize internal workflows.</p>

          <p css={tw`text-justify mt-2`}>• Develop and manage automated workflows to minimize manual tasks and enhance departmental efficiency.</p>

          <p css={tw`text-justify mt-2`}>• Provide user support, troubleshoot issues, and ensure the stable operation of automation solutions.</p>

          <p css={tw`text-justify mt-2`}>• Integrate automation solutions with internal software platforms and systems.</p>

          <p css={tw`text-justify mt-2`}>• Monitor and evaluate the performance of automated processes, proposing improvements to optimize costs and operational time.</p>
        </div>
      </div>

    </div>
  );
};

export default Experience;