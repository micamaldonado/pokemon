
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meta from 'antd/lib/card/Meta';
import { Button, Card, Col, Image, Rate, Row, Space, Table, Tooltip } from 'antd';
import { DownloadOutlined} from '@ant-design/icons';

function Poke(props) {
    return (
        <Col span={12}>
            <Card title={props.poke.titulo} bordered={true}>
                <Image width={350} style={{textAlign: "center"}} src={props.poke.imagen_url} />
                <br /> <br />
                <p><b>
                    {props.poke.info}
                </b></p>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                   Descargar Informacíon
                                                    </Button>
            </Card>

        </Col>
    )
}
export default Poke;
