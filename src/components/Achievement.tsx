/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';
import { motion } from 'framer-motion';
import variants from '../variants';
import Button from './Button';


const Achievement = () => {
    return (

        <div id='achievement' css={tw`py-24`}>
            <h2 className="customHeading ">Some Achievement I've got</h2>
            <div css={tw`grid grid-cols-2 `}>
                <div>
                    <p css={tw`text-blue font-mono font-bold text-xl mb-4 `}>Technical Achievement </p>
                    <ul className="custom-marker-1" css={tw` mb-4 mr-4 text-lg bg-navy-light rounded-xl p-2 h-[250px]`}>
                        <li css={tw`mb-4 mt-4 `}>Second Prize in the "24-Hour Software Solutions" competition
                            organized by the Faculty of Information Technology in 2022.</li>
                        <li css={tw`mb-4 mt-4  `}>Second Prize in the "24-Hour Software Solutions" competition
                            organized by the Faculty of Information Technology in 2023.</li>
                        <li css={tw`mb-4 mt-4 `}>Conducted a Scientific Research Project in 2023.</li>

                    </ul>
                </div>
                <div>
                    <p css={tw`text-pink font-mono font-bold text-xl text-right mb-4 `}>Volunteer Activities </p>
                    <ul className="custom-marker-2" css={tw` mb-4 ml-4 text-lg bg-navy-light rounded-xl p-2 h-[250px]`}>
                        <li css={tw`mb-4 mt-4 `}>Recognized as an exemplary volunteer in the "Green Summer"
                            Volunteer Campaign in 2023.</li>
                        <li css={tw`mb-4 mt-4 `}>Certificate of commendation for outstanding performance
                            in the "Spring Volunteer" Campaign in 2024</li>
                        <li>Certificate of commendation for outstanding performance in the Mid-Autumn
                            Volunteer Campaign in 2024.</li>
                    </ul>
                </div>
                <div>
                    <p css={tw`text-green font-mono font-bold text-xl mt-10 mb-4`}>Youth Union Activities
                    </p>
                    <ul className="custom-marker" css={tw` mb-4 mr-4 text-lg bg-navy-light rounded-xl p-2 h-[250px]`}>
                        <li css={tw`mb-4 mt-4 `}>Outstanding Achievement in Youth Union and Association Activities (2022).</li>
                        <li css={tw`mb-4 mt-4 `}>Excellent Youth Union Member (2023)</li>
                        <li css={tw`mb-4 mt-4 `}>Deputy Head of the Youth Union Branch (2021)</li>
                        <li css={tw`mb-4 mt-4 `}>Head of the Youth Union Branch (2022)</li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default Achievement;