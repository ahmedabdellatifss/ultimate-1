$(function(){
    'use strict';
    $('.toggle-sidebar').on("click" , function (){
        $('.content-area, .sidebar').toggleClass("no-sidebar");

    });
});
const map = new Map();
const mySet = new Set();