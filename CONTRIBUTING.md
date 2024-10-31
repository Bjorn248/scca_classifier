# Contributing
First of all, thank you for your interest in this project! It is a large undertaking and I appreciate
all the help and feedback I can get.

## Styleguide
This project has an `.eslintrc.yml` file that defines the style standards for the project. Please use
eslint when editing to ensure that there are no style issues.
One item of note is dangling commas. We want dangling commas. This cleans up git diffs and makes
copy/pasting within the code much easier.

## Repo Layout
All website code is stored in `src`. The code that is used to generate the website is stored in
`templates`.

```
src
├── a
│   ├── cam.html
│   ├── ev.html
│   ├── index.html
│   ├── m.html
│   ├── p.html
│   ├── s.html
│   ├── sm.html
│   ├── sp.html
│   ├── ssc.html
│   ├── st.html
│   └── x.html
├── common.js
├── favicon.ico
├── index.html
├── rr
│   └── index.html
└── styles.css
templates
├── a
│   ├── m.html.tmpl
│   ├── p.html.tmpl
│   ├── s.html.tmpl
│   ├── sm.html.tmpl
│   ├── sp.html.tmpl
│   ├── ssc.html.tmpl
│   └── st.html.tmpl
└── common.js.tmpl
```

Underneath `a` (for autocross) there a `.html` file for each class. This needs to have an entry in
`common.js` under  `subclassMap` as well as `carFlags`. `carFlags` determines the order in which the
various divs on the class page are either shown or hidden as questions are answered.

`rr` is currently not finished or used, but my hope was to make this the road racing (GCR) section
of the website. I started with autocross since that's what I am more familiar with currently.

## Fixing a class/year issue
All the makes, models, and years are stored in a HUGE object called `allSoloCars` in `src/common.js`.
This file is generated from a `templates/common.js.tmpl`. You can iterate in src/common.js locally but
PRs must include a change to both the file in `templates` and the file in `src`.

Adjusting the classing for a car should be as simple as finding it and fixing the array that defines
its classes.

## Adding a class
This is a bit more complicated, but basically it boils down to copying an existing class page, such
as `src/a/xs.html` and replacing all instances of `xs` and `xtreme street` with your new class
information.

## Sorting allSoloCars
The website displays the makes, models, years, etc of the cars in allSoloCars in the order that they
appear. This means that we currently need to "offline sort" this. I have used the `sort.js` file in
the repo root in the past to do this. You also need to uncomment the line with

```javascript
module.exports = {allSoloCars};
```

so that sort.js can load the `allSoloCars` object. After running it through sort.js, I've used a
combination of vim and the python version of [jsbeautify](https://github.com/beautify-web/js-beautify)
to wrangle the js into something nice with a minimal diff
to the current `common.js`. You probably won't have to worry about sorting, but in case you were
curious, or had suggestions for how to improve this, I thought I'd share my current process. This
isn't something that happens often, so the fact that it's a bit tedious currently isn't _too_ bad.

### Generate the file
```
node sort.js > sorted.js
```

### Make it valid js
Add `const allSoloCars =` to the beginning and `;` to the end to make it 'valid' js.

### Use single quotes
```
:%s/"/'/g
```

### Restore trailing commas
```
:%s/\]\n/],\r/g
:%s/\}\n/},\r/g
```

### Beautify
```
js-beautify -d -j -s 2 sorted.js > pretty_sorted.js
```

Then you can copy the contents of pretty_sorted.js into src/common.js, replacing the allSoloCars constant.

### Clean Up
Delete the extra js files you made along the way and check the git diff to make sure the changes are
as you expect.
