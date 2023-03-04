import category from './category'
import product from './product'
import {user, account} from 'next-auth-sanity/schemas'
import {createSchema} from 'sanity'
export const schemaTypes = [product, category, user, account]

export default createSchema({
  name: 'default',
    types: schemaTypes.concat([
        product, category
    ]),
})
