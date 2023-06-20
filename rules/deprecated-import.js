"use strict"

module.exports = {
  meta: {
    type: "layout",
    fixable: "code",
    schema: [
      {
        type: "array",
        items: {
          type: "string",
        },
        additionalProperties: false,
      }
    ],
    docs: {
      description: "deprecated된 Module 사용하지 않기",
    }
  },
  create(context) {
    function isIncludePath(srcValue, regexList) {
      for (let i = 0; i < regexList.length; i++) {
        const regex = regexList[i]

        if (!!RegExp(regex, "u").exec(srcValue)) {
          return true
        }
      }

      return false
    }

    return {
      ImportDeclaration(node) {
        const srcValue = node.source.value
        const regexGroup = context.options[0] || [];

        if (isIncludePath(srcValue, regexGroup)) {

          context.report({
            node,
            message: `${srcValue}은(는) Deprecated된 모듈입니다. 다른 모듈로 변경해주세요.`,
            fix(fixer) {
              return fixer.remove(node);
            }
          })
        }
      }
    };
  }
};