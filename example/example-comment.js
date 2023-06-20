import dayjs from "dayjs"

import Util from "./module/utils"

function getBarString() {
  return "bar" + undefined; // FIXME 수정하기
}

function incorrectFoo() {
  return "baz"; // TODO getBarString을 이용해서 가져오기
}

console.log(Util.test())
console.log(incorrectFoo())