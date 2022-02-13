import React from 'react';
import Navbar from '../Components/Navbar';
import Jumbotron from '../Components/Jumbotron';
import Content from '../Components/Content';
import data from '../Json/text.json';
import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
function LandingPage() {
  return (
    <>
      <Navbar />
      <Jumbotron datas={data.link} />
      <Content datas={data.about} cards={data.card} skills={data.skill} />
    </>
  );
}

export default LandingPage;
