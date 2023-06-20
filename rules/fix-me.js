"use strict"

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "수정해야하는 곳이 표시되어 있을 경우 알려줍니다.",
    },
    fixable: "code",
    schema: []
  },
  create(context) {
    function findComments(comment) {
      if (comment.value.toLowerCase().indexOf("fixme") !== -1) {
        context.report(comment, `[${comment.value.trim().substr(5)}]을(를) 확인해주세요.`)
      }
    }

    return {
      Program(node) {
        let sourceCode = context.sourceCode;
        let comments = sourceCode.getAllComments();

        for (const comment of comments) {
          findComments(comment)
        }
      }
    };
  }
};