#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync('Temperature JS', {
                font: 'Sub-Zero',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );
};

const askScale = () => {
    const scale = [{
            type: 'list',
            name: 'SCALE',
            message: 'From Which temperature scale would you like to convert to?',
            choices: ['C˚', 'F˚', 'K˚']
        },
        {
            type: 'input',
            name: 'DEGREES',
            message: 'How many degress would you like to convert?'
        }
    ];
    return inquirer.prompt(scale);
};
// C to F - Formula
// (2°C × 9/5) + 32 = 35.6°F
const fromCelsius = (scale, degress) => {
    switch (scale) {
        case 'C˚':
            fahrenheit = (degress * 9/5) + 32;
            console.log("F˚", fahrenheit)
            break;
        case 'F˚':
            // (32°F − 32) × 5/9 = 0°
            break;
        case 'K˚':
            kelvin = degress + 273.15;
            // (32°F − 32) × 5/9 + 273.15 = 273.15K
            break;
    }
};

const run = async () => {
    // show init
    init()

    const scale = await askScale();
    const {
        SCALE,
        DEGREES
    } = scale;

    const result = fromCelsius(SCALE, DEGREES)
}

run();