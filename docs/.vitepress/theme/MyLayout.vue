<script setup>
import { ref, watch, nextTick } from "vue";
import { useRouter } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Comment from "../../components/comment/index.vue";
import md5 from "md5";

const { route } = useRouter();
const id = md5(route.path);
const { Layout } = DefaultTheme;

let enableComment = ref(false);

watch(
  route,
  async (newValue) => {
    enableComment.value = false;

    await nextTick();

    enableComment.value = true;
  },
  { immediate: true }
);
</script>

<template>
  <Layout>
    <template #page-bottom>
      <Comment v-if="enableComment" />
    </template>
  </Layout>
</template>
