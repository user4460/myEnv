//releasercとは、semantic-releaseの設定ファイルである。
//semantic-releaseは、npmのパッケージである。
//semantic-releaseは、gitのコミットメッセージから、バージョンを自動で判断してくれる。
module.exports = {
  ...require('./.releaserc.base'),
}
