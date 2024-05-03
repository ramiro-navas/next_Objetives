'use client'
import React, { createContext, useContext, useState } from "react";

type ContextType = {//*context's type example
  hi: string;//*to string 
  setHi: (objetive: string) => void;//*to functions
}

const AppContext = createContext<ContextType>({
  hi: "",//*initializing the value of hi
  setHi: ()=>{}//*initializing the function
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [hi, setHi] = useState("hello, world!");

  return (
    <AppContext.Provider value={{
       hi,
       setHi, 
    }}>
      {children}
    </AppContext.Provider>
    );
};

export const useAppContext = () =>{//*it's exported for might to use the context
  return useContext(AppContext);
}
