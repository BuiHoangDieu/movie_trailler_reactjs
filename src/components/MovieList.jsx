import Proptypes from "prop-types"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};

const MovieList = ({title, data}) => {

    const {handleTrailler} = useContext(MovieContext)
    
  return (
    <div className="text-white p-8 mb-10">
        <h2 className="uppercase font-bold text-xl mb-5">{title}</h2>
        <Carousel responsive={responsive} className="flex items-center">
              {data.length > 0 && data.map((item) => (
                  <div 
                      key = {item.id} 
                      className="h-[300px] w-[240px] relative group cursor-pointer" onClick={() => {handleTrailler(item.id)}}>
                      <div className="group-hover:scale-110 transition: duration-200 ease-linear w-full h-full">
                          <div className="absolute top-0 left-0 w-full h-full bg-black/50"/>
                          <img src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`} alt={item.title} className="w-full h-full object-cover" />
                          <div className="absolute bottom-2 left-3">
                              <p className="uppercase text-md">{item.title || item.original_title}</p>
                          </div>
                      </div>
                  </div>
              ))}
        </Carousel>;

    </div>
  )
}

MovieList.propTypes = {
    title: Proptypes.string,
    data: Proptypes.array
}

export default MovieList