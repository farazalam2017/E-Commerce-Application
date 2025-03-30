import { useState } from "react";
const User = (props) => {
  const [count] = useState(1);
  const [count2] = useState(2);
  const { name, location } = props;
  return (
    <div>
      <h1>Count :{count}</h1>
      <h1>Count :{count2}</h1>
      <h2>Member 1</h2>
      <h2>Name: {name}</h2>
      <h3>Position: SWE-1 </h3>
      <h3>Location: {location}</h3>
      <h4>Github : farazalam2017</h4>
    </div>
  );
};
export default User;
