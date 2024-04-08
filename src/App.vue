<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

onMounted(() => {
  document.title = t("title");
});
</script>

<template>
  <div>
    <h1>{{ t("title") }}</h1>
    <p class="main">{{ t("description") }}</p>
    <a href="https://github.com/sevenc-nanashi/roblowtitter">{{ t("link") }}</a>
  </div>
</template>

<style scoped>
.main {
  white-space: pre-line;
}
</style>
