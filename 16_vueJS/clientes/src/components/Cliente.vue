<script setup>
let user = {
  name: "Andrew",
  age: 25,
};

let message = "";
</script>

<template>
  <div>
    <h1>Componente cliente</h1>
    <input v-model="message" placeholder="Me edite" />
    <p>A mensagem é: {{ message }}</p>
    <hr />
    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>
  </div>
</template>

<style scoped>
h1 {
  color: purple;
}
</style>
