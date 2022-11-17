import React from "react";
import CarouselWrap from "../Components/CarouselWrap";
import { useCarouselContext } from "../provider/CarouselProvider";

const Homepage = () => {
  const { state } = useCarouselContext();
  const { data, currentSlide, events } = state;

  const genDots = () => {
    const dots: JSX.Element[] = [];
    for (let i = 0; i <= data.length; i++) {
      dots.push(
        <button
          key={i}
          className={` h-4 w-4 rounded-full flex items-center justify-center border bg-slate-400  ${
            currentSlide.index === i+1 && "bg-red-500"
          }`}
          style={currentSlide.index===i?{ transition: "all 0.3s ease",backgroundColor:'red' }:{}}
          onClick={() => events.moveToIndexSlide(i + 1)}
        >
          
        </button>
      );
    }
    return dots;
  };
  console.log(currentSlide, data.length);
  React.useEffect(() => {}, [data]);
  return (
    <div className="bg-teal-300">
      <CarouselWrap events={events} className="h-screen relative ">
        <img
          src={currentSlide.value.url}
          alt=""
          className="w-full h-full object-cover -z-[1]"
        />
        <div className=" top-0 absolute w-full h-full px-4">
          <div className="bg-black bg-opacity-30 h-full p-4 max-w-7xl mx-auto flex items-center">
            <h1 className="font-bold text-2xl font-serif capitalize">
              {currentSlide.value.title}
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 absolute w-full bottom-2">
          {genDots().map((d) => d)}
        </div>
      </CarouselWrap>
    </div>
  );
};
export default Homepage;
