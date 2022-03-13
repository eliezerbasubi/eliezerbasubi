import createSchema from 'part:@sanity/base/schema-creator';
import about from './about';

import schemaTypes from 'all:part:@sanity/base/schema-type';
import experience from './experience';
import skills from './skills';
import skill from './skill';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([about, experience, skills, skill]),
});
