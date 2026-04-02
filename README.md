# Exercism — JavaScript

> Exercises completed on [Exercism.org](https://exercism.org), organized by topic.

## About

This repository contains all JavaScript exercises worked through on the Exercism platform. Each exercise lives in its own folder, named after the exercise.

## Structure

```
exercism/javascript/
└── exercise-name/
    ├── exercise-name.js       # Solution
    └── exercise-name.test.js  # Tests
```

## Running the tests

## Setup

Go through the setup [instructions for JavaScript][docs-exercism-javascript] to install the necessary dependencies.

## Requirements

Install assignment dependencies:

```shell
corepack pnpm install
```

If `corepack` complains about not being enabled, you can do so by running:

```bash
corepack enable pnpm
```

## Making the test suite pass

All exercises come with a test suite to help you validate your solution before submitting.
You can execute these tests by opening a command prompt in the exercise's directory, and then running:

```bash
corepack pnpm test
```

In some test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to `test`.

## Writing custom tests

If you wish to write additional, custom, tests, create a new file `custom.spec.js`, and submit it with your solution together with the new file:

```shell
exercism submit numbers.js custom.spec.js
```
