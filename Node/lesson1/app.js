// const fileData = require('./dir/file1');
// require('./folder');
//
// fileData.greeting('Мирослава');
//
// console.log(__dirname);
// console.log(__filename);
//

const fs = require('fs');
const path = require('path');

//  usr/bin/web
const textPath = path.join(__dirname, 'dir', 'text.txt');
const folderWithDeletedData = path.join(__dirname, 'folder', 'deleter.txt');
const dirToReadPath = path.join(__dirname, 'dir');



// fs.writeFile(textPath, 'HELLO 22222', err => {
//     console.log(err);
// });

// fs.appendFile(textPath, 'NEW HELLO \n', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log('DONE');
// });

// const mkDirPath = path.join(__dirname, 'dir', 'folder2', 'innerFolder', 'HELLxxxx');
//
// fs.mkdir(mkDirPath, { recursive: true }, err => {
//     console.log(err);
// });

// fs.readFile(textPath, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     // fs.appendFile(textPath2, data, err1 => {
//     //
//     // })
//
//     console.log(data.toString());
// });

// fs.readdir(dirToReadPath, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     // console.log(files);
//
//     files.forEach(file => {
//         const filePath = path.join(dirToReadPath, file);
//         fs.stat(filePath, (err1, stats) => {
//             console.log('____________________________________');
//             console.log(stats.isFile(), 'isFile');
//             console.log(stats.isDirectory(), 'isDirectory');
//             console.log(stats.size);
//             console.log('____________________________________');
//         })
//     })
// });

//
// fs.rmdir(dirToReadPath,err => {
//     console.log(err);
// });

// fs.unlink(path.join(__dirname, 'dir', 'text2.txt'), err => {
//     console.log(err);
// })

// fs.rename(textPath, folderWithDeletedData, err => {
//     console.log(err);
// });

// const util = require('util');
// const appendPromise = util.promisify(fs.appendFile);
//
// appendPromise(folderWithDeletedData, 'TEXT DATA WITH PROMISE \n')
//     .catch(reason => {
//         console.log(reason);
//     })

const readStream = fs.createReadStream(folderWithDeletedData);
const writeStrm = fs.createWriteStream(textPath);

console.time('STRM')
readStream.on('data', chunk => {
    writeStrm.write(chunk);
});

// readStream.pipe(writeStrm);
console.timeEnd('STRM');