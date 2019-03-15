import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './input.scss';
import { findAge } from './backEnd.js';
import { GalacticAge } from './backEnd.js';

$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    let month = $("#month").val();
    let date = $("#date").val();
    let year = $("#year").val();
    let life = parseFloat($("#life").val());
    let age = findAge(month, date, year);
    let spaceAges = new GalacticAge(age);
    let earth = spaceAges.yearsLeft(life, spaceAges.age);
    let mercury = spaceAges.yearsLeft(life, spaceAges.ageMercury);
    let venus = spaceAges.yearsLeft(life, spaceAges.ageVenus);
    let mars = spaceAges.yearsLeft(life, spaceAges.ageMars);
    let jupiter = spaceAges.yearsLeft(life, spaceAges.ageJupiter);
    $(".output").html(`Your Earth age is: ${age} <br>
      ${earth} <br><br>
      Your Mercurian age is: ${spaceAges.ageMercury} <br>
      ${mercury} <br><br>
      Your Venusian age is: ${spaceAges.ageVenus} <br>
      ${venus} <br><br>
      Your Martian age is: ${spaceAges.ageMars} <br>
      ${mars} <br><br>
      Your Jupiterian age is: ${spaceAges.ageJupiter} <br>
      ${jupiter}`);
  });
});
