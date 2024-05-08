<template>
  <div>
    <header class="header"></header>
    <section class="center">
      <nav class="menu">
        <ul>
          <li>所有看板</li>
        </ul>
      </nav>
      <main>
        <h1>都市傳說</h1>
      </main>
    </section>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="sass">
  .header
    height: 48px
    background-color: #006aa6
  .center
    display: flex
    width: 1260px
    margin: 0 auto
    padding: 0 135px
  main
    width: 752px
    margin: 20px 12px 0
    padding: 20px 60px 0
    background-color: #fff
</style>
