import React from "react";
import Member from "./components/Member";
import person1Mob from "/images/person_1.png";
import person1Desk from "/images/person_1@2x.png";
import person2Mob from "/images/person_2.png";
import person2Desk from "/images/person_2@2x.png";
import person3Mob from "/images/person_3.png";
import person3Desk from "/images/person_3@2x.png";
import person4Mob from "/images/person_4.png";
import person4Desk from "/images/person_4@2x.png";
import person5Mob from "/images/person_5.png";
import person5Desk from "/images/person_5@2x.png";
import gradientDesk from "/images/Gradient@2x.png";
import arrow from "/images/arrow.svg";
import bgI from "/images/Background_decor@2x.png";

const App = () => {
    return (
        <div className="bg-w-1 px-3 py-5 lg:py-18 xl:pt-23">
            <div className="relative z-50 wrapper rounded-3xl overflow-clip grid lg:grid-cols-3 xl:grid-cols-4">
                <img src={bgI} alt="" className="absolute" />
                <div className=" bg-w-2 px-8 pt-7.5 pb-20 lg:pb-26 lg:col-span-3 xl:col-span-2">
                    <div>
                        <div>
                            <span className="text-b-2">Our team</span>
                        </div>
                        <div>
                            <h1 className="relative z-50 text-[2.5rem] font-medium leading-[1.7] tracking-[-0.5px]">
                                Meet the brain
                            </h1>
                        </div>
                        <div>
                            <p className="relative z-50 text-[1rem] text-g leading-[1.25] tracking-[-0.15px] font-medium mt-1 lg:max-w-[45ch]">
                                We are proud to have them as part of our
                                community and look forward to continuing to push
                                the boundaries of what's possible in the world
                                of digital art.
                            </p>
                        </div>
                    </div>
                </div>
                <Member
                    imageDesk={person1Desk}
                    imageMob={person1Mob}
                    label="Liam Novak"
                    desc="Software Engineer"
                    bg="bg-p"
                    gradD={gradientDesk}
                />
                <Member
                    imageDesk={person2Desk}
                    imageMob={person2Mob}
                    label="Sophia Moretti"
                    desc="Business Development Manager"
                    bg="bg-pk"
                    gradD={gradientDesk}
                />
                <Member
                    imageDesk={person3Desk}
                    imageMob={person3Mob}
                    label="Ethan Rossi"
                    desc="Business Development Manager"
                    bg="bg-b-1"
                    gradD={gradientDesk}
                />
                <Member
                    imageDesk={person4Desk}
                    imageMob={person4Mob}
                    label="Isabella Ricci"
                    desc="UX Designer"
                    bg="bg-y"
                    gradD={gradientDesk}
                />
                <Member
                    imageDesk={person5Desk}
                    imageMob={person5Mob}
                    label="Noah Conti"
                    desc="Content Creator"
                    bg="bg-gn"
                    gradD={gradientDesk}
                />
                <div className="flex items-center lg:items-end lg:col-start-1 lg:row-start-3 xl:row-start-2 pt-85 pb-6 lg:pt-0 lg:pb-8 px-8 bg-w-2">
                    <p className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bl after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                        See all members
                    </p>
                    <img
                        src={arrow}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
