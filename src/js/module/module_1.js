/**
 * 値１と値２を足すモジュールi
 */
(function(mod) {
  if (typeof exports === 'object') {
    // exportsがあればモジュール化
    module.exports = mod();
  } else {
    // 通常の読み込み
    window.module_1 = mod();
  }
})(function() {
  // モジュールの処理
  var module_1 = function(num1, num2) {
    return num1 + num2;
  };
  return module_1;
});