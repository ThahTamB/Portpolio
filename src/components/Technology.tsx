/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';

// interface ContactProps {}

const Technology = () => {
  return (
    <div css={tw`py-24`}>
      <h2 className="customHeading text-heading text-mono " >TECHNOLOGY</h2>
      <p css={tw`text-blue`}>What I Do</p>
      <div css={tw`grid grid-cols-3 mb-4 mt-10`}>
        <div css={tw`laptop:(w-[350px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4 )`}>
          <p css={tw`text-blue font-mono font-bold text-xl`}>Back-End: </p>
          <ul className="custom-marker-1" css={tw`grid grid-cols-2 mb-4`}>
            <li>C#</li>
            <li>.NET</li>
            <li>.NET Core</li>
            <li>.NET MVC</li>
            <li>Python</li>
            <li>Django</li>
            <li>Java</li>
          </ul>
        </div>
        <div css={tw`laptop:(w-[350px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4)`}>
          <p css={tw`text-blue font-mono font-bold text-xl`}>Front-End: </p>
          <ul className="custom-marker-1" css={tw`grid grid-cols-2 mb-4`}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>MSSQL</li>
          </ul>
        </div>
        <div css={tw`laptop:(w-[350px] px-4 py-4 bg-navy-light rounded-md z-20 mb-4)`}>
          <p css={tw`text-blue font-mono font-bold text-xl`}>Database: </p>
          <ul className="custom-marker-1" css={tw`grid grid-cols-2 mb-4`}>
            <li>MSSSQL</li>
            <li>MYSQL</li>
            <li>SQLite</li>
            <li>FireBase</li>
          </ul>
        </div>
        <div css={tw`laptop:(w-[350px] px-4 py-4 bg-navy-light rounded-md z-20)`}>
          <p css={tw`text-blue font-mono font-bold text-xl`}>Automation: </p>
          <ul className="custom-marker-1" css={tw`grid grid-cols-2 mb-4`}>
            <li>Power Automate</li>
            <li>N8N</li>
            <li>Make.com</li>
          </ul>
        </div>
        <div css={tw`laptop:(w-[350px] px-4 py-4 bg-navy-light rounded-md z-20 )`}>
          <p css={tw`text-blue font-mono font-bold text-xl`}>Other </p>
          <ul className="custom-marker-1" css={tw`grid grid-cols-2 mb-4`}>
            <li>Microsoft Office</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Technology;