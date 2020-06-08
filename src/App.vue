<template>
  <div id="app">
    <h1>DEVYoung</h1>
     <router-link to="/home">Home</router-link>
      <router-link to="/list">List</router-link>
      <router-link to="/testlist">TestList</router-link>
  <hr/>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
