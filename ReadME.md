# BetterSEQTA Theme Generator

A repository to assist in packaging CSS frameworks into BetterSEQTA+ Themes.

## Features

- Ability to use @import to import and break down styles
- Ability to use mixins to create reusable styles
- Ability to use simple variables to create reusable styles
- Ability to use extend to create reusable styles

## Getting Started

This repo requires bunjs, new versions of node.js will work for this repo as it can run typescript directly. If you want to use this repo, I would recommend using bunjs. But if not the command will need to be changed to use node.

1. Clone the repository

```bash
git clone https://github.com/SethBurkart123/BetterSEQTA-theme-generator.git
```

2. Install dependencies

```bash
bun install
```

3. This project uses postcss and postcss-cli, so you can build your custom themes by opening package.json and creating a script with  different input and output css file. Then run it with:

```bash
bun run <script-name>
```

For example: I created the hacker script, which uses the hacker.css file and outputs a output.css file. So to build the hacker theme, you would run:

```bash
bun run hacker
```

It will auto update as you make changes to the css files.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)