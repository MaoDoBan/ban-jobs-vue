<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>O id é: {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Carregando...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data(){
    return {
      job: null
    }
  },
  mounted(){
    fetch("http://localhost:3000/jobs/" + this.id)
      .then(res => res.json()) //res.json é assíncrono também
      .then(data => this.job = data)
      .catch(erro => console.log(erro.message));
  }
}
</script>

<style>

</style>