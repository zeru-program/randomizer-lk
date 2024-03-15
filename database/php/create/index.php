
<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>$nama_project</title>
  
  <!-- add your style css in here, or cdn -->
  
  <!-- this bootstrap cdn -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  
</head>
<body>

   <!-- template create or register page, db must be registered first! -->

    <form action="process.php" method="POST" class="mt-3">
        <h2>Register</h2>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="name" id="">
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Userame</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="username" id="">
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" name="email" id="">
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" name="password" id="">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>

</body>
</html>

