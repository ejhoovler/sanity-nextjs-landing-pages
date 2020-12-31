export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fee2d1149113d164d4b70d9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pcaiuno3',
                  apiId: '78a96ad0-6691-4aff-a7b5-7b809b76afb0'
                },
                {
                  buildHookId: '5fee2d112e91f815805d17b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7gdanrue',
                  apiId: '9e16bce7-a9db-4a67-9494-98b4f8307d6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ejhoovler/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7gdanrue.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
