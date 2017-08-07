// モジュール読み込み
var module_1 = require('./module/module_1.js');
var module_2 = require('./module/module_2.js');
var $ = require('jquery'); // npmでjqueryをインストールして置けば持ってこれる！

// モジュールを使って計算する値
var number1 = 20;
var number2 = 35;

// モジュールを使って計算
var num = module_2(module_1(number1, number2));

// モジュールで算出した値をhtmlに埋め込む
$(function() {
  var $div = $('<div>');
  $('body').append($div.text('webpackで作った値は「' + num + '」です！'));
});
