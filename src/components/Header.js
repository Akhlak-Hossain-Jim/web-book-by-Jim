import React from "react";
import styled from "styled-components";

export default function Header({
  setToggler,
  toggler,
  lastRead,
  fontsizeP,
  fontsize,
  setFontsize,
  theme,
  setTheme,
  content,
}) {
  return (
    <Container>
      <Ham onClick={() => setToggler(!toggler)} tabIndex="0">
        <div
          id="ham"
          className={!toggler ? "hamInner" : "hamInner active"}
        ></div>
      </Ham>
      {toggler ? (
        <Nav>
          <div className="container bg-glass">
            <div className="child">
              <div className="controls">
                <div>
                  <div
                    className="range-wrapper"
                    onClick={() => setToggler(false)}
                  >
                    <a
                      href={`#${lastRead}`}
                      style={{
                        textAlign: "center",
                        textDecoration: "none",
                        fontWeight: "700",
                      }}
                    >
                      Last Read
                    </a>
                  </div>
                  <div className="range-wrapper">
                    <p>Font Size: {fontsizeP}%</p>
                    <div className="range-wrapper_range">
                      <div
                        className="range-wrapper_range_bar"
                        style={{ width: `${fontsizeP - 80}%` }}
                      >
                        <div className="range-wrapper_range_bar_thumb"></div>
                      </div>
                      <input
                        type="range"
                        min="14"
                        max="24"
                        value={fontsize}
                        step="1"
                        onChange={(e) => setFontsize(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="theme">
                  <p>
                    Current theme:
                    <br />
                    <strong> {theme}</strong>
                  </p>
                  <p>Chose a theme</p>
                  <div className="box">
                    <span
                      className="color-lite"
                      onClick={() => setTheme("lite")}
                    ></span>
                    <span
                      className="color-old"
                      onClick={() => setTheme("old")}
                    ></span>
                    <span
                      className="color-dark"
                      onClick={() => setTheme("dark")}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="index">
                <h1>Contents</h1>
                <a onClick={() => setToggler(false)} href="#titlePage">
                  Title Page
                </a>
                {React.Children.toArray(
                  content.map((data) => (
                    <a
                      onClick={() => setToggler(false)}
                      href={`#${data.chapter.toLowerCase()}`}
                    >
                      {data.chapter}
                      {data.chapterName && `. ${data.chapterName}`}
                      {data.chapterRange && ".........."}
                      {data.chapterRange && data.chapterRange}
                    </a>
                  ))
                )}
              </div>
            </div>
          </div>
        </Nav>
      ) : null}
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1200;
  @media (max-width: 548px) {
    top: 5px;
    right: 5px;
  }
`;
const Ham = styled.div`
  margin: 20px;
  position: relative;
  display: grid;
  place-items: center !important;
  width: 30px;
  height: 30px;
  z-index: 120;
  outline: none;
  border: none;
  .hamInner {
    position: absolute;
    top: 50%;
    right: 0px;
    left: 0;
    width: 30px;
    height: 3px;
    border-radius: 4px;
    background-color: var(--gray-dark);
    transform: translateY(-50%);
    transition: all 0.15s;
    &::after {
      bottom: -10px;
      transform: rotate(0deg);
      content: "";
      position: absolute;
      left: 0;
      right: 0px;
      width: 30px;
      height: 3px;
      border-radius: 4px;
      background-color: var(--gray-dark);
    }
    &::before {
      top: -10px;
      opacity: 1;
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0px;
      width: 30px;
      height: 3px;
      border-radius: 4px;
      background-color: var(--gray-dark);
    }
    &.active {
      top: 50%;
      bottom: 0;
      width: 0;
      height: 0;
      background-color: var(--gray-dark);
      transform: translateX(-50%);
      &::after {
        top: 0;
        left: 0;
        width: 30px;
        height: 2px;
        transform: rotate(45deg);
        transform-origin: center;
      }
      &::before {
        top: 0;
        left: 0;
        width: 30px;
        height: 2px;
        transform: rotate(-45deg);
        transform-origin: center;
      }
    }
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  height: 100vh;
  width: min(600px, 100%);
  z-index: 100;
  .container {
    position: relative;
    overflow: auto;
    overflow-x: hidden;
    height: 100%;
    .child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 20px;
      padding-top: 80px;
      color: var(--color);
      .controls {
        display: grid;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        input[type="text"] {
          max-width: 200px;
          min-width: 150px;
          padding: 10px 15px;
          font-size: 16px;
          margin: 10px;
          border: none;
          outline: none;
          border-radius: 50px;
          background: var(--bg);
          box-shadow: var(--shadow);
        }
        .range-wrapper {
          max-width: 200px;
          min-width: 150px;
          display: grid;
          margin: 10px;
          padding: 15px;
          border: none;
          outline: none;
          border-radius: 20px;
          background: var(--bg);
          box-shadow: var(--shadow);
          p {
            text-align: center;
          }
          a {
            color: var(--color);
          }
          &_range {
            background-color: var(--color);
            margin: 10px auto;
            height: 15px;
            width: 100%;
            border-radius: 15px;
            position: relative;
            &_bar {
              border-radius: 15px;
              height: 100%;
              background-color: var(--gray-dark);
              display: flex;
              justify-content: flex-end;
              &_thumb {
                height: 100%;
                aspect-ratio: 1/1;
                border-radius: 50%;
                background-color: var(--gray-dark);
                box-shadow: var(--gray-dark-shadow);
                transform: scale(1.3) translateX(6px);
              }
            }
            & > input {
              opacity: 0;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              position: absolute;
              &::-webkit-slider-runnable-track {
                background-color: #ffffff;
              }
              &::-webkit-slider-thumb {
                background-color: azure;
                height: 20px;
                width: 39px;
              }
            }
          }
        }
        .theme {
          max-width: 200px;
          min-width: 150px;
          margin: 10px;
          padding: 15px;
          grid-gap: 15px;
          border-radius: 20px;
          background: var(--bg);
          box-shadow: var(--shadow);
          p {
            text-transform: capitalize;
            text-align: center;
          }
          .box {
            margin: 10px 0 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: var(--shadow);
            .color {
              &-old {
                padding: 20px;
                background-color: var(--old);
              }
              &-lite {
                padding: 20px;
                background-color: var(--light);
              }
              &-dark {
                padding: 20px;
                background-color: var(--dark);
              }
            }
          }
        }
      }
      .index {
        align-self: flex-start;
        margin: 20px 100px 0;
        text-align: left;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: flex-start;
        align-items: flex-start;
        overflow: auto !important;
        height: 100%;
        padding-bottom: 50px;
        @media (max-width: 768px) {
          margin: 20px 60px 0;
        }
        @media (max-width: 548px) {
          margin: 20px 10px 0;
        }
        a {
          padding: 3px 10px;
          color: teal;
          display: flex;
        }
      }
    }
  }
`;
