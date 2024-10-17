import iconRating from '../assets/rating.png'
import iconRatingHalf from '../assets/rating-half.png'
import imgTemp from '../assets/temp-1.jpeg'
import iconPlay from '../assets/play-button.png'

const Banner = () => {
  return (
    <div className="w-[100%] h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-20">
        </div>


        <div className="w-full h-full flex items-center justify-center space-x-[30px] p-12 relative z-20">
            <div className='flex flex-col space-y-5 items-baseline w-[50%]'>
                <p className="text-white bg-gradient-to-r from-red-500 to-red-300 py-2 px-4 text-md">TV Show</p>
                <div className="flex flex-col ">
                    <h2 className="text-white text-3xl p-2">Love heals</h2>
                    <div className="flex items-center space-x-3 p-2">
                        <img src={iconRating} alt="rating" className="w-6 h-6"/>
                        <img src={iconRating} alt="rating" className="w-6 h-6"/>
                        <img src={iconRating} alt="rating" className="w-6 h-6"/>
                        <img src={iconRating} alt="rating" className="w-6 h-6"/>
                        <img src={iconRatingHalf} alt="rating" className="w-6 h-6"/>
                    </div>
                    <p className='text-white p-2'>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero.</p>
                    <div className='flex items-center space-x-4'>
                        <button className='bg-black text-white py-2 px-4 font-bold'>View detail</button>
                        <button className='bg-red-600 text-white py-2 px-4 font-bold'>Watch Movie</button>
                    </div>
                </div>
            </div>

            <div className='w-[50%] flex items-center justify-center'>
                <div className='w-[300px] h-[400px] relative group'>
                    <img src={imgTemp} alt="temp" className='w-full h-full object-cover'/>
                    <div className='w-full h-full top-0 left-0 absolute flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-80 transition-opacity: duration-200 ease-linear cursor-pointer'>
                        <img src={iconPlay} alt='play' className='w-16 h-16 z-20'/>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Banner