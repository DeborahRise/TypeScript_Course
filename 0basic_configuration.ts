// // Setting up a basic Typescript project. 
// 1. Install node lts version. Visit Documentation
// 2. install TypeScript Globally. # npm install -g typescript
// 3. initialiaze a package.json file / node project - #npm init -y
// 4. install typescript as a dependeency in package.json - # npm install typescript --save-dev
// 5. Create the tcConfig.json fie - # npx tsc --init
// Note: in this tsConfig.json file, we configure
// rootDir => the file/directory that ts will compile e.g "./src"
// outDir =>  the file/directory that the ts file will be compiled/ build into e.g "./build/js"
// javascript => Target setting. exports.g Es2016
// other setting => at the bottom of the tsc config File, add this line
// # "include": [
// "src"
// ].
// the above ensures that only ts files inside the src folder are compiled, no where else. ignores any typescript file anywhere else.

// 6. in the package.json File, you can specify how your ts file will be compiled into js and run, by adding a script command else.g "dev":  "tsc && node file.js" 
// or run the above directly on the terminal.

// NOTE: in other to not have to recompile the file everytime by running "npm run dev" always, you can use the "tsc -w" on the terminal. the "-w flag" watches for any changes in any ts File.

// Also; to view your changes live, you can add the compiled main.js file to the index.html javascript source File, click on Go Live and watch changes live on your browser or on devtools console log.

// Finally: all of the setup process above can be simlpy shortened by using vite to setup a basic typsescript project.

// npm init vite@latest nameOfProject -- --template vanilla-ts

// cd into project
// run "npm install"
// run "npm run dev"

// also Note that this will vary for the different types and frameworks of Javascript/typsescript