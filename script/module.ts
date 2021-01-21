import fs from 'fs';
import path from 'path';

const modulePath: string | undefined = process.argv[2];

if (!modulePath) {
    throw new Error('Path is not defined');
}

const completePath = `../src/module/${modulePath}`;

if (fs.existsSync(path.join(__dirname, completePath))) {
    throw new Error('Module is Exist');
}

fs.mkdirSync(path.join(__dirname, completePath));
fs.mkdirSync(path.join(__dirname, `${completePath}/component`));
