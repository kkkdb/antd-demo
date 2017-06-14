import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
    render() {
        return (
            <div>
                会员等级管理
                <div> 
                	<Link to="/app/dashboard/index">首页</Link>
                </div>
            </div>
        )
    }
}


