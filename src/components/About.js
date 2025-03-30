import React from "react";
import { Outlet } from "react-router-dom";
import UserClass from "./UserClass";
import User from "./User";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="About-div justify-center">
        <h1>About Team</h1>
        <UserClass name={"Faraz"} location={"Delhi"} />
      </div>
    );
  }
}

export default About;
