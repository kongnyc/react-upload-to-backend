import React, { useState } from 'react';
import DogsByBreed from './DogsByBreed';
import DogSelector from './DogSelector';

const DogApp =()=> {
  const [breed,setBreed] = useState("")


  const handleBreed = (breed) => setBreed(breed)
//   render() {
    // console.log(this.state);
    return (
      <div className="App">
      <DogSelector breed={breed} handleBreed={handleBreed }/>
      <DogsByBreed breed={breed} />
    </div>
  );
}
// }
 
export default DogApp;
// import React, { Component } from 'react';
// import DogsByBreed from './DogsByBreed';
// import DogSelector from './DogSelector';

// class DogApp extends Component {
//   state = { breed: "" }

//   handleBreed = breed => {
//     this.setState({ breed })
//   }
//   render() {
//     const { breed } = this.state; 
//     // console.log(this.state);
//     return (
//       <div className="App">
//       <DogSelector breed={breed} handleBreed={this.handleBreed }/>
//       <DogsByBreed breed={breed} />
//     </div>
//   );
// }
// }
 
// export default DogApp;