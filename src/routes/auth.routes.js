const { Router } = require("express"); // Importo la clase Router de express

const router = Router(); // Inicializo el router

// Defino mis rutas
router.post("/register", (req, res) => { // http://localhost:3000/api/auth/register
  console.log(req.body);
  return res.json({
    message: "Registro exitoso",
    data: req.body,
  });
});

router.post("/login", (req, res) => { // http://localhost:3000/api/auth/login
  console.log(req.body);
  return res.json({
    message: "Login exitoso",
    data: req.body,
  });
});

module.exports = router; // Exporto el router para poder usarlo en otros archivos
