<template>
  <div id="gitalk-container"></div>
</template>

<script>
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'


export default {
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    const gitalk = new Gitalk({
      clientID: '8760b254461e3650fc51',
      clientSecret: 'ca8c12795123d4605d8d98a2753f2b5d78049832',
      repo: 'interview-blog',
      owner: 'hefeng6500',
      admin: ['hefeng6500'],
      id: this.id,
      distractionFreeMode: false
    })

    console.log(gitalk);

    gitalk.render('gitalk-container')

  }
}
</script>
 