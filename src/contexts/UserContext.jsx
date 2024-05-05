import { createContext, useContext, useReducer } from "react";

const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, {
    id: 0,
    name: "",
    identity: "",
    token: "",
    isLogined: false,
  });

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function userReducer(user, action) {
  switch (action.type) {
    case "login": {
      let newUser = { ...action.value, isLogined: true };

      localStorage.setItem("user", JSON.stringify(newUser));

      return newUser;
    }

    case "logout": {
      localStorage.setItem("user", null);
      return null;
    }

    default: {
      throw new Error(`操作錯誤：${action.type}`);
    }
  }
}
