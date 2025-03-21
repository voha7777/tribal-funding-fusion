
const { exec } = require('child_process');

console.log('Building Astro static site...');

// Run the Astro build command
exec('npx astro build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during build: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Build stderr: ${stderr}`);
  }
  
  console.log(`Build stdout: ${stdout}`);
  console.log('Static site built successfully! The output is in the /dist directory.');
  console.log('You can now deploy the contents of the /dist directory to your hosting provider.');
});
