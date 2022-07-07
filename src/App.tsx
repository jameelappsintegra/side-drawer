import { useState } from 'react';
import './App.css';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Backdrop from './components/Backdrop';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const toggleHandler = (e: any) => {
    e.preventDefault();
    setSideDrawerOpen(!sideDrawerOpen)
  }
  const backdropClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }
  let backDrop;
  let sideDrawer;

  if (sideDrawerOpen) {
    backDrop = <Backdrop click={backdropClickHandler} />
    sideDrawer = <Drawer show={sideDrawerOpen} />
  }
  return (
    <div className='App'>
      <Header toggleHandler={toggleHandler} />
      {backDrop}
      {sideDrawer}
    </div>
  );
}

export default App;
