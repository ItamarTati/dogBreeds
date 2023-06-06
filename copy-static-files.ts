const copyfiles = require('copyfiles');

copyfiles(['static/**/*', 'dist/static'], { up: 1 }, (err) => {
  if (err) {
    console.error('Error copying static files:', err);
    process.exit(1);
  }

  console.log('Static files copied successfully!');
});