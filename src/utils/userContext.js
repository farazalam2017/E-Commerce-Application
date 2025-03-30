const { createContext } = require("react");

const userContext = createContext({
  loggedInUser: "Faraz Alam ",
});

export default userContext;
