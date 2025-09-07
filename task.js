import chalk from "chalk";

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// Modifiers examples
log(chalk.bold("Bold text"));
log(chalk.dim("Dim text"));
log(chalk.italic("Italic text"));
log(chalk.underline("Underlined text"));
log(chalk.inverse("Inverse text"));
log(chalk.strikethrough("Strikethrough text"));

// Colors examples
log(chalk.black("Black text"));
log(chalk.red("Red text"));
log(chalk.green("Green text"));
log(chalk.yellow("Yellow text"));
log(chalk.blue("Blue text"));
log(chalk.magenta("Magenta text"));
log(chalk.cyan("Cyan text"));
log(chalk.white("White text"));

// Bright colors
log(chalk.blackBright("Bright Black text"));
log(chalk.redBright("Bright Red text"));
log(chalk.greenBright("Bright Green text"));
log(chalk.blueBright("Bright Blue text"));

// Background colors
log(chalk.bgBlack("Background Black"));
log(chalk.bgRed("Background Red"));
log(chalk.bgGreen("Background Green"));
log(chalk.bgYellow("Background Yellow"));
log(chalk.bgBlue("Background Blue"));
log(chalk.bgMagenta("Background Magenta"));

// Complex combinations
log(chalk.bold.red.bgWhite("Bold red on white"));
log(chalk.underline.bgBlue.yellow("Underlined yellow on blue"));
log(chalk.italic.bgGreen.whiteBright("Bright white italic on green"));

// Gradual style changes
log(
  chalk.blue("Blue") +
    " to " +
    chalk.red("Red") +
    " to " +
    chalk.yellow("Yellow") +
    " rainbow!"
);

// Nested styles with multiple modifiers
log(
  chalk.green(
    "A green line " +
      chalk.blue.bold.underline("with bold blue underlined text") +
      " and back to green " +
      chalk.red.bgYellow.italic("with red italic on yellow") +
      " and green again!"
  )
);
