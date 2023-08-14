
import './App.css';
import React, {useState} from 'react';
import styles from './app.module.css';
import Banner from './banner/Banner';
import Tarjeta from './tarjeta/Tarjeta';
import Boton from './boton/Boton';
import ReactAudioPlayer from 'react-audio-player';
import historia from './audio/historia.mp3';



function App() {
  const [ind, setIndex] = useState(0);
  const [verAudio, setVerAudio] = useState(false);
  const handleClick = () => {
    setIndex(0);
  }

  
  return (
    <div className="App">
      <div className={styles.container}>
        <Banner/>
        <Tarjeta index={ind}/>
        <div>
          {ind !==0 && <Boton texto={'Anterior'} cambiar={setIndex} ind={ind} subir={false} />}
          {ind !== 11 && <Boton texto={'Siguiente'} cambiar={setIndex} ind={ind} subir={true} />}
          {ind === 11 && <button className={styles.boton} onClick={handleClick}>Reset</button>}
        </div>
        <div>
          {!verAudio && <button className={styles.boton} onClick={()=> setVerAudio(true)}>Escuchar historia original</button>}
          {verAudio && <button className={styles.boton} onClick={()=> setVerAudio(false)}>Ocultar reproductor</button>}
        </div>
        <div>
          {verAudio &&
          <ReactAudioPlayer
          src={historia}
          controls
          autoPlay
          />}
        </div>
      </div>
      
    </div>
  );
}

export default App;
