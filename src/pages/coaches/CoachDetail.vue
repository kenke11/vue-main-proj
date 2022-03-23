<template>
  <section>
    <BaseCard>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <h2>Interested? Reach out now!</h2>
        <BaseButton link :to="contactLink"> Contact </BaseButton>
      </header>
    </BaseCard>
    <RouterView />
  </section>
  <section>
    <BaseCard>
      <BaseBadge v-for="area in areas" :key="area" :title="area" :type="area" />
      <p>{{ desc }}</p>
    </BaseCard>
  </section>
</template>
<script>
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import BaseBadge from "@/components/UI/BaseBadge";

export default {
  components: { BaseBadge, BaseButton, BaseCard },
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
    areas() {
      return this.selectedCoach.areas;
    },
    desc() {
      return this.selectedCoach.description;
    },
    rate() {
      return this.selectedCoach.hourRate;
    },
  },
};
</script>
