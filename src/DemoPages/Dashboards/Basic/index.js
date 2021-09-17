import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import classnames from 'classnames';
// import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {Doughnut} from 'react-chartjs-2';
import {
    // Row, Col,
    Button,
    // Card,
    // CardBody,
    Progress,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    // CardTitle,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import postman from '../../../assets/images/postman.jpg'
// import PageTitle from '../../../Layout/AppMain/PageTitle';
import SearchBox from '../../../Layout/AppHeader/Components/SearchBox';
// import MainChartExample from '../charts/MainChartExample.js'
import MainChartExample from '../../../views/charts/MainChartExample'

import {
    // AreaChart, Area, Line,
    // ResponsiveContainer,
    // Bar,
    // BarChart,
    // ComposedChart,
    // CartesianGrid,
    // Tooltip,
    // LineChart,
} from 'recharts';

import {
    // faAngleUp,
    faArrowRight,
    // faArrowUp,
    faArrowLeft,
    // faAngleDown,
    faEllipsisH,
    faAngleRight,
    faComment,
    // faPhone,
    faPhoneAlt,
    faDownload,
} from '@fortawesome/free-solid-svg-icons';
import {
    // CBadge,
    CButton,
    CButtonGroup,
    // CCard,
    CCardBody,
    // CCardFooter,
    // CCardHeader,
    CCol,
    // CProgress,
    CRow,
    // CCallout
} from '@coreui/react'
// import CIcon from '@coreui/icons-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

const data = {
    labels: [
        'Cars',
        'Trains',
        'Airplanes'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#8dace7',
            '#71deb9',
            '#ef869e'
        ],
        hoverBackgroundColor: [
            '#7097e1',
            '#4dd6a7',
            '#eb6886'
        ]
    }]
};

