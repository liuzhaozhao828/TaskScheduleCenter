import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import './index.less';
import { Layout, Menu, Icon } from 'antd';
import menu from './menu';
import Home from './component/Home/Home';
import Test from './component/test';
import Test2 from './component/test2';
const { Header, Content, Sider } = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            {
                                menu.map(({key,path,name,icon})=>{
                                    return(
                                        <Menu.Item key={key}>
                                            <Link to={path}>
                                                <Icon type={icon} />
                                                <span>{name}</span>
                                            </Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="header">
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content className="content">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/test" component={Test} />
                                <Route path="/users" component={Test2} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </HashRouter>


        );
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

