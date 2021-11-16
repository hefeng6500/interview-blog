<script setup>
import { useRouter } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Comment from "../../components/comment/index.vue";
import md5 from "md5";

const { Layout } = DefaultTheme;
const { route } = useRouter();
const id = md5(route.path);
</script>

<template>
  <Layout>
    <template #page-bottom>
      <Comment :id="id" />
    </template>
  </Layout>
</template>
