// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Home/Hero";
import Section2 from "./Home/Section2";
import Section3 from "./Home/Section3";
import Section4 from "./Home/Section4";
import Section5 from "./Home/Section5";
import Section6 from "./Home/Section6";
import Section7 from "./Home/Section7";
import Section8 from "./Home/Section8";
import Footer from "./Home/Footer";

// new import:
import AboutHero from "./About/AboutHero";
import AboutSection2 from "./About/AboutSection2";
import AboutSection3 from "./About/AboutSection3";
import AboutSection4 from "./About/AboutSection4";
import AboutSection5 from "./About/AboutSection5";
import AboutSection6 from "./About/AboutSection6";
import AboutSection7 from "./About/AboutSection7";
import AboutSection8 from "./About/AboutSection8";
import AboutSection9 from "./About/AboutSection9";
import AboutSection10 from "./About/AboutSection10";
import Footer2 from "./About/Footer2";

// new import
import ProjectHero from "./Projects/ProjectHero";
import ProjectSection2 from "./Projects/ProjectSection2";
import ProjectsSection3 from "./Projects/ProjectsSection3";
import Footer3 from "./Projects/Footer3";

// new import
import NewsHero from "./News/NewsHero";
import NewsSection2 from "./News/NewsSection2";
import NewsSection3 from "./News/NewsSection3";
import Footer4 from "./News/Footer4";

// new import
import WebflowHero from "./Webflow/WebflowHero";
import WebflowSection2 from "./Webflow/WebflowSection2";
import WebflowSection3 from "./Webflow/WebflowSection3";
import WebflowSection4 from "./Webflow/WebflowSection4";
import WebflowSection5 from "./Webflow/WebflowSection5";
import WebflowSection6 from "./Webflow/WebflowSection6";

// new import
import ServicesHero from "./Services/ServicesHero";
import TalkHero from "./Talk/TalkHero";
import TalkSection2 from "./Talk/TalkSection2";
import TalkSection3 from "./Talk/TalkSection3";

// 🆕 Add this import:
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      {/* 👇 This ensures the page always scrolls to top when route changes */}
      <ScrollToTop />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <AboutHero />
                <AboutSection2 />
                <AboutSection3 />
                <AboutSection4 />
                <AboutSection5 />
                <AboutSection6 />
                <AboutSection7 />
                <AboutSection8 />
                <Section6 />
                <Section8 />
                <Footer />
              </>
            }
          />

          <Route
            path="/projects"
            element={
              <>
                <ProjectHero />
                <ProjectSection2 />
                <Section8 />
                <Footer />
              </>
            }
          />

          <Route
            path="/news"
            element={
              <>
                <NewsHero />
                <NewsSection2 />
                <Section8 />
                <Footer />
              </>
            }
          />

          <Route
            path="/webflow"
            element={
              <>
                <WebflowHero />
                <WebflowSection2 />
                <WebflowSection3 />
                <WebflowSection4 />
                <WebflowSection5 />
                <WebflowSection6 />
                <Section7 />
                <Section8 />
                <Footer />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <ServicesHero />
                <Section8 />
                <Footer />
              </>
            }
          />

          <Route
            path="/talk"
            element={
              <>
                <TalkHero />
                <TalkSection2 />
                <Section7 />
                <TalkSection3 />
                <Footer />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
