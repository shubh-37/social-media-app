import { createContext, useEffect} from "react";

const postContext = createContext();

export default function PostContextProvider({children}){
  async function getAllPosts(){
    try {
      const response = await fetch("/api/posts");
      const data = await response.json()
      console.log(data);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getAllPosts();
  }, [])
  return (
    <postContext.Provider>{children}</postContext.Provider>
  )
}