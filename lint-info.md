
> lesson-template@0.0.0 lint
> oxlint -W style

::warning file=tests/test1.test.js,line=5,endLine=5,col=14,endColumn=15,title=eslint(no-magic-numbers)::tests/test1.test.js:5:14: No magic number: 1
::warning file=tests/test1.test.js,line=5,endLine=5,col=17,endColumn=18,title=eslint(no-magic-numbers)::tests/test1.test.js:5:17: No magic number: 2
::warning file=tests/test1.test.js,line=5,endLine=5,col=26,endColumn=27,title=eslint(no-magic-numbers)::tests/test1.test.js:5:26: No magic number: 3
::warning file=vite.config.js,line=2,endLine=2,col=1,endColumn=36,title=eslint(sort-imports)::vite.config.js:2:1: Imports should be sorted alphabetically.
::warning file=src/main.jsx,line=3,endLine=3,col=1,endColumn=21,title=eslint(sort-imports)::src/main.jsx:3:1: Expected 'None' syntax before 'Single' syntax.
::warning file=src/App.jsx,line=2,endLine=2,col=1,endColumn=40,title=eslint(sort-imports)::src/App.jsx:2:1: Imports should be sorted alphabetically.
::warning file=src/App.jsx,line=5,endLine=5,col=1,endColumn=19,title=eslint(sort-imports)::src/App.jsx:5:1: Expected 'None' syntax before 'Single' syntax.
::warning file=src/App.jsx,line=1,endLine=1,col=1,endColumn=1,title=unicorn(filename-case)::src/App.jsx:1:1: Filename should be in kebab-case
::warning file=src/App.jsx,line=7,endLine=120,col=1,endColumn=2,title=eslint(func-style)::src/App.jsx:7:1: Expected a function expression.
::warning file=src/App.jsx,line=8,endLine=8,col=38,endColumn=39,title=eslint(no-magic-numbers)::src/App.jsx:8:38: No magic number: 0
::warning file=src/App.jsx,line=27,endLine=27,col=54,endColumn=55,title=eslint(no-magic-numbers)::src/App.jsx:27:54: No magic number: 1

Found 11 warnings and 0 errors.
Finished in 16ms on 4 files with 215 rules using 4 threads.
