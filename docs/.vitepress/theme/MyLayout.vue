<script setup>
import { watch, nextTick, ref } from "vue";
import DefaultTheme from "vitepress/theme";
import md5 from "md5";
import Comment from "../../components/comment/index.vue";
import UtterancCommment from "../../components/UtterancCommment/index.vue"
import Statistics from "../../components/Stastistics/index.vue"

import { useRouter } from "vitepress";

const { Layout } = DefaultTheme;
const enableComment = ref(true);
let { route } = useRouter();
let badge = ref("");

const generateBadge = (path) => {
  const id = md5(path);

  return `https://visitor-badge.glitch.me/badge?page_id=${id}`;
};

generateBadge(route.path);

watch(
  route,
  async function (newValue) {
    enableComment.value = false;
    nextTick(() => {
      enableComment.value = true;
    });

    badge.value = generateBadge(route.path);
  },
  { immediate: true }
);
</script>

<template>
  <Layout>
    <template #page-bottom>
      <div>
        <!-- <Comment v-if="enableComment" /> -->
        <UtterancCommment v-if="enableComment" />
        <Statistics />
      </div>
      <div class="record">
        <img v-if="badge" :src="badge" alt />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.record {
  text-align: center;
}
</style>
