import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './style.css';

function App() {
  return (
<div class="container">
  <h1 class="title"> 冷蔵庫</h1>
  <div class="boxes">
    <div>
      <p class="content-title">１番目の要素</p>
      <div class="content-box">
        <button class="contents">中身</button> 
        <button class="contents">中身</button> 
        <button class="contents">中身</button> 
      </div>
    </div>
    <div>
      <p class="content-title">１番目の要素</p>
        <div class="content-box">
          <button class="contents">中身</button> 
          <button class="contents">中身</button> 
          <button class="contents">中身</button> 
        </div>
    </div>
    <div>
      <p class="content-title">１番目の要素</p>
      <div class="content-box">
        <button class="contents">中身</button> 
        <button class="contents">中身</button> 
        <button class="contents">中身</button> 
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
