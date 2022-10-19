import React from "react";
import styled from "styled-components";

export default function CoverPage({ type, src, alt, data }) {
  return (
    <Container>
      {type && type === "image" ? (
        <div className="cover_pageImage">
          <img src={src && src} alt={alt && alt} />
        </div>
      ) : (
        <div className="cover_pageText">
          {data &&
            Array.isArray(data) &&
            data.length > 0 &&
            React.Children.toArray(
              data.map((d) =>
                d.includes("$h1$") ? (
                  <h1>{d.replace("$h1$", "")}</h1>
                ) : d.includes("$h2$") ? (
                  <h2>{d.replace("$h2$", "")}</h2>
                ) : d.includes("$h3$") ? (
                  <h3>{d.replace("$h3$", "")}</h3>
                ) : d.includes("$h4$") ? (
                  <h4>{d.replace("$h4$", "")}</h4>
                ) : d.includes("$h5$") ? (
                  <h5>{d.replace("$h5$", "")}</h5>
                ) : d.includes("$h6$") ? (
                  <h6>{d.replace("$h6$", "")}</h6>
                ) : d.includes("$a$") ? (
                  <a href={d.replace("$a$", "")}>{d.replace("$a$", "")}</a>
                ) : d.includes("$img$") ? (
                  <div className="image_box">
                    <img
                      className="image_box__img"
                      src={d.replace("$img$", "")}
                      alt={d.replace("$img$", "")}
                    />
                  </div>
                ) : d.includes("$b$") ? (
                  <p>
                    {React.Children.toArray(
                      d.split("$b$").length > 1 ? (
                        d
                          .split("$b$")
                          .map((item, index) =>
                            index % 2 !== 0 ? <strong>{item}</strong> : item
                          )
                      ) : (
                        <strong>{d.replace("$b$")}</strong>
                      )
                    )}
                  </p>
                ) : (
                  <p>{d}</p>
                )
              )
            )}
        </div>
      )}
      <div className="developed_by">
        <p>
          Developed By:{" "}
          <a href="http://ahjim.com" target="_blank" rel="noopener noreferrer">
            Akhlak Hossain Jim
          </a>
        </p>
      </div>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
  .cover {
    &_pageImage {
      flex: 1;
      width: 100%;
      height: 85%;
      & > img {
        height: 100%;
        width: auto;
        object-position: center;
      }
    }
    &_pageText {
      flex: 1;
      text-align: center;
      padding: 30px;
    }
  }
  .developed_by {
    text-align: center;
    p {
      display: inline;
      padding: 5px 10px;
      border-radius: 8px;
      font-weight: 900;
    }
  }
`;
