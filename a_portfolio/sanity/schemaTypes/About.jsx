import { defineField, defineType } from 'sanity';

export default ({
    name: 'about',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'description',
            title: 'About Me',
            type: 'text',
        }),
        defineField({
            name: 'stack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
        })
    
    ]    
       
});