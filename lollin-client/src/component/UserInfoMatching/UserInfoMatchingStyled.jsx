import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 652px;
  height: 1152px;
  color: white;

  .title {
    font-size: 4rem;
    font-weight: bold;
    padding-bottom: 3rem;
  }

  .entireWrap {
    display: flex;
    flex-direction: column;

    place-items: center;
    width: 80%;
    min-width: 652px;
    height: 1300px;
    max-width: 1320px;
    background-color: #dadada;
  }
  .currGame {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    width: 621px;
    height: 81px;
    padding-bottom: 1px;
    /* border: 1px solid white; */
  }

  .currGameText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 1rem;
    font-weight: bold;
    color: #646464;
    padding: 4px;
  }
  .currGame-left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .currGame-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .Exsit {
    color: #239223;
    font-size: 1rem;
    text-align: center;
    .currId {
      font-size: 1.3rem;
      color: #414141;
    }
  }
  .noExsit {
    color: black;
    font-size: 2rem;
  }
  .noExsitinner {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .noExsitSub {
    color: red;
    font-size: 0.7rem;
    text-align: center;
  }
  .searchArea {
    display: flex;
    width: 250px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 30px;
    box-shadow: 3.5px 3.5px 2px 0.5px #f7bd00dc;
    border-top: 1px solid #dfab00;
    border-left: 1px solid #dfab00;
    border-radius: 5px;
    margin-right: 3px;
    margin-bottom: 4px;
  }
  .searchInput {
    all: unset;
    width: 60%;
    font-size: 0.5rem;
    margin-left: 5px;
    color: #949494;
  }
  .searchInput:focus {
    all: unset;
    width: 60%;
    font-size: 0.7rem;
    margin-left: 10px;
    color: #4f4f4f;
    &:focus::-webkit-input-placeholder {
      font-size: 0rem;
      color: white;
    }
  }
  .searchBtn {
    all: unset;
    width: 20%;
    height: 20px;
    text-align: center;
    background-color: #f7bd00;
    border-radius: 3px;
    font-weight: bold;
    margin-right: 5px;
  }

  .searchBtn:hover {
    cursor: pointer;
  }

  .infoArea-right {
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center;
    align-items: center;
    width: 100%;
    height: 98.5%;
    border: 1px solid gray;
  }
  .currMatching {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
    height: 700px;
  }

  .allyTeam {
    display: flex;
    height: 270px;
    border: 1px solid #3d95e5;
    margin: 1rem 0;
  }
  .oppTeam {
    display: flex;
    height: 280px;
    border: 1px solid #ee5952;
    margin: 1rem 0;
  }

  .allyNameTag {
    writing-mode: vertical-lr;
    text-align: center;
    background-color: #3d95e5;
    font-weight: bold;
  }
  .oppNameTag {
    writing-mode: vertical-lr;
    text-align: center;
    background-color: #ee5952;
    font-weight: bold;
  }
  .teamWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 600px;
  }
  .allyWrapper {
  }
  .oppWrapper {
  }

  .player {
    display: grid;
    grid-template-rows: 4fr 0.8fr;
  }

  .playerImg {
    position: absolute;
    width: 105%;
    right: -5px;
    z-index: 1;
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  .playerNameTag {
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    font-weight: bold;
    width: 100%;
    background-color: #dadada;
    /* background-color: #a3cfec; */
    color: #484848;
    z-index: 3;
  }
  .allyHover:hover {
    background-color: #3d95e5;
    cursor: pointer;

    .playerNameTag {
      background-color: #3d95e5;
      border: 1px solid #3d95e5;
      /* background-color: #a3cfec; */
    }
    .playerImg {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
  .oppHover:hover {
    background-color: #ee5952;
    cursor: pointer;

    .playerNameTag {
      background-color: #ee5952;
      border: 1px solid #ee5952;
      /* background-color: #a3cfec; */
    }
    .playerImg {
      transform: scale(1.15);
      transition: transform 0.5s;
    }
  }

  .stylePlayer {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .infoArea {
    display: grid;
    grid-template-rows: 5fr 1fr;
    width: 622px;
    height: 340px;
  }
  .infoArea-top {
  }
  .infoArea-bottom {
    display: flex;
    justify-content: center;
    place-items: center;
    align-items: center;
    width: 100%;
  }
  .commentArea {
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 30px;
    box-shadow: 3.5px 3.5px 2px 0.5px #f7bd00dc;
    border-top: 1px solid #dfab00;
    border-left: 1px solid #dfab00;
    border-radius: 5px;
  }
  .commentInput {
    all: unset;
    width: 60%;
    font-size: 0.5rem;
    margin-left: 5px;
    color: #949494;
  }
  .commentInput:focus {
    all: unset;
    width: 60%;
    font-size: 0.7rem;
    margin-left: 10px;
    color: #4f4f4f;
    &:focus::-webkit-input-placeholder {
      font-size: 0rem;
      color: white;
    }
  }
  .commentBtn {
    all: unset;
    width: 90px;
    height: 20px;
    text-align: center;
    background-color: #f7bd00;
    border-radius: 3px;
    font-weight: bold;
    margin-right: 5px;
  }

  .commentBtn:hover {
    cursor: pointer;
  }
`;
