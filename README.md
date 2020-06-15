# lcov-average

<!-- PROJECT SHIELDS -->

![Node.js CI](https://github.com/Kirkhammetz/lcov-total/workflows/default/badge.svg)

<!-- toc -->

- [About The Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- tocstop -->

## About The Project

This simple package aim to parse `lcov.info` files and provide the total coverage `Number` without fancy formatting or anything else, either in stdout or programmatically.

Here's why:

- You need to assest coverage in your CI and fail below certain threshold
- you don't want to do unredable `awk` chains
- every other options outputs fancy colored output which is tediuous to parse and error prone

<!-- GETTING STARTED -->

## Installation

You can install locally

```sh
npm install lcov-total
```

You can install glocally

```sh
npm install -g lcov-total
```

Or use NPX

```sh
npx lcov-total
```

<!-- USAGE EXAMPLES -->

## Usage

You can use `lcov-total` from command line providing `lcov.info` file location eg:

```sh
npx lcov-total lcov.info
# 100.00
```

If you pass the `--gte=value` flag you will get an exitCode 0 or 1 based on resulting `coverage >= value` expression, eg:

```sh
npx lcov-total lcov.info --gte=90
echo $?
# 0
```

Or programmatically

```js
const lcovTotal = require("lcov-total");
lcovTotal("/path/to/lcov.info"); // this throws if any error
```

<!-- CONTRIBUTING -->

## Contributing

Project is pretty simple and straight forward for what is my needs, but if you have any idea you're welcome.

This projects uses [commitizen](https://github.com/commitizen/cz-cli) so be sure to use standard commit format or PR won't be accepted

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat(scope): some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Simone Corsi - [@im_simonecorsi](https://twitter.com/im_simonecorsi)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [lcov parsing mega switch](https://github.com/davglass/lcov-parse) - from davglass
