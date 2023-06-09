// git commit 提交检查 git commit -m 'feat(login): remember user name'
// 如果使用git commit提交完，发现有东西还要该，且还未push。可以使用 git commit --amend -a 进行附加
// 校验最新一条commit-msg是否正确     npx commitlint --from HEAD~1 --to HEAD --verbose
// 如果要撤回一次commit，且原来的代码保留  git reset --soft HEAD^

// https://github.com/vuejs/core/blob/main/scripts/verifyCommit.js
//  "gitHooks": {
//    "pre-commit": "lint-staged",
//    "commit-msg": "node scripts/verifyCommit.js"
//  },
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2, // 报错级别 可选 0 ，1 ，2 0为disable，1为warning，2为error
      'always', // 应用与否 可选always|never
      [
        'feat', // 新增特性
        'fix', // 修补bug
        'perf', // 优化相关，比如提升性能或者使用体验
        'style', // 代码格式优化，如空格，缩进，逗号等
        'docs', // 文档变动
        'test', // 增加测试
        'refactor', // 代码重构
        'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        'ci', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'revert', // 回滚到上个版本
        'update', // 更新某个功能 文件
        'wip', // Work In Process 表示代码还在开发，暂时不能合入
        'types', // typescript类型添加、变动
        'release', // 发布新的版本
      ],
    ],
  },
}
