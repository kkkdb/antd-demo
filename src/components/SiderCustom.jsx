/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Link } from 'react-router';

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '/app/userCenter',
        selectedKey: ''
    };
    componentDidMount() {
        const _path = this.props.path;
        let tempPath = _path.substr(0, _path.lastIndexOf('/'));
        this.setState({
            openKey: this.getOpenKey(tempPath),
            selectedKey: _path
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }
    getOpenKey(tempPath){
        let openKey = '';
        switch(tempPath){
            case '/app/dashboard':
            case '/app/userLevel':
            case '/app/userPoint':
            case '/app/exchangeAndTrial':
                openKey = '/app/userCenter'
                break
            default:
                openKey = '/app/userCenter'
                break
        }
        return openKey
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
        if (collapsed) {
            this.setState({
                openKey: ''
            })
        }
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);

    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1]
        })
    };
    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsible
                collapsed={this.props.collapsed}
                onCollapse={this.onCollapse}
                style={{overflowY: 'auto'}}
            >
                <div className="logo" />
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode={this.state.mode}
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={[this.state.openKey]}
                    onOpenChange={this.openMenu}
                >
                    <Menu.Item key="/app/dashboard/index">
                        <Link to={'/app/dashboard/index'}><Icon type="mobile" /><span className="nav-text">首页</span></Link>
                    </Menu.Item>
                    <SubMenu
                        key="/app/userCenter"
                        title={<span><Icon type="star" /><span className="nav-text">会员中心</span></span>}
                    >
                        <MenuItemGroup key="/app/userLevel" title="会员等级">
                            <Menu.Item key="/app/userLevel/VipLevelManage"><Link to={'/app/userLevel/VipLevelManage'}>会员等级管理</Link></Menu.Item>
                            <Menu.Item key="/app/userLevel/BirthdayRights"><Link to={'/app/userLevel/BirthdayRights'}>生日权限</Link></Menu.Item>
                            <Menu.Item key="/app/userLevel/VipLevelSetting"><Link to={'/app/userLevel/VipLevelSetting'}>会员等级设置</Link></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup key="/app/userPoint" title="会员积分">
                            <Menu.Item key="/app/userPoint/VipPointManage"><Link to={'/app/userPoint/VipPointManage'}>会员积分管理</Link></Menu.Item>
                            <Menu.Item key="/app/userPoint/ActivityPointSetting"><Link to={'/app/userPoint/ActivityPointSetting'}>活动积分设置</Link></Menu.Item>
                            <Menu.Item key="/app/userPoint/VipBasicSetting"><Link to={'/app/userPoint/VipBasicSetting'}>积分基础设置</Link></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup key="/app/exchangeAndTrial" title="兑礼及试用">
                            <Menu.Item key="/app/exchangeAndTrial/PointExchangeSetting"><Link to={'/app/exchangeAndTrial/PointExchangeSetting'}>积分兑礼设置</Link></Menu.Item>
                            <Menu.Item key="/app/exchangeAndTrial/TrialApplySetting"><Link to={'/app/exchangeAndTrial/TrialApplySetting'}>试用申请设置</Link></Menu.Item>
                            <Menu.Item key="/app/exchangeAndTrial/PointExchangeRecord"><Link to={'/app/exchangeAndTrial/PointExchangeRecord'}>积分兑礼记录</Link></Menu.Item>
                            <Menu.Item key="/app/exchangeAndTrial/TrialApplyRecord"><Link to={'/app/exchangeAndTrial/TrialApplyRecord'}>试用申请记录</Link></Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}

export default SiderCustom;