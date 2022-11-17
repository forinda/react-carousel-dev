import React from "react";
import Wrapper from "./Components/Wrapper";
import axios from "axios";
import CarouselProvider, {
  useCarouselContext,
} from "./provider/CarouselProvider";
import { MapRouter } from "react-router-map";
import Homepage from "./pages/Homepage";
export type GalleryType = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};
const App = () => {
  // const [photos, setPhotos] = React.useState<GalleryType[]>([]);
  // const fetchPhotos = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://jsonplaceholder.typicode.com/photos"
  //     );
  //     setPhotos(res.data.slice(0, 10));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // React.useEffect(() => {
  //   fetchPhotos();
  // }, []);

  // React.useEffect(() => {
  // }, [photos]);
  // console.log(photos);

  return (
    <Wrapper>
      {/* <CarouselProvider data={photos}> */}
      <MapRouter
        routes={[
          {
            Component: <Homepage />,
            pathName: "Homepage",
            urlPath: "/",
          },
        ]}
      />
      {/* </CarouselProvider> */}
    </Wrapper>
  );
};

export default App;
