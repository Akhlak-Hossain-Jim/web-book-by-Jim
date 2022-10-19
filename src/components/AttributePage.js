import React from "react";
import styled from "styled-components";

export default function AttributePage({ data }) {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.section`
  min-height: 100vh;
  text-align: center;
  padding: 36px 24px;
`;
