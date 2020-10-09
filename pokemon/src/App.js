import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppstoreOutlined, HomeOutlined, FireOutlined} from '@ant-design/icons';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
const { SubMenu } = Menu;
const { Header, Footer, Content } = Layout;

function AppMenu() {
  const [current, setCurrent] = useState()
  return (

    // DEFINICION DE LA ESTRUCTURA DEL MENU PRINCIPAL - BARRA DE ARRIBA
    <Menu style={{ textAlign: "center", fontSize: 15 }} 
    onClick={(value) => setCurrent(value)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="Pokemons" icon={<FireOutlined />}>
        <Link to="/pokemons">Lista de Pokemons</Link>
      </Menu.Item>
      </Menu>
      );
}

//DEFINIR RUTAS DE PRODUCTOS
function PokemonsRoutes(props) {
  return (
    <>
      <Route exact path={`${props.match.path}/`} component={Pokemons} />
    </>
  );
}

function App() {
  return (
      <Router>
        <Layout>
        < div className= "header" >
            <img src="https://poketouch.files.wordpress.com/2020/06/cropped-two_pikachu_pokemon_logo.png"  ></img>
          {/* <div style={{ color: 'black', fontSize: 30, textAlign: 'center' }}><h3>Pokemons</h3></div> */}
        </div>
          <Content>

          <div className="site-layout-content">
                  <AppMenu/>
                  <br />
                {/* Secccion donde se van a mostrar los diferentes componentes que rendericemos */}
                <>
                  <Route path="/" exact component={Home} />
                  <Route path="/pokemons" component={PokemonsRoutes} />
                  
                  {/* Hacemos esto porque tasks tiene subrutas */}
                  {/* <Route path="/tasks" component={TaskRoutes} /> */}
                </>
              </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
              <p>ASUNCIÓN-PY</p>
              <p>Todos los derechos reservados</p>
          </Footer>
        </Layout>
      </Router>
      
  );
}

export default App;
