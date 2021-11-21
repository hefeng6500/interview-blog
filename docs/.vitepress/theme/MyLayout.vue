<script setup>
import { watch, nextTick, ref } from "vue";
import DefaultTheme from "vitepress/theme";
import Comment from "../../components/comment/index.vue";
import { useRouter } from "vitepress";

const { Layout } = DefaultTheme;
const enableComment = ref(true);
let { route } = useRouter();

watch(
  route,
  async function (newValue) {
    enableComment.value = false;
    nextTick(() => {
      enableComment.value = true;
    });
  },
  { immediate: true }
);
</script>

<template>
  <Layout>
    <template v-if="enableComment" #page-bottom>
      <Comment />
    </template>
  </Layout>
</template>
