# daizu-online-judge-frontend

[![Actions Status](https://github.com/SoyBeansLab/daizu-online-judge-frontend/workflows/CI/badge.svg?branch=develop)](https://github.com/SoyBeansLab/daizu-online-judge-frontend/actions)

## Development

```shell
$ npm install
$ npm run start
```

### Environment variables
Please set the environment variables of the table to .env, etc.

|          Variable name         | Default value |
|:------------------------------:|:-------------:|
|  REACT\_APP\_DEV\_API\_SERVER  |       ""      |
|   REACT\_APP\_AUTH0\_DOMAIN    |       ""      |
|  REACT\_APP\_AUTH0\_CLIENT\_ID |       ""      |

### Storybook

Build the storybook.
```shell
$ npm run build-storybook 
```

Build and serve the storybook.
```shell
$ npm run storybook
```

### mock
Generate a mock file.  
using [axios-mock-server](https://github.com/m-mitsuhide/axios-mock-server).

```shell
$ npm run mock
```

### format
Automatically do a prettier format when saving.

```shell
$ npm run prettier-watch
```

## Contributing
Please read [this](https://github.com/SoyBeansLab/daizu-online-judge/wiki/Contributions).

## Author
SoyBeansLab

## License
MIT License
