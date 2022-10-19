import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AttributePage from "./components/AttributePage";
import CoverPage from "./components/CoverPage";
import Header from "./components/Header";
import Page from "./components/Page";
import { DATA } from "./data/ContentData";

function App() {
  const content = DATA.content;

  const [toggler, setToggler] = useState(false);
  const [fontsize, setFontsize] = useState(
    localStorage.getItem("font") ? localStorage.getItem("font") : "16"
  );
  const [fontsizeP, setFontsizeP] = useState(14);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "lite"
  );
  const [lastRead, setLastRead] = useState(localStorage.getItem("lastRead"));

  useEffect(() => {
    setFontsizeP(Math.round(fontsize - 6) * 10);
  }, [fontsize]);

  useEffect(() => {
    toggler
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggler]);

  useEffect(() => {
    localStorage.setItem("theme", `${theme}`);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("font", `${fontsize}`);
  }, [fontsize]);

  useEffect(() => {
    localStorage.setItem("lastRead", `${lastRead}`);
  }, [lastRead]);

  return (
    <Container>
      <div className={`app ${theme}`}>
        <Header
          setToggler={setToggler}
          toggler={toggler}
          lastRead={lastRead}
          fontsizeP={fontsizeP}
          fontsize={fontsize}
          setFontsize={setFontsize}
          theme={theme}
          setTheme={setTheme}
          content={content}
        ></Header>
        <Body>
          <>
            {DATA.coverPages &&
              Array.isArray(DATA.coverPages) &&
              DATA.coverPages.length > 0 &&
              React.Children.toArray(
                DATA.coverPages.map((page) => (
                  <>
                    {page.type === "cover" ? (
                      <CoverPage
                        alt={page.alt}
                        src={page.src}
                        type={page.contentType}
                        data={page.data}
                      />
                    ) : (
                      <AttributePage data={page.data} />
                    )}
                  </>
                ))
              )}
          </>

          {React.Children.toArray(
            content.map((data) => (
              <Page
                data={data}
                fontsize={fontsize}
                lastRead={lastRead}
                setLastRead={setLastRead}
              />
            ))
          )}
        </Body>
      </div>
    </Container>
  );
}

export default React.memo(App);

const Body = styled.main`
  display: grid;
`;

const Container = styled.div`
  .bg-glass {
    background: var(--nav-bg);
    backdrop-filter: blur(30px);
  }
  .app {
    min-height: 100vh;
    background-color: var(--bg);
    color: var(--color);
  }
`;
