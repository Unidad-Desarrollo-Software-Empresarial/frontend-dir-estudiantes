<template>
    <div class="cuotas">
      <h1>Calculadora de Cuotas</h1>
      <form @submit.prevent="calcularCuota">
        <div>
          <label for="monto">Monto:</label>
          <input
            type="number"
            id="monto"
            v-model.number="monto"
            placeholder="Ingrese monto"
            required
          />
        </div>
        
        <div>
          <label for="cuotas">Número de cuotas:</label>
          <select id="cuotas" v-model.number="cuotas" required>
            <option value="" disabled>Seleccione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        
        <button type="submit">Calcular</button>
      </form>
      
      <div v-if="resultado !== null">
        <h2>Resultado:</h2>
        <p>Cada cuota será de: {{ resultado.toFixed(2) }} unidades</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        monto: null,
        cuotas: null,
        resultado: null
      };
    },
    methods: {
      calcularCuota() {
        if (this.monto > 0 && this.cuotas > 0) {
          this.resultado = this.monto / this.cuotas;
        } else {
          this.resultado = null;
          alert('Por favor, ingrese un monto válido y seleccione el número de cuotas.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .cuotas {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  h2 {
    margin-top: 20px;
  }
  </style>
  