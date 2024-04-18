import React from 'react';

const HomePage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ГЛАВНАЯ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  О НАС
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h2>Виды услуг и направления</h2>

        <div className="container">
          <div className="buttons-holder">
            <div className="btn-xl d-grid gap-2 col-4">
              <button type="button" className="btn btn-primary">
                Купить абонемент
              </button>
            </div>
            <div className="btn-xl d-grid gap-2 col-4">
              <button type="button" className="btn btn-primary">
                <br></br>
                <br></br>
                <br></br>Групповые занятия<br></br>
                <br></br>
                <br></br>
                <br></br>
              </button>
            </div>
            <div className="btn-xl d-grid gap-2 col-4">
              <button type="button" className="btn btn-primary">
                Персональные тренировки
              </button>
            </div>
          </div>
          <div className="btn-xl d-grid gap-2">
            <button type="button" className="btn btn-primary">
              <br></br>Купить абонемент<br></br>
              <br></br>
            </button>
          </div>
        </div>
        <h2>
          <br></br>Прайс-лист
        </h2>
      </div>
    </>
  );
};

export default HomePage;
