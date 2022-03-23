<template>
  <TheHeader />

  <RouterView />
</template>
<script>
import TheHeader from "@/components/layout/TheHeader";
export default {
  components: { TheHeader },
};
</script>
