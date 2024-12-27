import '../App.css';
import '../index.css';
import Section from '../components/Section.js';
import Footer from '../components/Footer.js';
import Home from '../components/Home.js';
import BackgroundVideo from '../components/BackgroundVideo.js';
import ImageGlobal from '../components/ImagesGlobal.js';
import AudioGlobal from '../components/AudioGlobal.js';

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
        audio:AudioGlobal.music1,
        link:""
    },
    {
        image:ImageGlobal.blaketheme,
        audio:AudioGlobal.blaketheme
    },
    {
        image:ImageGlobal.music2,
        audio:AudioGlobal.music2
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

function Main() {
  return (
    <div>

      <BackgroundVideo></BackgroundVideo>      

      <Home></Home>

      <Section isImage={true} list={gameSectionData} title="Game Projects"></Section>

      <Section isAudio={true} list={audioOriginalSectionData} title="Music Composition"></Section>

      <Section isAudio={true} list={audioRemixSectionData} title="Remixes and Arranges"></Section>

      <Section isVideo={true} list={videoSectionData} title="Video and Editing"></Section>

      <Footer emailAdress="danielsoaresalves294@gmail.com"></Footer>
      
    </div>


  );
}

export default Main;
