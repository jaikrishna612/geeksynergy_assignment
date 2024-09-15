// import  { useEffect, useState } from 'react'

// const Movieslist = () => {
//   const [movies, setMovies] = useState([])
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch('https://hoblist.com/api/movieList', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             category: 'movies',
//             language: 'kannada',
//             genre: 'all',
//             sort: 'voting',
//           }),
//         })

//         if (!response.ok) {
//           throw new Error('Failed to fetch data')
//         }

//         const data = await response.json()
//         setMovies(data)
//       } catch (error) {
//         setError(error.message)
//       }
//     }

//     fetchMovies()
//   }, []) 
//   return (
//     <div>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {movies.map((movie, index) => (
//             <li key={index}>{movie.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Movieslist
import React from 'react'

function Movieslist() {
  return (
    <div>Movieslist</div>
  )
}

export default Movieslist