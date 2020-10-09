import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meta from 'antd/lib/card/Meta';
import { Button, Card, Col, Rate, Row, Space, Table, Tooltip } from 'antd';
import { DeleteFilled, EditFilled, EditOutlined, EllipsisOutlined, FolderOutlined, PlusOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';


function Pokemons() {
    const [cards, setCards] = useState([]);


    const getCards = () => {
  //axios.get('https://reqres.in/api/users', { params: { pageSize: 2, first: 0 }})
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic') //Peticiones al Backend
            .then(res => {
                setCards(res.data.cards);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getCards();
    }, [])

return (

        <div>
            <h1><b>CATALOGO DE POKEMONS</b></h1>
            <div align={'right'}>
                <Space>
                    <Tooltip title="Nuevo">
                        <Button
                            type="primary"
                            shape="round"
                            //onClick={() => props.history.push(`${props.match.url}/new`)}
                            icon={<PlusOutlined />}>Nuevo Pokemon
                        </Button>
                    </Tooltip>
                    <Tooltip title="Búsqueda">
                        <Button
                            type="primary"
                            shape="round"
                            icon={<SearchOutlined />}>
                            Buscar pokemon
                        </Button>
                    </Tooltip>
                </Space>
            </div>
            <br></br>
            
            <div>
                <Row gutter={[16, 16]}>
                    {cards && cards.map(card => {
                        return (
                            
                        //         <Poke pokemon={pokemon} />
                        //     )
                        // })}
                            <Col span={6}>
                                {/* AJUSTAR CONTENIDO ACÁ */}
                                <div style={{ height: 450 }}>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={
                                            <div> <img
                                                alt='imagen'
                                               src={card.imageUrl} 
                                                style={{ height: 200 }} //VER COMO HACER AJUSTABLE                                            
                                            />
                                            </div>
                                        }
                                    >
                                        <div>
                    <Meta style={{ textAlign: "center" }}
                                        title={card.name}
                                        description={card.nationalPokedexNumber}
                                    /><br></br>
                                    </div>
                                        {/* <Button type="primary" onClick={this.toggle}>
                                            Toggle disabled
                                        </Button>
                                        <Switch disabled={this.state.disabled} defaultChecked />
                                        <br /> */}

                                        <Rate /><br></br>
                                        <div align='center'>
                                            <br></br>
                                            <Space>
                                                <Tooltip title="Nuevo">
                                                    <Button
                                                        type="primary"
                                                        shape="round"
                                                        icon={<PlusOutlined />}>Agregar al carrito
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip title="Edit">
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                       // onClick={() => props.history.push(`${props.match.url}/edit/${producto.id}`)}
                                                        icon={<EditFilled />} />
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <Button
                                                        type="danger"
                                                        shape="circle"
                                                        //onClick={() => deleteProducto(producto.id)}
                                                        icon={<DeleteFilled />} />
                                                </Tooltip>
                                            </Space>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
            <br></br>
            
        </div>
    )
}
export default Pokemons;