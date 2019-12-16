import React, { useEffect, useReducer } from "react";
import ContestsTemplate from "../templates/Contests.js";
import { reducer } from "../reducer";
import { request } from "../requests";

export default function Contests() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: [],
  });
  const endpoint = "/contests";

  const switchComponent = key => {
    if (state.loading) {
      return [];
    } else {
      return state.data[key];
    }
  };

  useEffect(() => {
    request(endpoint, dispatch);
  }, [endpoint]);

  return (
    <ContestsTemplate
      currentContestLists={Object.values(switchComponent("current"))}
      upcomingContestLists={Object.values(switchComponent("upcoming"))}
      recentContestLists={Object.values(switchComponent("recent"))}
    />
  );
}
