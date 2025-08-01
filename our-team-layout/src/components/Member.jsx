import React from "react";

const Member = ({ imageMob, imageDesk, gradD, label, desc, bg }) => {
    return (
        <div className={`${bg} relative h-fit`}>
            <div className="absolute top-0 bottom-0 z-10 h-full w-full">
                <img src={gradD} alt="" className="w-full h-full" />
            </div>
            <picture>
                <source media="(min-width: 62.5rem)" srcset={imageDesk} />
                <img src={imageMob} alt={label} />
            </picture>
            <div className="absolute bottom-10 left-8 z-50">
                <h2 className="text-[1.25rem] font-semibold text-w-1">
                    {label}
                </h2>
                <p className="text-w-1 leading-[1.3] tracking-tighter">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default Member;
