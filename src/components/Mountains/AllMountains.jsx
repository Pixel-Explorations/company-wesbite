import MountainZero from "./MountainZero";
import MountainOne from "./MountainOne";
import MountainTwo from "./MountainTwo";
import MountainThree from "./MountainThree";
import MountainFour from "./MountainFour";
import MountainFive from "./MountainFive";
import { Component } from "react";

class AllMountains extends Component {
    render() {
      return (
        <div>
          <MountainZero />
          <MountainTwo />
          <MountainOne />
          <MountainFive />
          <MountainThree />
          <MountainFour />
        </div>
      );
    }
  }
     
  export default AllMountains;