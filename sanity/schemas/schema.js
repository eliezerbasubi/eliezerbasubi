import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import about from './about';
import experience from './experience';
import skills from './skills';
import skill from './skill';
import works from './works';
import article from './article';
import project from './project';
import author from './author';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    about,
    experience,
    skills,
    skill,
    works,
    article,
    project,
    author,
  ]),
});
