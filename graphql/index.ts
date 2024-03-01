import { Ships } from "./ships";
import { Missions } from "./missions";

const apiCalls = {
  queries: {
    ...Ships.query,
    ...Missions.query,
  },
  mutations: {
    ...Ships.mutations,
  },
};

export default apiCalls;
