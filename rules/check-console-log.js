"use strict"

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "코드에 있는 console.log를 찾아서 알려줍니다.",
    },
    fixable: "code",
    schema: []
  },
  create(context) {
    function isConsoleLog(node) {
      const { object, property } = node
      return object.name === "console" && property.name === "log"
    }

    return {
      MemberExpression(node) {
        if (isConsoleLog(node)) {
          context.report({
            node, node,
            message: "console.log가 있습니다. 사용하지 않을 경우 제거해주세요.",
            fix(fixer) {
              return fixer.remove(node.parent);
            }
          })
        }
      }
    }
  }
};