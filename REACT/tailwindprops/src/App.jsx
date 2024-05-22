import "./App.css";
import Card from "./Components/card";

function App() {

  // let myObj = {
  //   language : "js"
  // }

  // let newArr = [1,2,3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      {/* <Card name="webgod" someObj={{language:"js"}}/> */}
      {/* <Card name="webgod" someObj={myObj}/> */}
      {/* <Card name="webgod" someObj={newArr}/> */}

      <Card username="webgod" />
      <Card username="react master" btnText="Visit Me here for =>" />
      
    </>
  );
}

export default App;
