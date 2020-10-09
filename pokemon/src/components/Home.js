import React from 'react'
import { Layout, Menu, Divider, Row, Col, Card, Image, Button, Typography, Pagination } from 'antd';
import { ReadOutlined, HomeOutlined, TeamOutlined, WhatsAppOutlined, SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import Poke from "./Poke.js"
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Text } = Typography;

const pokes = [
    {
        titulo: "Supera el cuestionario visual de los Pokémon de Galar",
        info: "Llegados a este punto, te habrás hecho con docenas, o cientos, de Pokémon en Pokémon Espada y Pokémon Escudo. Los has entrenado, has combatido a su lado... ¡Seguro que se han convertido en tus fieles compañeros! Pero ¿cómo de bien los conoces? Hemos creado este pequeño cuestionario que te permitirá observar más de cerca que nunca a algunos Pokémon de la región de Galar",
        imagen_url: "https://assets.pokemon.com/assets/cms2-es-es/img/video-games/_tiles/pokemon-sword-shield/pokedex-quiz/eyes-of-galar/eyes-of-galar-169.jpg"
    },
    {
        titulo: "Supera el cuestionario visual de los Pokémon de Galar",
        info: "Llegados a este punto, te habrás hecho con docenas, o cientos, de Pokémon en Pokémon Espada y Pokémon Escudo. Los has entrenado, has combatido a su lado... ¡Seguro que se han convertido en tus fieles compañeros! Pero ¿cómo de bien los conoces? Hemos creado este pequeño cuestionario que te permitirá observar más de cerca que nunca a algunos Pokémon de la región de Galar",
        imagen_url: "https://assets.pokemon.com/assets/cms2-es-es/img/video-games/_tiles/pokemon-sword-shield/pokedex-quiz/eyes-of-galar/eyes-of-galar-169.jpg"
    },
]
function Home() {
    return (
        <>

            <Divider><Text>NOVEDADES</Text></Divider>
            <Row>
                <Col span={24}>
                    <Card>
                        <p>
                            Apartir del 21 de octubre a las 06:00 (UTC), los propietarios de las cafeterías Pokémon tendréis que servir nuevas comandas, de la 451 a la 500, y aceptar todos los retos y recompensas que llegan con ellas. Bewear se dejará caer por tu cafetería, tendrás que preparar un plato nuevo a tus clientes Pokémon y, lo más importante, podrás enfrentarte al desafío de Hattrem y aprovechar la oportunidad para añadir a este Pokémon de tipo Psíquico a tu equipo.

                            ¡Que lo disfrutes!
                </p>
                    </Card>

                </Col>
            </Row>

            <Row>
                {pokes.map(poke => {
                    return (
                        <Poke poke={poke} />
                    )
                })}
            </Row>
        </>
    );

}

export default Home;