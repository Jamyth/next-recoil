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

const splitted = modulePath.split('/');
const isSingleWord = splitted.length === 1;

let moduleName = splitted[0];

const rootPath = path.join(__dirname, completePath);
const componentPath = path.join(__dirname, `${completePath}/component`);

if (!isSingleWord) {
    console.info(`Generating Folder for src/module/${splitted[0]}`);
    fs.mkdirSync(path.join(__dirname, `../src/module/${splitted[0]}`));
}
console.info(`Generating Folder for src/module/${modulePath}`);
fs.mkdirSync(rootPath);
console.info(`Generating Folder for src/module/${modulePath}/component`);
fs.mkdirSync(componentPath);

if (!isSingleWord) {
    const secondArg = splitted[1];
    const parcelCase = secondArg[0].toUpperCase() + secondArg.substring(1);
    moduleName += parcelCase;
}

const camelCase = moduleName;
const parcelCase = camelCase[0].toUpperCase() + camelCase.substring(1);

const indexContent = `
import Recoil from 'recoil';
import { Main } from './component/Main';
import type {State} from './type';

const initialState: State = {};

export const ${camelCase}State = Recoil.atom<State>({
  key: '${parcelCase}State',
  default: initialState
});

export { Main }
`;

const typeContent = `
export interface State {}
`;

const mainContent = `
import React from 'react';
import { GetServerSideProps } from 'next';
import './index.scss';

export const Main = React.memo(() => {
    return (
        <div id="${camelCase}"/>
    )
});

export const getServerSideProps: GetServerSideProps = async (context) => {}
`;

const scssContent = `
#${camelCase} {
    
}
`;

console.info(`Writing src/module/${modulePath}/index.ts`);
fs.writeFileSync(rootPath + '/index.ts', indexContent, 'utf8');
console.info(`Writing src/module/${modulePath}/type.ts`);
fs.writeFileSync(rootPath + '/type.ts', typeContent, 'utf8');
console.info(`Writing src/module/${modulePath}/component/Main.tsx`);
fs.writeFileSync(componentPath + '/Main.tsx', mainContent, 'utf8');
console.info(`Writing src/module/${modulePath}/component/index.scss`);
fs.writeFileSync(componentPath + '/index.scss', scssContent, 'utf8');
