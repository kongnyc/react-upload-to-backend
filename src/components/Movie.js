import React, { useState,useEffect } from 'react'
import axios from "axios"

const Movie =()=> {
    const [movies, setMovies]=useState([]);

    useEffect(()=>{
        const fetch = async()=>{
            try {
                let res= await axios.get('https://ghibliapi.herokuapp.com/films');
                setMovies(res.data)
            } catch (error) {
                setMovies([])
            }
         }
         fetch()
    },[]
    ) //add empty array, would run 1 time // no empty array would run all lifecycle

        let li= movies.map((movie,i)=>{
            return <li key={i}>{movie.title}</li>
        })
        return (
            <ul>
                {li}
            </ul>
        );
}

export default Movie;
// import React, { useState } from 'react'
// import axios from "axios"
// class Movie extends React.Component {
//     state = { 
//         movieList:[]
//      };

//      componentDidMount(){
//          this.fetch()
//      }

//      fetch = async()=>{
//         try {
//             let res= await axios.get('https://ghibliapi.herokuapp.com/films');
//             this.setState({movieList:res.data})
            
//         } catch (error) {
//             this.setState({movieList:[]})
//         }
//      }
     
    
//     render() {
//         let li= this.state.movieList.map((movie,i)=>{
//             return <li key={i}>{movie.title}</li>
//         })
//         return (
//             <ul>
//                 {li}
//             </ul>
//         );
//     }
// }

// export default Movie;