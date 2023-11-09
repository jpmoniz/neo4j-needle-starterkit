import neo4j, { Driver } from "neo4j-driver";
/* import NEO4J_CONNECTION from "../../src/config.js"; */

const NEO4J_CONNECTION = {
  uri: import.meta.env.VITE_NEO4J_URI,
  user: import.meta.env.VITE_NEO4J_USER,
  password: import.meta.env.VITE_NEO4J_PASSWORD
};


let driver: Driver;

export async function setDriver (uri: string, user: string, password: string){
    try{
      driver = neo4j.driver(uri,  neo4j.auth.basic(user, password))
      const serverInfo = await driver.getServerInfo()
      localStorage.setItem("neo4j.connection", JSON.stringify({"uri":uri, "user":user, "password":password}))
      return true
    } catch (err){
      console.log(`Connection error\n${err}\nCause: ${err.cause}`)
      return false
    }
  }

export async function disconnect (){
    try{
        driver.close();
        return true;
    } catch (err){
    console.log(`Disconnection error\n${err}\nCause: ${err.cause}`)
      return false
    }
}