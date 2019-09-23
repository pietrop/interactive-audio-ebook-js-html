## Brief of the project
<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

<!-- throwaway test part 3  -->

_Work in progress_

## Setup
<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:pietrop/interactive-audio-ebook.git
```

```
cd interactive-audio-ebook
```

```
npm install
```

## Usage

_TBC_

## System Architecture
<!-- _High level overview of system architecture_ -->

[Working diagram here](https://docs.google.com/document/d/1-vl6xtxyHv7osN5B3NZ_T1QYiHfyJU158pOtASikkJQ/edit?usp=sharing)

_TBC_

## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) 

## Development env
 <!-- _How to run the development environment_ -->

- npm > `6.1.0`
- [Node 10 - dubnium](https://scotch.io/tutorials/whats-new-in-node-10-dubnium)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc) 

<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build
<!-- _How to run build_ -->

_TBC_

## Tests
<!-- _How to carry out tests_ -->

_TBC_

## Deployment
<!-- _How to deploy the code/app into test/staging/production_ -->


To github pages at [http://pietropassarelli.com/interactive-audio-ebook/huckfinn_01_twain_apc_64kb.html](http://pietropassarelli.com/interactive-audio-ebook/huckfinn_01_twain_apc_64kb.html)

```
npm run deploy:ghpages
```



<!-- 
- Get the data
    - audio files
    - audio urls 
    - text

- Alignement
    - run STT on the data
    - Align STT result with accurate text
    - get json 
    

- react app 
    - make interactive page
        - audio url end point
        - aligned text json 
 -->