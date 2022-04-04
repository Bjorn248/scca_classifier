# Contributing
First of all, thank you for your interest in this project! It is a large undertaking and I appreciate
all the help and feedback I can get.

## Styleguide
This project has an `.eslintrc.yml` file that defines the style standards for the project. Please use
eslint when editing to ensure that there are no style issues.
One item of note is dangling commas. We want dangling commas. This cleans up git diffs and makes
copy/pasting within the code much easier.

## Repo Layout
All website code is stored in `src`.

```
src/
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
│   └── xs.html
├── common.js
├── favicon.ico
├── index.html
├── rr
│   └── index.html
└── styles.css
```

Underneath `a` (for autocross) there a `.html` file for each class. This needs to have an entry in
`common.js` under  `subclassMap` as well as `carFlags`. `carFlags` determines the order in which the
various divs on the class page are either shown or hidden as questions are answered.

`rr` is currently not finished or used, but my hope was to make this the road racing (GCR) section
of the website. I started with autocross since that's what I am more familiar with currently.

## Fixing a class/year issue
All the makes, models, and years are stored in a HUGE object called `allSoloCars` in `src/common.js`.
Adjusting the classing for a car should be as simple as finding it and fixing the array that defines
its classes.

## Adding a class
This is a bit more complicated, but basically it boils down to copying an existing class page, such
as `src/a/xs.html` and replacing all instances of `xs` and `xtreme street` with your new class
information.

## Sorting allSoloCars
The website displays the makes, models, years, etc of the cars in allSoloCars in the order that they
appear. This means that we currently need to "offline sort" this. I have used the `sort.js` file in
the repo root in the past to do this. You also need to ucomment the line with

```javascript
module.exports = {allSoloCars};
```

so that sort.js can load the `allSoloCars` object. After running it through sort.js, I've used a
combination of vim and python + jsbeautify to wrangle the js into something nice with a minimal diff
to the current `common.js`. Probably you won't have to worry about sorting, but in case you were
curious, or had suggestions for how to improve this, I thought I'd share my current process.
