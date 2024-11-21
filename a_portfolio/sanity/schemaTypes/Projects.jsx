import { defineField, defineType } from 'sanity';

export default ({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'overview',
            title: 'Project Overview',
            type: 'text',
        }),
        defineField({
            name: 'stack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'image',
            title: 'Project Screenshot',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'link',
            title: 'Project Url',
            type: 'url',
        }),
        defineField({
            name: 'github',
            title: 'Github Url',
            type: 'url',
        }),
    ]    
       
});