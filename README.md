# scca_classifier
SCCA Rules Visual Aid and Classifier

Hosted at [https://www.scca-classifier.com](https://www.scca-classifier.com)

## Build Status
[![Build Status](https://github.com/Bjorn248/scca_classifier/actions/workflows/build.js.yml/badge.svg)](https://github.com/Bjorn248/scca_classifier/actions/workflows/build.js.yml)

The idea behind this project is to make it easy to understand the SCCA Classifications rules.
Focusing mainly on Solo (Autocross) classifications in the beginning. Initial thought is a
turbo tax-esque interface that asks a series of questions and tries to determine your class based
on the answers. Also, an interactive visual representation of the classes might be useful. The
intention is to initially write a web application and then write a mobile application.

## Project Goals
* Completely static site, no backend server/API calls
* Written in vanilla HTML5, CSS, and Javascript - no heavy web frameworks (mainly so I can learn
web development)
* Is responsive so that it works seamlessly on mobile and desktop
* To simplify the SCCA rules so that anyone can answer a series of questions about their car and
know which class or classes they are eligible to compete in

## Local Development
To run this project locally, simply start a local webserver to host the files.
I prefer this simple python server.
```
python -m http.server
```

## Rules
This has been updated for the 2022 Solo (autocross) rules.

The download URL for the set of rules used to build the current version of the website can be found
here: https://www.scca.com/downloads/60877-2022-solo-rule-book-1/download
