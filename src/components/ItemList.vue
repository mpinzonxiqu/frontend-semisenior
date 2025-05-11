<template>
  <div class="container">
    <h1 class="title">Lista de Elementos</h1>

    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

    <transition-group name="fade" tag="div" class="card" v-if="items.length && !errorMessage">
      <ul class="ordered-list">
        <li v-for="item in items" :key="item.id" class="list-item">
          <span class="bullet">•</span>
          <router-link :to="{ name: 'item-detail', params: { id: item.id } }" class="item-link">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </transition-group>

    <div v-else class="loading">
      <div class="spinner"></div>
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
      errorMessage: null,
    };
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.items = response.data;
      })
      .catch(() => {
        this.errorMessage = 'Hubo un problema al cargar los datos.';
      });
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  font-family: 'Segoe UI', sans-serif;
  background: #f2f6fa;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.8s ease-in-out;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
}

.error {
  color: #fff;
  background-color: #e74c3c;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
  animation: fadeIn 0.5s ease-in-out;
}

.card {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

.ordered-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid #ececec;
  transition: all 0.3s ease;
  border-radius: 6px;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item:hover {
  background-color: #eef2f7;
  transform: scale(1.01);
}

.bullet {
  color: #3498db;
  font-size: 1.5rem;
  margin-right: 0.75rem;
  font-weight: bold;
}

.item-link {
  text-decoration: none;
  color: #34495e;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  flex-grow: 1;
}

.item-link:hover {
  color: #2980b9;
  text-decoration: underline;
}

.loading {
  text-align: center;
  color: #7f8c8d;
  font-style: italic;
  margin-top: 3rem;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  animation: spin 1s linear infinite;
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
