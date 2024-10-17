import Proptypes from 'prop-types'
import { useContext } from 'react'
import { MovieContext } from "../context/MovieProvider";

const MovieSearch = ({title, data}) => {

    const {handleTrailler} = useContext(MovieContext)
    
    // const handleTrailler = async (id) => {
    //     setTraillerKey('')
    //     try {
    //         const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    //             }
    //         }

    //         const movieKey = await fetch(url, options)
    //         const data = await movieKey.json()
    //         setTraillerKey(data.results[0].key)
    //         setModalIsOpen(true)
    //     } catch(err) {
    //         setModalIsOpen(false)
    //         console.log(err)
    //     }
    // }
    

    return (
        <div className="text-white p-8 mb-10">

            <h2 className="uppercase font-bold text-xl mb-5">{title}</h2>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
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
            </div>


        </div>
    )
}

MovieSearch.propTypes = {
  title: Proptypes.string,
  data: Proptypes.array
}

export default MovieSearch