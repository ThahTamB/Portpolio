/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";


// interface ContactProps {}

const Contact = () => {
  return (
    <div>
      <h2 className="customHeading ">Contact</h2>
    <div id={'Contact'} css={tw`flex flex-col mt-8 laptop:(grid grid-cols-2 gap-[50px])`}>
      <div css={tw`flex flex-col  mb-80  rounded-xl border border-slate border-4 p-4 bg-navy-light `}>
        <h3>NOTE</h3>
        <p css={tw` mb-[30px] mt-2 text-justify`}>
          Currently I am always looking for  opportunities
          and my inbox is always open. Whether you have a
          question or just want to say hello, I'll do my best to answer you!
        </p>
      </div>
      <div css={tw`flex flex-col  mb-80  rounded-xl border border-slate border-4 p-4 bg-navy-light `}>
        <h3 css={tw`text-xl font-mono `}>BUI THANH TAM</h3>
        <h2 css={tw`!text-xxl !font-mono !text-blue text-center`}>IT SOFTWARE & PHOTOGRAPHER</h2>
        <p ><HomeOutlined css={tw`text-blue text-xxl`} />  Go Vap, Ho Chi Minh City, VietNam</p>
        <p ><MailOutlined css={tw`text-blue text-xxl`} />  thahtamb@gmail.com</p>
        <p><PhoneOutlined css={tw`text-blue text-xxl`} />  0963479975</p>
      </div>
    </div>
    </div>
  );
};

export default Contact;