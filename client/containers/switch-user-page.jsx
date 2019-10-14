import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AppContext from '../context';
import { Link } from 'react-router-dom';

export default class SwitchUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOptions: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="switchUserContainer m-3 rounded p-5 d-flex flex-column justify-content-center">
          <h1 className="d-block mx-auto">Switch User </h1>
          <div className="d-flex flex-wrap mx-auto">
            <UncontrolledDropdown className="switchUserDropDown p-4" size="lg">
              <DropdownToggle caret>
        Creator
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 2, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(2, 'creator');
                }}><Link to='/creator-portfolio/2' className="text-dark">Shane McGrath</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 1, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(1, 'creator');
                }}><Link to='/creator-portfolio/1' className="text-dark">Daniel Paschal</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 3, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(3, 'creator');
                }}><Link to='/creator-portfolio/3' className="text-dark">Sam Durant</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 4, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(4, 'creator');
                }}><Link to={`creator-portfolio/4`} className="text-dark">John South</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 5, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(5, 'creator');
                }}><Link to='creator-portfolio/5' className="text-dark">Rachael Yamagata</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="switchUserDropDown p-4" size="lg">
              <DropdownToggle caret>
          Company
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 1, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(1, 'company');
                }}><Link to='/company-dashboard/1' className="text-dark">Target</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 2, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(2, 'company');
                }}><Link to='/company-dashboard/2' className="text-dark">San Diego Zoo</Link>
                </DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 3, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(3, 'company');
                }}><Link to='/company-dashboard/3' className="text-dark">Tampax</Link>
                </DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 4, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(4, 'company');
                }}><Link to='/company-dashboard/4' className="text-dark">Volkswagen</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 5, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(5, 'company');
                }}><Link to='company-dashboard/5' className="text-dark">TM Productions</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
SwitchUserPage.contextType = AppContext;
