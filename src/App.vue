<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(to, from){
      let toPath = to.path.substring(1)
      document.querySelector('html').setAttribute('class', to.path.substring(1) + "-html-container")
      if(toPath.indexOf("doc/") > -1){
        document.querySelector('html').setAttribute('style', "overflow-y: auto !important;")
      }else {
        document.querySelector('html').removeAttribute('style')
      }
    }
  }
}
</script>
<style>
#app {
  height: 100%;
}
</style>
