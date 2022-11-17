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
          className={` h-6 w-6 rounded-full flex items-center justify-center border-slate bg-orange border-white border-4          
          `}
          style={
            currentSlide.index === i
              ? { transition: "all 0.3s ease", borderColor: "orange",backgroundColor:"white" }
              : {backgroundColor:"white",transition: "all 0.3s ease", borderColor: "white" }
          }
          onClick={() => events.moveToIndexSlide(i + 1)}
        ></button>
      );
    }
    return dots;
  };
  console.log(currentSlide, data.length);
  React.useEffect(() => {}, [data]);
  return (
    <div className="bg-teal-300 font-poppins">
      <CarouselWrap events={events} className="h-[50vh] relative ">
        <img
          src={currentSlide.value.url}
          alt=""
          className="w-full h-full object-cover -z-[1]"
        />
        <div className=" top-0 absolute w-full h-full px-8  bg-blue-500  text-white bg-opacity-50">
          <div className=" h-full p-4 mx-auto flex items-center">
            <h1 className="font-bold text-2xl capitalize">
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
