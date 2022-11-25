<template>
  <div v-if="jobs.length">
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Carregando...</p>
  </div>
</template>

<script>
export default{
  data(){
    return{
      jobs: []
    }
  },
  mounted(){
    fetch("http://localhost:3000/jobs")
      .then(res => res.json()) //res.json é assíncrono também
      .then(data => this.jobs = data)
      .catch(erro => console.log(erro.message));
  }
}
</script>

<style>
.job h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background:#ddd;
}
.job a{
  text-decoration: none;
}
</style>