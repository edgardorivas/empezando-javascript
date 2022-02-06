//http(s)://api.coindesk.com/v1/bpi/currentprice.json
window.addEventListener('load', () => {
  const vue = new Vue({
    el: '#app',
    data: {
      nombre: null,
      fecha: null,
      precio: null
    },
    beforeCreate() {

    }
    ,
    created() {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((resultado) => {
        this.precio = resultado.data.bpi.USD.rate;
        this.fecha = resultado.data.time.updated;
        this.nombre = resultado.data.chartName;

        console.log(resultado.data);
      })
    }
  })
})