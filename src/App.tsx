import { useState,useEffect} from 'react'
import moon from "./assets/images/icon-moon.svg"
import sun from "./assets/images/icon-sun.svg"
import logo from "./assets/images/logo.svg"
import './App.css'
import {ExtensionsArray} from "./data"
type display="All"|"Active"|"Inactive"
function App() {
  const[DisplaySelection,setDisplaySelection]=useState<display>("All")
  const[DLmode,setDLmode]=useState<boolean>(false)
function handlemode(){
  setDLmode(!DLmode);
  document.body.classList.toggle('light-mode');
}

const [extensions, setExtensions] = useState(ExtensionsArray);
function toggleExtension(targetName: string) {
  setExtensions((prevExtensions) =>
    prevExtensions.map((item) =>
      item.name === targetName ? { ...item, off_on: !item.off_on } : item
    )
  );

}
  function removeExtension(targetName:string){
      setExtensions((prevExtensions) =>
      prevExtensions.map((item) =>
      item.name === targetName ? { ...item, Remove: !item.Remove } : item
    )
  );
  }
const filteredExtensions = extensions.filter((item) => {
  if (item.Remove) return false; 
  if (DisplaySelection === "Active") return item.off_on === true;
  if (DisplaySelection === "Inactive") return item.off_on === false;
  return true; 
});

  return (
    <>
      <header>
        <div className="DLmode-div">
          <img src={logo} alt="logo-icon" />
          <button>
            <img
              src={DLmode ? moon : sun}
              alt="DL-icon"
              onClick={() => {
                handlemode();
              }}
            />
          </button>
        </div>
        <div className="display-div">
          <h1>Extensions List</h1>
          <div className="display-btns">
            <button
              className={DisplaySelection === "All" ? "red" : ""}
              onClick={() => setDisplaySelection("All")}
            >
              All
            </button>
            <button
              className={DisplaySelection === "Active" ? "red" : ""}
              onClick={() => setDisplaySelection("Active")}
            >
              Active
            </button>
            <button
              className={DisplaySelection === "Inactive" ? "red" : ""}
              onClick={() => setDisplaySelection("Inactive")}
            >
              Inactive
            </button>
          </div>
        </div>
      </header>
      <main>
        {filteredExtensions.map((item)=>
                <div className='extension-card' key={item.name}>
            <div className='extension-info'>
              <img src={item.img} alt="" />
              <div className='extension-description'>
                <h2>{item.name}</h2><pre>{item.description}</pre>
              </div>
            </div>
            <div className='operations'>
              <button onClick={()=>{removeExtension(item.name)}}>Remove</button>
             
              <label onClick={() => toggleExtension(item.name)} className={item.off_on?"red1":"gray"}>
                <span className={item.off_on?"red1":"white"}></span>
                <span className={item.off_on?"white":"gray"}></span>
              </label>
            </div>
          </div>
        )
    
        }
      </main>

      <footer>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/DUSKSHADE777">DUSK</a>.
      </footer>
    </>
  );
}

export default App
