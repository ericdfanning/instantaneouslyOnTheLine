import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.div`
  height: 50px;
  width: 100%;
  margin-bottom: 15px;
  background-color: black;
  color: white;
`;

const BarItems = styled.div`
	font-size: 20px;
	float: right;
	margin-right: 15px;
	margin-top: 15px;
	margin-left: 15px;
  color: inhert;
`;


const NavBar = () => 
	<Bar>
		<BarItems><Link to="/home">Home</Link></BarItems>
	</Bar>

export default NavBar;