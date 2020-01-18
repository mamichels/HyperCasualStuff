import 'reflect-metadata';
import {container} from 'tsyringe';
import {Main} from './src/main';

document.addEventListener('DOMContentLoaded', () => container.resolve(Main).run());