const express = require('express');
const app = express();
const routes = require('./routes/routes');


// Ajustes
app.set('port', process.env.PORT || 4001);
app.set('json spaces',2);


// Middlewares
app.use(express.json());


//Routes
app.use('/api', routes); //definir el prefijo para llamar las rutas de la api



app.get('/',(req,res)=>{
  res.send('Hola a todos - Esta es nuestra de NodeJS del proyecto DD3D - Express y MySql')
});


// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 