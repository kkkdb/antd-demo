import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './style/lib/animate.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Page from './components/Page';
import Dashboard from './components/dashboard/Dashboard';
import VipLevelManage from './components/userCenter/userLevel/VipLevelManage';
import VipLevelSetting from './components/userCenter/userLevel/VipLevelSetting';
import BirthdayRights from './components/userCenter/userLevel/BirthdayRights';
import VipPointManage from './components/userCenter/userPoint/VipPointManage';
import ActivityPointSetting from './components/userCenter/userPoint/ActivityPointSetting';
import VipBasicSetting from './components/userCenter/userPoint/VipBasicSetting';
import PointExchangeSetting from './components/userCenter/exchangeAndTrial/PointExchangeSetting';
import TrialApplySetting from './components/userCenter/exchangeAndTrial/TrialApplySetting';
import PointExchangeRecord from './components/userCenter/exchangeAndTrial/PointExchangeRecord';
import TrialApplyRecord from './components/userCenter/exchangeAndTrial/TrialApplyRecord';


const routes =
    <Route path={'/'} components={Page}>
        <IndexRedirect to="/app/dashboard/index" />
        <Route path={'app'} component={App}>
            <Route path={'userLevel'}>
                <Route path={'vipLevelManage'} component={VipLevelManage} />
                <Route path={'vipLevelSetting'} component={VipLevelSetting} />
                <Route path={'birthdayRights'} component={BirthdayRights} />
            </Route>
            <Route path={'userPoint'}>
                <Route path={'VipPointManage'} component={VipPointManage} />
                <Route path={'ActivityPointSetting'} component={ActivityPointSetting} />
                <Route path={'VipBasicSetting'} component={VipBasicSetting} />
            </Route>
            <Route path={'exchangeAndTrial'}>
                <Route path={'PointExchangeSetting'} component={PointExchangeSetting} />
                <Route path={'TrialApplySetting'} component={TrialApplySetting} />
                <Route path={'PointExchangeRecord'} component={PointExchangeRecord} />
                <Route path={'TrialApplyRecord'} component={TrialApplyRecord} />
            </Route>
            <Route path={'dashboard/index'} component={Dashboard} />
        </Route>
    </Route>;


ReactDOM.render(
  <Router history={hashHistory}>
      {routes}
  </Router>,
  document.getElementById('root')
);
