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
    <a href="https://github.com/sevenc-nanashi/roblotwitter">{{ t("link") }}</a><br />
    <a href="https://sevenc7c.com" class="author">{{ t("author") }}</a>
  </div>
</template>

<style scoped>
.main {
  white-space: pre-line;
}
.author {
  display: block;
  padding-top: 1rem;
  color: #48b0d5;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
