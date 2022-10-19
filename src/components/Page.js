import React from "react";
import styled from "styled-components";

export default function Page({ fontsize, data, lastRead, setLastRead }) {
  return (
    <Container style={{ fontSize: `${fontsize}px` }}>
      <div className="page_container">
        {data.chapter && <h2>{data.chapter}</h2>}
        {data.name && <h1 style={{ textAlign: "center" }}>{data.name}</h1>}
        {data.pages &&
          React.Children.toArray(
            data.pages.map((content) => (
              <div className="page" id={content.pageNo}>
                {React.Children.toArray(
                  content.articles.map((text) => (
                    <article style={{ fontSize: `${fontsize}px` }}>
                      {text.includes("$b$") ? (
                        <p>
                          {React.Children.toArray(
                            text.split("$b$").length > 1 ? (
                              text
                                .split("$b$")
                                .map((item, index) =>
                                  index % 2 !== 0 ? (
                                    <strong>{item}</strong>
                                  ) : (
                                    item
                                  )
                                )
                            ) : (
                              <strong>{text.replace("$b$")}</strong>
                            )
                          )}
                        </p>
                      ) : text.includes("$a$") ? (
                        <a href={text.replace("$a$", "")}>
                          {text.replace("$a$", "")}
                        </a>
                      ) : text.includes("^") ? (
                        <p>
                          {[
                            ...Array(
                              text.split("").filter((da) => da === "^").length *
                                4
                            ).keys(),
                          ].map((s) => (
                            <>&nbsp;</>
                          ))}
                          {text.replaceAll("^", "")}
                        </p>
                      ) : (
                        <p
                          style={{
                            textAlign: `${
                              text === "• • •" ? "center" : "left"
                            }`,
                            padding: `${text === "• • •" ? "20px" : ""}`,
                          }}
                        >
                          {text}
                        </p>
                      )}
                      <br />
                    </article>
                  ))
                )}
                <em className="page-no">Page no: {content.pageNo}</em>
                <div
                  className="lastRead"
                  role="button"
                  tabIndex="0"
                  onClick={() => setLastRead(content.pageNo)}
                >
                  {lastRead === content.pageNo ? (
                    "Marked"
                  ) : (
                    <>
                      Click to mark this page
                      <br /> as last read
                    </>
                  )}
                </div>
                <span className="pageNo" id={`${content.pageNo}l`}></span>
              </div>
            ))
          )}
      </div>
    </Container>
  );
}

const Container = styled.section`
  & h1,
  & h2,
  & h3 {
    text-align: center;
    text-transform: uppercase;
  }
  max-width: 1000px;
  .page {
    &_container {
      margin: 20px auto;
      .page {
        width: 100%;
        min-height: 140vh;
        padding: 50px;
        position: relative;
        @media (max-width: 548px) {
          padding: 50px 0px;
        }
        article {
          span {
            width: 20px !important;
            padding: 20px;
          }
        }
        .page-no {
          position: absolute;
          right: 30px;
          bottom: 20px;
          font-size: 13px;
          @media (max-width: 548px) {
            bottom: 10px;
          }
        }
        .lastRead {
          position: absolute;
          bottom: 0;
          left: 20px;
          display: flex;
          align-items: center;
          padding: 5px;
          border-radius: 8px;
          font-size: 12px;
          border: 1px solid var(--color);
          text-align: center;
          transition: all 0.7s;
          cursor: pointer;
          p {
            width: 100%;
          }
        }
      }
    }
  }
`;
