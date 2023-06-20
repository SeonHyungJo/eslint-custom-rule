"use strict"

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "해야할 일을 표시해 놓고 하지 않는 곳을 알려줍니다."
    },
    fixable: "code",
    schema: []
  },
  create(context) {
    function findComments(comment) {
      if (comment.value.toLowerCase().indexOf("todo") !== -1) {
        context.report(comment, `[${comment.value.trim().substr(4)}] 작업이 있습니다.`)
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