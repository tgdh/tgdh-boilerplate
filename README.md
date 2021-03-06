# TGDH front-end boilerplate
> Boilerplate to kickstart front-end projects

This project is always in development but is in a good state to be used.

## Generator
New projects can be started by using the Yeoman [generator](https://github.com/tgdh/generator-tgdh-boilerplate)

## Installing / Getting started

A quick introduction of the minimal setup you need to get running.

```shell
git clone https://github.com/tgdh/tgdh-boilerplate.git
cd tgdh-boilerplate
npm install
bower install
```

This will clone the working repository and install any dependencies from NPM and Bower.

## Developing

### Prerequisites

The following dependencies are required to run the boilerplate:

- [Node](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)
- [Bower](https://bower.io/)
- [SASS](http://sass-lang.com/)

### Development/Building

The dev task runs everything you need while actively working on the project
```bash
gulp dev
```

Running the build task will take care of everything ready for deployment
```bash
gulp build
```

## Style guides

More details about the code styles can be found here:

- [CSS styleguide](docs/css-styleguide.md)
- [JS styleguide](docs/js-styleguide.md)


## Browser support

This project has been built with progressive enhancement at its core. It uses an approach first coined by the BBC known as [Cutting the Mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard).
