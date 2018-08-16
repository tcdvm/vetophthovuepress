module.exports = {
  title: 'Vet Ophtho',
  description: 'Learn (or lookup) everything you need to know about animal eyeballs.', 
  themeConfig: { 
    algolia: {
      apiKey: '348f3dcf64dcfe5736146da0ccae2a54',
      indexName: 'vetophtho'
    },
    nav: [ 
      { text: 'Home', link: '/' }, 
      { text: 'Clinics', items: [
          { text: 'Client Handouts', link:'./clinics/client_handouts' },
          // { text: 'Medication Instructions Generator', link: '/omg/' },
          // { text: 'Discharge instructions instructions', link: '/discharges/' },
          // { text: 'Op report templates', link: '/opreports/' }
        ]
      },
    ], 
    sidebar: [
      {
        title: 'Clinics',
        collapsable: false,
        children: [
          ['./clinics/phaco-orders', 'Phaco Orders'],
          ['./clinics/client_handouts', 'Client Handouts'],
        ]
      },
      {
        title: 'UT Ophtho Course Notes',
        collapsable: false,
        children: [ 
          ['./cornea/cornea', 'Cornea'],
          ['./kcs/kcs', 'KCS/Dry Eye'],
          ['/glaucoma/glaucoma', 'Glaucoma'],
          ['./conjunctiva/conjunctiva', 'Conjunctiva'],
          ['./eyelids/eyelids', 'Eyelids'],
          ['./anterioruvea/anterioruvea', 'Anterior Uvea']
        ]
      }
    ]
  }
}