/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';
import { CameraOutlined, ProjectOutlined, GlobalOutlined, ApartmentOutlined, FileTextOutlined, TeamOutlined } from "@ant-design/icons";

// interface ContactProps {}

const Education = () => {
  return (
    <div css={tw`py-6`}>
      <h2 className="customHeading text-heading text-mono " >Education</h2>
      <p css={tw`text-blue`}>Where I Study</p>
      <div css={tw`grid grid-cols-1 mb-4 mt-4`}>
        <div css={tw`laptop:(w-[1280px] px-4 py-4  rounded-md z-20 mb-4 )`}>
          <p css={tw`text-lg`}>2020 - 2024</p>
          <p css={tw`text-white font-mono font-bold text-xxl`}>Ho Chi Minh Open University</p>
          <p css={tw`text-white font-mono font-bold text-xl`}>Major: Information Technology </p>
          <p css={tw`text-justify mt-2`}>
          </p>
          <p css={tw`text-justify mt-2`}>I gained a solid foundation in programming, databases, software development,
            and information systems. Beyond theoretical knowledge, I participated in various real-world projects, honing
            my problem-solving, teamwork, and analytical skills.</p>
          <p css={tw`text-justify mt-2`}>In addition to my studies, I actively took part in academic and technology competitions,
            achieving notable results. These experiences not only enhanced my technical expertise but also developed my creativity,
            adaptability, and ability to perform under pressure.
            rated by customers</p>
        </div>
        <div css={tw`laptop:(w-[1280px] px-4 py-4  rounded-md z-20 mb-4 )`}>
        <p css={tw`text-lg`}>2024 - Now</p>
          <p css={tw`text-white font-mono font-bold text-xxl`}>IELTS Academy</p>
          <p css={tw`text-white font-mono font-bold text-xl`}>Current Brand: 5.0 - 5.5 </p>
          <p css={tw`text-justify mt-2`}>
          </p>
          </div>
      </div>

    </div>
  );
};

export default Education;