import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemsDbList from "../../component/ItemsDbList/ItemsDbList.jsx";
import ItemsDbFilter from "../../component/ItemsDbFilter/ItemsDbFilter.jsx";
import { Items, ItemBox, ItemsList } from "./ItemsDbStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const ItemsDB = () => {
  const [apiVer, setApiVer] = useState("");
  const [itemsData, setItemsData] = useState([]);
  const [sortTags, setSortTags] = useState(["set"]);

  const handleSortTags = (checked, tags, id) => {
    if (checked) {
      setSortTags([...sortTags, tags]);
    } else {
      setSortTags(sortTags.filter((el) => el !== tags));
    }
  };

  useEffect(() => {
    axios
      .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((res) => {
        setApiVer(res.data[0]);
        return axios.get(
          `http://ddragon.leagueoflegends.com/cdn/${res.data[0]}/data/ko_KR/item.json`
        );
      })
      .catch((err) => {
        throw err;
      })
      .then((res) => {
        setItemsData(Object.entries(res.data.data));
      });
    setSortTags("");
  }, []);
  return (
    <Items className="itemsDB">
      <ItemsDbFilter itemsData={itemsData} handleSortTags={handleSortTags} />
      <ItemsDbList itemsData={itemsData} apiVer={apiVer} sortTags={sortTags} />
    </Items>
  );
};

export default ItemsDB;