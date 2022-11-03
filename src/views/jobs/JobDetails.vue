<template>
  <h1>Detalhes da vaga de emprego</h1>
  <p>O id é: {{ id }}</p>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>