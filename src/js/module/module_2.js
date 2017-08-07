/**
 * 値を5000倍にするモジュール
 */
(function(mod) {
  if (typeof exports === 'object') {
    // exportsがあればモジュール化
    module.exports = mod();
  } else {
    // 通常の読み込み
    window.module_2 = mod();
  }
})(function() {
  // モジュールの処理
  var module_2 = function(num1) {
    return num1 * 5000;
  };
  return module_2;
});