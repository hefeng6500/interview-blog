<template>
  <div id="gitalk-container"></div>
</template>

<script>
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
import md5 from "md5"

export default {
  mounted() {
    const gitalk = new Gitalk({
      clientID: '8760b254461e3650fc51',
      clientSecret: 'ca8c12795123d4605d8d98a2753f2b5d78049832',
      repo: 'interview-blog',
      owner: 'hefeng6500',
      admin: ['hefeng6500'],
      id: md5(location.pathname),
      distractionFreeMode: false
    })

    console.log(gitalk);

    gitalk.render('gitalk-container')

  }
}
</script>
 
 <Comment /> 
 
 
 <Comment /> 
 