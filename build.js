const fs = require('fs-extra');
//const childProcess = require('child_process');


try {

    // Remove current build
    fs.removeSync('./dist/');

    // Copy front-end files
    fs.copySync('./src/public', './dist/public');
    fs.copySync('./src/views', './dist/views');
    
    // // Transpile the typescript files
    // const proc = childProcess.exec('tsc: build - tsconfig.prod.json');
    // const proc = childProcess.exec('tsc --build tsconfig.json');
    // proc.on('close', (code) => {
    //     if (code !== 0) {
    //         console.log(code)
    //         throw Error("Build failed")
    //     }
    // })
} catch (err) {
    console.log(err);
}
