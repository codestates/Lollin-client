import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { initData } from "./ChampInitData.jsx";
import {
  ChampDetailArea,
  BackImg,
  RenderArea,
  Wrap,
  SkillsArea,
  ChampDetailImg,
  ChampSkillWeb,
  ChampName,
  CahmpDetailName,
  ChampDescText,
  ChampDescName,
  ChampAllytips,
  ChampEnemytips,
  ChampTipsArea,
  ChampRecommendedBuild,
} from "./ChampDetailStyled.jsx";
const cheerio = require("cheerio");
const server = process.env.REACT_APP_SERVER_URL;

const ChampDetail = ({ champPriId }) => {
  const location = useLocation();
  const [champData, setChampData] = useState(initData);
  const [skillIndex, setSkillIndex] = useState(0);
  const [resultId, setResultId] = useState(champPriId);
  const [oppName, setOppName] = useState("");
  const [runeEls, setRuneEls] = useState([]);
  const [runeUrls, setRuneUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [champImg, setChampImg] = useState(false);
  const [runeDesc, setRuneDesc] = useState(null);

  const handleSkillIndex = (index) => {
    setSkillIndex(index);
  };

  useEffect(() => {
    const handleResultId = () => {
      console.log(location.state);
      if (location.state !== undefined) {
        setResultId(location.state.id);
      }

      // else {
      //   setResultId(champPriId);
      // }
    };
    handleResultId();
  }, [location.state]);

  useEffect(async () => {
    await axios
      .get(`${server}/champions/detail?id=${resultId}`)
      .then((res) => {
        setChampData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        throw err;
      });

    axios
      .get(
        `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${resultId}_0.jpg`
      )
      .then((res) => {
        setChampImg(res.config.url);
        setIsLoading(true);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [resultId]);

  const handleOppSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/recommend/build?champ1=${resultId}&champ2=${oppName}`
      )
      .then((response) => {
        // setRuneObject(response.data)
        const $ = cheerio.load(response.data);
        let runeEls = $(" span.rune-imgbox.active > div");
        setRuneEls(runeEls); //@@@@@@@@@@@@@@go to useEffect
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(async () => {
    let urls = [];
    for (let runeEl of runeEls) {
      let runeClass = runeEl.attribs.class;
      let runeId = runeClass.split(" ")[1].split("_")[2];
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/rune?id=${runeId}`)
        .then((resJson) => {
          let url = resJson.data.icon;
          urls.push(url);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    let desc = [];
    for (let runeEl of runeEls) {
      let attribsDesc = [];
      for (let key in runeEl.attribs) {
        attribsDesc.push(runeEl.attribs[key]);
      }
      desc.push(attribsDesc);
    }
    setRuneDesc(desc);

    setRuneUrls(urls); //@@@@@@@@@@@@@@@@@@@@@@urls set
    // setIsLoading(false);
  }, [runeEls]);
  const handleSkillsDescription = () => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: champData.skills[skillIndex].description,
        }}
      ></div>
    );
  };

  return (
    <ChampDetailArea className="champDetail">
      {isLoading ? (
        <div>
          {champImg ? (
            <BackImg className="champDbBackImg" src={champImg} />
          ) : (
            "noData"
          )}
          {/* <BackImg
            className="champDbBackImg"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champPriId}_0.jpg`}
          /> */}
          <Wrap>
            <RenderArea className="renderWrapper">
              <ChampName className="champDetailNameArea">
                {champImg ? (
                  <ChampDetailImg className="champDetailImg" src={champImg} />
                ) : (
                  <div className="champDetailImgAlt" />
                )}

                <CahmpDetailName className="cahmpDetailName">
                  {resultId}
                </CahmpDetailName>
              </ChampName>

              <SkillsArea className="champDetailSkills">
                <section>
                  <div className="detailSkill">
                    {champData.skillsimg.map((ele, index) => (
                      <div className="detailSkills" key={index}>
                        <img
                          className="detailSkillsImg"
                          src={ele}
                          alt={champData.skills[index]}
                          key={champData.skills[index]}
                          onClick={() => {
                            handleSkillIndex(index);
                          }}
                        ></img>
                      </div>
                    ))}
                  </div>
                  <div className="detailDesc">
                    <ChampDescName>
                      {champData.skills[skillIndex].name}
                    </ChampDescName>
                    <br></br>
                    <ChampDescText className="detailDescEffect">
                      {handleSkillsDescription()}
                    </ChampDescText>
                  </div>
                </section>

                {champData.skillwebm.map((ele, idx) => (
                  <ChampSkillWeb
                    className={idx === skillIndex ? "isDisplay" : "noDisplay"}
                    src={ele}
                    width="480px"
                    muted
                    autoPlay
                    loop
                  ></ChampSkillWeb>
                ))}
                {/* <ChampSkillWeb
              className="champDetailWebm"
              src={champData.skillwebm[skillIndex]}
              width="480px"
              }}></button>
              muted
              autoPlay
              loop
            ></ChampSkillWeb> */}
              </SkillsArea>
              <ChampTipsArea>
                ????????? ????????? ???!
                <ChampAllytips>
                  <br></br>
                  {champData.allytips.map((ele, index) => (
                    <div>
                      {" "}
                      tip{index + 1} : {ele}{" "}
                    </div>
                  ))}
                </ChampAllytips>
                <br></br>
                ????????? ?????? ???!
                <ChampEnemytips>
                  <br></br>
                  {champData.enemytips.map((ele, index) => (
                    <div>
                      tip{index + 1} : {ele}
                    </div>
                  ))}
                </ChampEnemytips>
                <ChampRecommendedBuild className="buildWrap">
                  <div className="buildTitle">
                    ?????? ?????? ???{" "}
                    <div className="runeSearchFrom">
                      <input
                        className="runeSearchInputBox"
                        placeholder="?????? ???????????? ???????????????"
                        type="text"
                        onChange={(e) => {
                          setOppName(e.target.value);
                        }}
                      ></input>
                      <button
                        className="runeSearchBtn"
                        onClick={() => {
                          handleOppSearch();
                        }}
                      >
                        ??????
                      </button>
                    </div>
                  </div>

                  <section className="recommendContent">
                    {!isLoading
                      ? "?????? ????????? ???????????? ???????????????!"
                      : runeUrls.map((el, idx) => {
                          return (
                            <div className="recommedWrap">
                              <div
                                className="runeImg"
                                {...runeEls[idx].attribs}
                                style={{
                                  backgroundImage: `url(${el})`,
                                  backgroundSize: "50px 50px",
                                  width: "50px",
                                  height: "50px",
                                }}
                              >
                                {runeEls[idx].attribs.title ? (
                                  <div className="runeDesc">
                                    <div className="runeTitle">
                                      {runeEls[idx].attribs.title}
                                    </div>
                                    <br></br>
                                    <div className="runeContent">
                                      {runeDesc[idx][5]
                                        ? runeDesc[idx][5].replace(
                                            /<br>/gi,
                                            " "
                                          )
                                        : ""}
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          );
                        })}
                  </section>
                </ChampRecommendedBuild>
              </ChampTipsArea>
            </RenderArea>
          </Wrap>{" "}
        </div>
      ) : (
        "loading"
      )}
    </ChampDetailArea>
  );
};

export default ChampDetail;
