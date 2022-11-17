import React from "react";
import { SliderList } from "./DataList";

type CarouselContextType = {
  data: SliderList<any>;
  currentSlide: SliderList<any>["head"];
  dataLength: number;
  events: {
    nextSlide: () => void;
    previousSlide: () => void;
    moveToIndexSlide: (index: number) => void;
  };
};

type CarouselActionsType = {
  ["NEXT"]: { type: "NEXT" };
  ["PREVIOUS"]: { type: "PREVIOUS" };
  ["GOTO"]: { type: "GOTO"; payload: number };
};

type TypeMapper<T> = {
  [K in keyof T]: K extends undefined ? K : T[K];
};
  
const initialState: CarouselContextType = {
  data: new SliderList(),
  currentSlide: new SliderList().head,
  dataLength: 0,
  events: {
    nextSlide: function (): void {
      throw new Error("Function not implemented.");
    },
    previousSlide: function (): void {
      throw new Error("Function not implemented.");
    },
    moveToIndexSlide: function (index: number): void {
      throw new Error("Function not implemented.");
    },
  },
};

const CarouselContext = React.createContext<{
  state: CarouselContextType;
  dispatch: React.Dispatch<
    TypeMapper<CarouselActionsType>[keyof TypeMapper<CarouselActionsType>]
  >;
}>({ state: initialState, dispatch: () => {} });

interface CarouselProviderProps {
  data: any[];
  children: React.ReactNode;
  [key: string]: any;
}
function CarouselProvider({
  children,
  data,
  ...props
}: CarouselProviderProps) {
  if (!Array.isArray(data)) {
    throw new Error("Data must be an array");
  }

  const dataList = new SliderList();
  data.forEach((item) => dataList.append(item));
  const [currentSlide, setCurrentSlide] = React.useState<typeof dataList.head>(
    dataList.head
  );
  const moveNext = (state: CarouselContextType) => {
    const nextSlide = state.currentSlide.next;
    setCurrentSlide(nextSlide);
    return {
      ...state,
      currentSlide: nextSlide,
    };
  };
  const movePrevious = (state: CarouselContextType) => {
    const previousSlide = state.currentSlide.previous;
    setCurrentSlide(previousSlide);
    return { ...state, currentSlide: previousSlide };
  };

  const moveToIndex = (state: CarouselContextType, index: number) => {
    const { dataLength } = state;
    if (index < 0 || index > dataLength) {
      console.error("Index out of range");
      return state;
    }
    let currentSlide = state.data.head;
    while (currentSlide.index + 1 !== index) {
      currentSlide = currentSlide.next;
    }
    setCurrentSlide(currentSlide);
    return { ...state, currentSlide };
  };
  const reducer = (
    state: CarouselContextType,
    action: TypeMapper<CarouselActionsType>[keyof TypeMapper<CarouselActionsType>]
  ) => {
    switch (action.type) {
      case "NEXT": {
        return moveNext(state);
      }
      case "PREVIOUS": {
        return movePrevious(state);
      }
      case "GOTO": {
        return moveToIndex(state, action.payload);
      }

      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    data: dataList,
    currentSlide,
    dataLength: data.length,
  });

  const moveToNext = () => dispatch({ type: "NEXT" });
  const moveToPrevious = () => dispatch({ type: "PREVIOUS" });
  const moveToIndexSlide = (index: number) =>
    dispatch({ type: "GOTO", payload: index });

  React.useEffect(() => {
    setCurrentSlide(state.currentSlide);
  }, [state.currentSlide]);

  return (
    <CarouselContext.Provider
      value={{
        state: {
          ...state,
          events: {
            nextSlide: moveToNext,
            previousSlide: moveToPrevious,
            moveToIndexSlide,
          },
        },
        dispatch,
      }}
    >
      <div {...props}>{children}</div>
    </CarouselContext.Provider>
  );
}

const useCarouselContext = () => React.useContext(CarouselContext);
export { CarouselProvider, useCarouselContext };
export default CarouselProvider;
