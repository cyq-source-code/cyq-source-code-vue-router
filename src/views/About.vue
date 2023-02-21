<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-view></router-view>
    <router-link to="/about/a" tag="span">about a</router-link> |
    <router-link to="/about/b">about b</router-link>
  </div>
</template>
