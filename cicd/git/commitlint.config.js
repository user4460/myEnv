// @ts-check
//commitlintとは、コミットメッセージの書式をチェックするツールです。
/** @type {import('@commitlint/types').UserConfig} */
const commitlintConfig = {
   extends: ['@commitlint/config-conventional'],
}

module.exports = commitlintConfig