import chokidar from 'chokidar';
import { exec } from 'child_process';
import fs from 'fs';
import clipboardy from 'clipboardy';

// Get file paths from command line arguments
const [sourceFile, outputFile] = process.argv.slice(2);

if (!sourceFile || !outputFile) {
  console.error('Usage: ts-node watch-and-copy.ts <source-file> <output-file>');
  process.exit(1);
}

// Function to copy file contents to clipboard
const copyToClipboard = (filePath: string) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    clipboardy.writeSync(data);
    console.log('Copied to clipboard!');
  });
};

// Function to run postcss command
const runPostcss = () => {
  exec(`postcss ${sourceFile} -o ${outputFile}`, (err) => {
    if (err) {
      console.error(`Error running postcss: ${err}`);
      return;
    }
    console.log('Postcss done!');
    copyToClipboard(outputFile);
  });
};

// Watch for changes in the source CSS file
chokidar.watch(sourceFile).on('change', () => {
  console.log('File changed, running postcss...');
  runPostcss();
});

// Initial run
runPostcss();
