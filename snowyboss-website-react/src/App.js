import logo from './logo.svg';
import './App.css';

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

      <div class="projects-section">
          <div class="title-section">
              Game Projects
          </div>
          <div class="img-scroll-container">
              <a href="https://www.youtube.com/@sn0wyb0ss-26" target="_blank">
                  <img src={require("./assets/image/punchtildead.png")} alt="punchtildead"/>
              </a>
          </div>
      </div>

      <div class="projects-section">
          <div class="title-section">
              Video Editing
          </div>
          <div class="img-scroll-container">

              <iframe src="https://www.youtube.com/embed/0Skhpo4uqlI?si=L__F-e9qo2uN-KEf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/kIme9KZgxUM?si=CZBzhLgDSRZeRZig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/Ola54URoS3Q?si=5AHIit-Svc9b-Jhe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/mSUSMTagDpA?si=woyGQ0VNVbfcHsWu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
      </div>

      <div class="projects-section">
          <div class="title-section">
              Music Composition
          </div>
          <div class="img-scroll-container">

              <div class="audio-content">
                  <a href="https://youtu.be/4qBPIcz9ZZk?si=sD8Zs4NZBhdV82wc" target="_blank">
                      <img src={require("./assets/image/music1.png")} alt="punchtildead"/>
                  </a>
                  <audio controls loop> 
                      <source src={require("./assets/music/music1.mp3")} type="audio/mpeg"/>
                  </audio>
              </div>

              <div class="audio-content">
                      <a href="https://youtu.be/msYLcK4wRDM" target="_blank">
                          <img src={require("./assets/image/music2.png")} alt="punchtildead"/>
                      </a>
                      <audio controls loop> 
                          <source src={require("./assets/music/music2.mp3")} type="audio/mpeg"/>
                      </audio>
              </div>

          </div>
      </div>

      <div class="projects-section">
          <div class="title-section">
              Remixes and Arranges
          </div>
          <div class="img-scroll-container">

              <div class="audio-content">
                  <a href="https://youtu.be/ajBeX6_QgHs?si=1rw2SO1Ua3GDzEF-" target="_blank">
                      <img src={require("./assets/image/musicremix2.png")} alt="undertaleremix"/>
                  </a>
                  <audio controls loop> 
                      <source src={require("./assets/music/musicremix2.mp3")} type="audio/mpeg"/>
                  </audio>
              </div>

              <div class="audio-content">

                      <a href="https://youtu.be/XKsTujriv4o" target="_blank">
                          <img src={require("./assets/image/musicremix1.png")} alt="punchtildead"/>
                      </a>
                      <audio controls loop> 
                          <source src={require("./assets/music/musicremix1.mp3")} type="audio/mpeg"/>
                      </audio>
              </div>

              <div class="audio-content">

                  <a href="https://youtu.be/sZxBkmC1bMA?si=7IPCQNGvmx9e7koJ" target="_blank">
                      <img src={require("./assets/image/musicremix3.png")} alt="cavestoryremix"/>
                  </a>
                  <audio controls loop> 
                      <source src={require("./assets/music/musicremix3.mp3")} type="audio/mpeg"/>
                  </audio>
                  
              </div>
          </div>

      </div>

      <div class="contact">
          <h1>Contact</h1>
          <strong>Contact me at <span style={{color:"red"}}>danielsoaresalves294@gmail.com</span></strong>
      </div>
    </div>
  );
}

export default App;
