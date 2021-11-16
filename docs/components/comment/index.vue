<template>
  <div id="gitalk-container"></div>
  <span v-show="false">{{ id }}</span>
</template>

<script setup>
import { computed, nextTick } from "vue";
import { useRouter } from "vitepress";
import md5 from "md5";

import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";

const id = computed(async () => {
  const { route } = useRouter();
  const id = md5(route.path);

  await nextTick();

  const gitalk = new Gitalk({
    clientID: "8760b254461e3650fc51",
    clientSecret: "ca8c12795123d4605d8d98a2753f2b5d78049832",
    repo: "interview-blog",
    owner: "hefeng6500",
    admin: ["hefeng6500"],
    id,
    distractionFreeMode: false,
  });

  gitalk.render("gitalk-container");
});
</script>
