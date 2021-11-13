<script setup>
import DefaultTheme from 'vitepress/theme'
import Comment from '../../components/comment/index.vue'

const { Layout } = DefaultTheme

</script>

<template>
  <Layout>
    <template #page-bottom>
      <Comment />
    </template>
  </Layout>
</template>