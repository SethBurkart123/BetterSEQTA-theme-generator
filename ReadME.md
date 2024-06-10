# BetterSEQTA Theme Generator

A repository to assist in packaging CSS frameworks into BetterSEQTA+ Themes.

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/SethBurkart123/BetterSEQTA-theme-generator.git
```

2. Install dependencies

```bash
npm install
```

3. This project uses postcss and postcss-cli, so you can build your custom themes by opening package.json and creating a script with  different input and output css file. Then run it with:

```bash
npm run <script-name>
```

For example: I created the hacker script, which uses the hacker.css file and outputs a output.css file. So to build the hacker theme, you would run:

```bash
npm run hacker
```

It will auto update as you make changes to the css files.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)