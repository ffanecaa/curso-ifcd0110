<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejercicio formulario</title>
</head>
<body>
 <?php if(isset($_POST['nombre'])){?>  
    <button onclick="javascript:history.back();"> >>volver </button>
    <ul>
        <li> Nombre: <b><?php echo $_POST['nombre'];?></b> </li>
        <li> edad:<b> <?php echo $_POST['edad'];?></b> </li>
        <li> email: <b><?php echo $_POST['email'];?> </b></li>
        <li> tel:<b> <?php echo $_POST['tel'];?></b> </li>
 </ul>
 <?php }else{ ?>
    <form name="form" target="_self" action="formulario2.php" id="form" method="post">
        <ul>
   <li> <label for="name">nombre</label> 
    <input type="text" name="nombre" id="name"></li>
    <li> <label for="edad">edad__ </label>    
    <input type="edad" name="edad" id="edad"></li>
    <li> <label for="tel">telefono </label>    
    <input type="tel" name="tel" id="tel"></li>
    <li> <label for="email">email </label>    
    <input type="email" name="email" id="email"></li>
    
      <li>  <input type="submit" name="enviar" value="enviar"></li>
 </ul>
 </form>
 <?php }?>
</body>
</html>

