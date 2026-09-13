// Student ID: 22001414

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import TourismInfo from "./components/TourismInfo22001414.jsx";
import ImgGallery from "./components/ImgGallery.jsx";
import MeetSteve from "./components/MeetSteve.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Activities from "./components/Activities.jsx";
import PopUp from "./components/PopUp.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <TourismInfo
        titleFirstPart="First Class"
        accentWord="Kiwiana"
        titleLastPart="Experience"
        subheading="When visiting New Zealand, theres a few places you must see before leaving and telling your mates about it!"
        videoUrl="https://www.youtube.com/embed/XCsMvEMX11Y?si=W0JmgduKHSnmRJcK"
      />
      <ImgGallery />
      <Activities />
      <MeetSteve />
      <ContactSection />
      <PopUp />
    </>
  );
}

export default App;
