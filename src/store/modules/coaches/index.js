import mutations from "@/store/modules/coaches/mutations.js";
import actions from "@/store/modules/coaches/actions.js";
import getters from "@/store/modules/coaches/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Tazo",
          lastName: "Kenkebashvili",
          areas: ["frontend", "backend", "career"],
          description: "I'm Tazo and I've worked in a RedBerry",
          hourRate: 30,
        },
        {
          id: "c2",
          firstName: "Ilia",
          lastName: "Kenkebashvili",
          areas: ["backend", "career"],
          description: "I'm Ilia and I've worked in a RedBerry",
          hourRate: 26,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
