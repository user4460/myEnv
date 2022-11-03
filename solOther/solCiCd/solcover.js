module.exports = {
    //norpcとは、Ethereumノードを使用せずに、トランザクションを送信するために使用されるオプションです。
    norpc: true,
    //testCommandとは、テストを実行するために使用されるコマンドです。
    testCommand: 'npm test',
    compileCommand: 'npm run compile',
    skipFiles: [
        'mocks',
    ],
    //providerOptionsとは、テストネットワークを使用するためのオプションです。
    providerOptions: {
        default_balance_ether: '10000000000000000000000000',
    },
    mocha: {
        fgrep: '[skip-on-coverage]',
        invert: true,
    },
}