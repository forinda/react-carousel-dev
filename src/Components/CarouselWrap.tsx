import React from "react";

const CarouselWrap = ({ children, events,...props }: any) => {
  return (
    <div {...props}>
      <ButtonWrapper onClick={events.previousSlide} side="left">{"<"}</ButtonWrapper>
      {children}
      <ButtonWrapper onClick={events.nextSlide} side="right">{">"}</ButtonWrapper>
    </div>
  );
};

export default CarouselWrap;

const ButtonWrapper = ({ children, onClick, side }: any) => {
  return (
    <div
      className={`${
        side === "left" ? "left-5" : "right-5"
      } absolute top-0 b-0 flex items-center z-10 h-full`}
    >
      <button
        onClick={onClick}
        className="bg-red-500 text-white px-2 py-1 rounded-md"
      >
        {children}
      </button>
    </div>
  );
};
