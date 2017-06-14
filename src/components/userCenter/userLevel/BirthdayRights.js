import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
    render() {
        return (
            <div>
                生日权限
                <div> 
                	<Link to="/app/dashboard/index">首页</Link>
                </div>
            </div>
        )
    }
}


