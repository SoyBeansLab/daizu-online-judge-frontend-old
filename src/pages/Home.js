import React, { useEffect, useReducer } from "react";
import HomeTemplate from "../templates/Home.js";
import { reducer } from "../reducer";
import { request } from "../requests";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: [],
  });
  const endpoint = "/contests";

  useEffect(() => {
    request(endpoint, dispatch);
  }, [endpoint]);

  return <HomeTemplate slideItemList={Object.values(!state.loading ? state.data.upcoming : [])} />;
}
