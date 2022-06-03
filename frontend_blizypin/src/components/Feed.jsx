import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { searchQuery, feedQuery } from "../utils/data";
import { categories } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
const Feed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    }
  }, [categoryId]);

  if (isLoading)
    return <Spinner message="We are adding more inspiration to your feed!" />;
  if (
    categoryId &&
    categories.filter((category) => {
      return category.name === categoryId;
    }).length === 0
  )
    return <ErrorPage error={"No such category found."} />;
  if (!pins?.length) return <h2>No pins available.</h2>;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
