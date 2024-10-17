import React from 'react'
import { createContext } from "react";
import Modal from 'react-modal';
import YouTube from "react-youtube";
import PropType from 'prop-types'

const MovieContext = new createContext()


const opts = {
  height: '390',
  width: '640',
  playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
  },
};


const MovieProvider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const [traillerKey, setTraillerKey] = React.useState('')


    const handleTrailler = async (id) => {
        setTraillerKey('')
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            }
    
            const movieKey = await fetch(url, options)
            const data = await movieKey.json()
    
            // Check if results array exists and has elements
            if (data.results && data.results.length > 0) {
                setTraillerKey(data.results[0].key)
                setModalIsOpen(true)
            } else {
                console.log("No trailler found")
                setModalIsOpen(false) // Close modal if no trailer is available
            }
        } catch (err) {
            setModalIsOpen(false)
            console.log(err)
        }
    }
    

    return (
        <MovieContext.Provider value={{handleTrailler}}>
            {children}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                  overlay: {
                      position: 'fixed',
                      zIndex: 9999
                  }, 
                  content: {
                      top: "50%",
                      left: "50%",
                      right: "auto",
                      bottom: "auto",
                      marginRight: "-50%",
                      transform: "translate(-50%, -50%)",
                  }
              }}
              contentLabel="Example Modal">
                  <YouTube videoId={traillerKey} opts={opts}/>
          </Modal>
        </MovieContext.Provider>
    )

}

MovieProvider.propTypes = {
    children: PropType.node
}


export {MovieProvider, MovieContext}
