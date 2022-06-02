import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { searchQuery, feedQuery } from "../utils/data";

import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [isloading, setisLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setisLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setisLoading(false);
        
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setisLoading(false);
   
      });
    }
  }, [categoryId]);

  if (isloading)
    return <Spinner message="We are adding more inspiration to your feed!" />;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
