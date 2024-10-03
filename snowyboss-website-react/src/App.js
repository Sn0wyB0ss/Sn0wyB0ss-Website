import './App.css';
import './index.css';
import Section from './components/Section.js';
import Footer from './components/Footer.js';
import ImageGlobal from './components/ImagesGlobal.js';
import AudioGlobal from './components/AudioGlobal.js';

const gameSectionData = [
    {
        image:ImageGlobal.punchtildead,
        altText:"punchtildead",
        link:"https://sn0wyb0ss.itch.io/punch-till-dead"
    },
];

const videoSectionData = [
    {
        link:"https://www.youtube.com/embed/kIme9KZgxUM?si=CZBzhLgDSRZeRZig",
    },
    {
        link:"https://www.youtube.com/embed/Ola54URoS3Q?si=5AHIit-Svc9b-Jhe",
    },
    {
        link:"https://www.youtube.com/embed/mSUSMTagDpA?si=woyGQ0VNVbfcHsWu",
    },
];

const audioOriginalSectionData = [
    {
        image:ImageGlobal.music1,
        audio:AudioGlobal.music1
    },
    {
        image:ImageGlobal.musicremix2,
        audio:AudioGlobal.musicremix2
    }
];

const audioRemixSectionData = [
    {
        image:ImageGlobal.musicremix2,
        audio:AudioGlobal.musicremix2
    },
    {
        image:ImageGlobal.musicremix1,
        audio:AudioGlobal.musicremix1
    },
    {
        image:ImageGlobal.musicremix3,
        audio:AudioGlobal.musicremix3
    },
];

function App() {
  return (
    <div>

      <video autoplay muted loop class="background-video">
          <source src={require("./assets/video/TileEditor.mp4")} type="video/mp4"/>
      </video>

      <div class="home">
            <div class="logo">
              <img src={require("./assets/image/logotest.png")} alt="github"/>
            </div>
            <div class="brief">
              Daniel Soares Alves - 19 Years Old - Brazillian
            </div>         
            <div class="bio">
              
              <div class="bio-text">
                  Programmer, video editor, 
                  <br/>
                  music composer.
                  <br/>
                  <br/>
                  Gamedev in my free time.
              </div>

              <div class="bio-links">
                  <a href="https://github.com/Sn0wyB0ss" target="_blank">
                      <img src={require("./assets/image/github.png")} alt="github"/>
                  </a>
                  <a href="https://sn0wyb0ss.itch.io/" target="_blank">
                      <img src={require("./assets/image/itchoio.png")} alt="itch.io"/>
                  </a>
                  <a href="https://www.linkedin.com/in/daniel-soares-alves-482105304/" target="_blank">
                      <img src={require("./assets/image/linkedin.png")} alt="linkedin"/>
                  </a>
                  <a href="https://www.youtube.com/@sn0wyb0ss-26" target="_blank">
                      <img src={require("./assets/image/youtube.png")} alt="youtube"/>
                  </a>
              </div>

            </div>
      </div>

      <Section isImage={true} list={gameSectionData} title="Game Projects"></Section>

      <Section isVideo={true} list={videoSectionData} title="Game Projects"></Section>

      <Section isAudio={true} list={audioOriginalSectionData} title="Music Composition"></Section>

      <Section isAudio={true} list={audioRemixSectionData} title="Remixes and Arranges"></Section>

      <Footer emailAdress="danielsoaresalves294@gmail.com"></Footer>
      
    </div>


  );
}

export default App;
