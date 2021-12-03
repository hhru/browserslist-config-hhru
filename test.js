const { spawn } = require('child_process');
const config = require('./index');

const tester = spawn('npx', ['browserslist@latest', config.join(', ')], { stdio: 'inherit' });

tester.on('exit', (code) => {
    if (code !== 0) {
        throw new Error('Versions list failed, see error above');
    }
})
