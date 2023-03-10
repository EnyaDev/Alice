import { createContext } from "react";

export const userContext = createContext({ user: "anonymous" });

function UserProvider(props) {
  const user = "Melissa";
  const logedin = true;
  function test() {
  };

  return (
    <userContext.Provider value={{ user, logedin, test }}>
      {props.children}
    </userContext.Provider>
  );
}

export { UserProvider };