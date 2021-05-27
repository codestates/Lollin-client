import styled from "styled-components";

export const SearchBox = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  min-height: 20.5rem;
  /* 31.25rem; */
  padding: 3.75rem;
  background-color: black;
  height: 300px;
  z-index: 1;

  .foreGoundWrapper {
    position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    max-width: 95rem;
    height: 26vh;
    min-height: 0rem;
    /* 31.25rem; */
    margin: 0px auto;
  }
  .foreGroundVideoWrapper {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgb(7, 18, 26);
  }
  .foreGroundVideo {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .foreGroundPoster {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
  }
  .foreGroundStyle {
    position: absolute;
    inset: 1px;
    pointer-events: none;
  }
  .foreGroundCanvas {
    position: absolute;
    display: block;
    border: 1px solid #ffffff71;
    border-top-right-radius: 70px;
    height: 26vh;
    left: 8px;
    top: -12px;
    width: 100.5%;
    aspect-ratio: auto 764 / 688;
  }
  .foreGroundInner {
    width: 100%;
  }
  .foreGroundRow-Top {
    width: 100%;
    margin-top: 0.625rem;
    text-align: center;
  }
  .foreGroundLogo {
    display: inline-block;
    position: relative;
    width: 20vw;
    height: calc(17.6333vw);
    max-width: 215px;
    max-height: 215px;
  }
  .foreLogoImg {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0px;
    border-style: none;
  }
  .foreGroundRow-bottom {
    width: 100%;
    margin-top: 0.625rem;
    text-align: center;
  }
  .serchBoxInputBox {
    all: unset;
    position: relative;
    display: inline-block;
    min-width: 195px;
    height: 30px;
    padding: 0px;
    color: rgb(1, 1, 1);
    font-size: 0.8125rem;
    letter-spacing: 0.15em;
    font-weight: bold;
    background-color: white;
    border: 0px;
  }
`;

export const MainVideo = styled.video`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const BackWrapper = styled.section`
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  background: rgba(10, 130, 216, 0.301);
  .searchBoxBackVideo {
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .searchBoxStylePoster {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
    animation: 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards
      running bTKSmk;
  }
`;

export const MainBackVideo = styled.video`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: blur(20px);
`;
