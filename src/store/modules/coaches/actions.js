export default {
  registerCoach(context, data) {
    const coachData = {
      // id: new Date().toISOString(),
      id: context.rootGetters.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourRate: data.rate,
      areas: data.areas,
    };

    context.commit("registerCoach", coachData);
  },
};
