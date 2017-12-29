/**
 * Created by liuzhaozhao on 2017/12/29.
 */
import React from 'react';
import ChartCard from '../common/ChartCard'
import Field from '../common/Field'
import {Row, Col, Tooltip, Icon} from 'antd'
import  ReactEcharts from 'echarts-for-react'
import './home.less'


export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <div className="title_1">
                    首页
                </div>
                <Row gutter={20}>
                    <Col span={8}><ChartCard
                        title="移动指标"
                        avatar={
                            <img
                                style={{ width: 56, height: 56 }}
                                src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
                                alt="indicator"
                            />
                        }
                        action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                        total={123456}
                        footer={<Field label="日均销售额" value={"aaa"} />}
                    /></Col>
                    <Col span={8}><ChartCard
                        title="移动指标"
                        avatar={
                            <img
                                style={{ width: 56, height: 56 }}
                                src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
                                alt="indicator"
                            />
                        }
                        action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                        total={123456}
                        footer={<Field label="日均销售额" value={"aaa"} />}
                    /></Col>
                    <Col span={8}><ChartCard
                        title="移动指标"
                        avatar={
                            <img
                                style={{ width: 56, height: 56 }}
                                src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
                                alt="indicator"
                            />
                        }
                        action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                        total={123456}
                        footer={<Field label="日均销售额" value={"aaa"} />}
                    /></Col>
                </Row>

            </div>
        );
    }
}