import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import {  mergeResolvers } from '@graphql-tools/merge';

const resolversPath = join(__dirname, './**/resolvers.*');

const resolversArray = loadFilesSync(resolversPath);

export const resolvers = mergeResolvers(resolversArray);