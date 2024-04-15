export default function Client() {


    return (
      
      <>
<nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  
  <div class="container-fluid">
    
    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ГЛАВНАЯ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">О НАС</a>
        </li>
        
      </ul>
      
    </div>
    
  </div>
  
</nav>
  <div class="container">
    <h2>Виды услуг и направления</h2>

    
      <div class="container">
        <div class="buttons-holder">

          <div class="btn-xl d-grid gap-2 col-4">
          <button type="button" class="btn btn-primary">Купить абонемент</button>
          </div>
          <div class="btn-xl d-grid gap-2 col-4">
          <button type="button" class="btn btn-primary"><br></br><br></br><br></br>Групповые занятия<br></br><br></br><br></br><br></br></button>
          </div>
          <div class="btn-xl d-grid gap-2 col-4">
          <button type="button" class="btn btn-primary">Персональные тренировки</button>
          </div>
        </div>
        <div class="btn-xl d-grid gap-2">
          <button type="button" class="btn btn-primary"><br></br>Купить абонемент<br></br><br></br></button>
          </div>
      </div>
    <h2><br></br>Прайс-лист</h2>
  </div>
      </>
    )
}