export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <div className="row">
                        <div style={{ fontWeight: 'bold', marginRight: '20px' }} className="col-md-6 col-lg-3 text-white">
                            Dashboard
                            <p>Monday, <span style={{ color: 'blue' }}>02 July 2020</span></p>
                        </div>
                        <div style={{ marginRight: '20px', marginLeft: '10px' }}>
                            <button style={{ width: '100px', height: '43px', color: 'white', fontWeight: 'bold' }} className="bg-info">+ Add</button>
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <SearchBox />
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="card mb-3 bg-dark widget-chart text-white card-border-2">
                                    <div className="widget-chart-actions">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle color="link" className="text-white">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-lg dropdown-menu-right">
                                                <Nav vertical>
                                                    <NavItem className="nav-item-header">
                                                        Activity
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="javascript:void(0);">
                                                            Chat
                                                            <div className="ml-auto badge badge-pill badge-info">8</div>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="javascript:void(0);">Recover Password</NavLink>
                                                    </NavItem>
                                                    <NavItem className="nav-item-divider" />
                                                    <NavItem className="nav-item-btn">
                                                        <Button size="sm" className="btn-wide btn-shadow"
                                                            color="danger">
                                                            Cancel
                                                        </Button>
                                                    </NavItem>
                                                </Nav>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </div>
                                    {/* <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-10" />
                                        <i className="lnr-screen text-success" />
                                    </div> */}
                                    <div>
                                        <div className="widget-subheading">
                                            Total Application
                                        </div>
                                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                            7956
                                        </div>
                                        <div className="widget-description text-white">
                                            <span className="pr-1">+3.59%</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card mb-3 bg-info widget-chart text-white card-border-2">
                                    <div className="widget-chart-actions">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle color="link" className="text-white">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-lg dropdown-menu-right">
                                                <Nav vertical>
                                                    <NavItem className="nav-item-header">
                                                        Activity
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="javascript:void(0);">
                                                            Chat
                                                            <div className="ml-auto badge badge-pill badge-info">8</div>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="javascript:void(0);">Recover Password</NavLink>
                                                    </NavItem>
                                                    <NavItem className="nav-item-divider" />
                                                    <NavItem className="nav-item-btn">
                                                        <Button size="sm" className="btn-wide btn-shadow"
                                                            color="danger">
                                                            Cancel
                                                        </Button>
                                                    </NavItem>
                                                </Nav>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </div>
                                    {/* <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-10" />
                                        <i className="lnr-screen text-success" />
                                    </div> */}
                                    <div>
                                        <div className="widget-subheading">
                                            Total Application
                                        </div>
                                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                            4658
                                        </div>
                                        <div className="widget-description text-white">
                                            <span className="pr-1">+0.6%</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card mb-3 bg-dark widget-chart text-white card-border-2">
                                    <div className="widget-chart-actions">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle color="link" className="text-white">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-lg dropdown-menu-right">
                                                <Nav vertical>
                                                    <NavItem className="nav-item-header">
                                                        Activity
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="javascript:void(0);">
                                                            Chat
                                                            <div className="ml-auto badge badge-pill badge-info">8</div>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="javascript:void(0);">Recover Password</NavLink>
                                                    </NavItem>
                                                    <NavItem className="nav-item-divider" />
                                                    <NavItem className="nav-item-btn">
                                                        <Button size="sm" className="btn-wide btn-shadow"
                                                            color="danger">
                                                            Cancel
                                                        </Button>
                                                    </NavItem>
                                                </Nav>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </div>
                                    {/* <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-10" />
                                        <i className="lnr-screen text-success" />
                                    </div> */}
                                    <div>
                                        <div className="widget-subheading">
                                            Total Application
                                        </div>
                                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                            1501
                                        </div>
                                        <div className="widget-description text-white">
                                            <span className="pr-1">-0.4%</span>
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div>
                                                Total Application
                                            </div>
                                            <div>
                                                <div className="text-center">20%</div>
                                                <p>Application</p>
                                                <Progress className="mb-3" color="success" value="20" />
                                                <p>Application</p>
                                                <div className="text-center">35%</div>
                                                <Progress className="mb-3" color="info" value="35" />
                                                <p>Application</p>
                                                <div className="text-center">50%</div>
                                                <Progress className="mb-3" color="warning" value={50} />
                                                <p>Application</p>
                                                <div className="text-center">55%</div>
                                                <Progress className="mb-3" color="danger" value={55} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 card-border-3">
                                <div style={{ marginTop: '20px' }} className="card mb-3 bg-dark widget-chart text-white card-border-3">
                                    <img className="card-border-3" style={{ width: '100%', height: '200px' }} src={postman} alt="postman" />
                                </div>
                                <div className="card mb-3 bg-dark widget-chart text-white card-border-3">
                                    <div style={{ marginBottom: '10px' }}>
                                        <div style={{ marginTop: '10px' }} className="widget-chart-actions">
                                            <UncontrolledButtonDropdown>
                                                <DropdownToggle color="link" className="text-white">
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <Nav>
                                                        <NavItem className="nav-item-header">
                                                            Activity
                                                        </NavItem>
                                                    </Nav>
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                        </div>
                                        <div style={{ marginTop: '20px' }}>
                                            <div className="widget-subheading">
                                                New Applicants
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">John Doe</div>
                                                                </div>
                                                                <div style={{ marginRight: '20px' }} className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar3} alt="Avatar" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Ruben Tillman</div>
                                                                </div>
                                                                <div style={{ marginRight: '20px' }} className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar2} alt="Avatar" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Elliot Huber</div>
                                                                </div>
                                                                <div style={{ marginRight: '20px' }} className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar1} alt="Avatar" /></div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Vinnie Wagstaff</div>
                                                                </div>
                                                                <div style={{ marginRight: '20px' }} className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">John Doe</div>
                                                                </div>
                                                                <div style={{ marginRight: '20px' }} className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar3} alt="Avatar" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Ruben Tillman</div>
                                                                </div>
                                                                <div style={{ marginRight: '20px' }} className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar2} alt="Avatar" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Elliot Huber</div>
                                                                </div>
                                                                <div style={{ marginRight: '20px' }} className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={avatar1} alt="Avatar" /></div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Vinnie Wagstaff</div>
                                                                </div>
                                                                <div style={{ marginRight: '20px' }} className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">
                                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CCardBody>
                            <CRow>
                                <CCol sm="5">
                                    <h4 style={{ color: 'white' }}>Application Received</h4>
                                </CCol>
                                <CCol sm="7" className="d-none d-md-block">
                                    <CButton color="primary" className="float-right">
                                        <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faDownload} />
                                        Download Report
                                    </CButton>
                                    <CButtonGroup className="float-right mr-3">
                                        {
                                            ['This Year', 'This Week', 'Today'].map(value => (
                                                <CButton
                                                    color="outline-secondary"
                                                    key={value}
                                                    className="mx-0"
                                                    active={value === 'Month'}
                                                >
                                                    {value}
                                                </CButton>
                                            ))
                                        }
                                    </CButtonGroup>
                                </CCol>
                            </CRow>
                            <MainChartExample style={{ height: '300px', marginTop: '40px' }} />
                        </CCardBody>
                        <div>
                            <Doughnut style={{with: '200px' }} data={data} />
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment >
        )
    }
}
