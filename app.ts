import 'reflect-metadata';
import {container} from 'tsyringe';

import Main from './src/main';

container.resolve(Main).run();