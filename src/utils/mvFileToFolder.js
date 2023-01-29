// import
let fs = require('fs');
let path = require('path');

// arguments
const src = process.argv[2];

(function mvFileToFolder() {
  if (!src) {
    return console.log('not found arguments');
  }

  // получить файлы в директории
  fs.readdir(src, (err, files) => {
    if (err) return console.log(err);

    files.forEach((file) => {
      // проверить папка или файл
      fs.stat(`${src}/${file}`, (err, status) => {
        if (err) return console.log(err);

        // если файл то
        if (status.isFile()) {
          let nameFolder = path.parse(file).name;
          // создать папку для файла
          fs.mkdir(`${src}/${nameFolder}`, (err) => {
            if (err) console.log(err);
          });
          // переместить файл в созданную директорию
          fs.rename(`${src}/${file}`, `${src}/${nameFolder}/${file}`, (err) => {
            if (err) return console.log(err);
            console.log(
              `файл ${file} успешно перемещен в директорию ${nameFolder}`
            );
          });
        }
      });
    });
  });
})(src);
