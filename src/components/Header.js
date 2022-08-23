import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className='py-0' fixed='top' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>SmartUp Xperience</Navbar.Brand>
          <Button
            className='modal-header-button-menu'
            variant='dark'
            size='lg'
            onClick={handleShow}
          >
            <FontAwesomeIcon title='faBars' icon={faBars} />
          </Button>
        </Container>
      </Navbar>
      {show ? (
        <>
          <div className='modal-header-container' id='modal-container'>
            <div className='modal-header-buttons'>
              <Button
                className='modal-header-button-close'
                variant='dark'
                size='lg'
                onClick={handleClose}
              >
                <FontAwesomeIcon title='faXmark' icon={faXmark} />
              </Button>
              <Link to={`/home`}>
                <Button
                  className='modal-header-button-link-home'
                  variant='dark'
                  size='lg'
                  onClick={handleClose}
                >
                  Inicio
                </Button>
              </Link>
              <Link to={`/searcher`}>
                <Button
                  className='modal-header-button-link-searcher'
                  variant='dark'
                  size='lg'
                  onClick={handleClose}
                >
                  Buscador
                </Button>
              </Link>
              <Link to={`/series`}>
                <Button
                  className='modal-header-button-link-series'
                  variant='dark'
                  size='lg'
                  onClick={handleClose}
                >
                  Series TV
                </Button>
              </Link>
              <Link to={`/films`}>
                <Button
                  className='modal-header-button-link-films'
                  variant='dark'
                  size='lg'
                  onClick={handleClose}
                >
                  Películas
                </Button>
              </Link>
              <Link to={`/mylist`}>
                <Button
                  className='modal-header-button-link-list'
                  variant='dark'
                  size='lg'
                  onClick={handleClose}
                >
                  Mi lista
                </Button>
              </Link>
              <Link to={`/myprofile`}>
                <Button
                  className='modal-header-button-link-profile'
                  variant='dark'
                  size='lg'
                  onClick={handleClose}
                >
                  Mi perfil
                </Button>
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Header;
