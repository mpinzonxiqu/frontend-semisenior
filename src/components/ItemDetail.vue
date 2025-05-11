<template>
  <div class="container">
    <h1 class="title">{{ item?.title }}</h1>
    <div v-if="item">
      <div class="card">
        <p class="body-text">{{ item.body }}</p>
      </div>
    </div>
    <div v-else>
      <p class="loading">Cargando...</p>
    </div>

    <!-- Mostrar el errorMessage si existe -->
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      item: null,
      errorMessage: null,  // Usamos 'errorMessage' en lugar de 'error'
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        this.item = response.data;  // Asignamos el item si la API responde correctamente
      })
      .catch(() => {
        this.errorMessage = 'Hubo un problema al cargar los detalles.';  // Eliminamos el uso de 'err'
      });
  }
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 3rem auto;
  padding: 1.5rem;
  font-family: 'Segoe UI', sans-serif;
}

.title {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.body-text {
  font-size: 1.2rem;
  color: #34495e;
  line-height: 1.6;
  text-align: justify;
}

.error {
  color: #e74c3c;
  background-color: #f8d7da;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  font-size: 1rem;
}

.loading {
  text-align: center;
  color: #f39c12;
  font-style: italic;
}
</style>
