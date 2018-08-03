module.exports = {
  title: 'Veterinary Ophthalmology Notes',
  description: 'Learn (or lookup) everything you need to know about animal eyeballs.', 
  themeConfig: { 
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
        collapsable: true,
        children: [ 
          ['./cornea/cornea', 'Cornea'],
          ['./kcs/kcs', 'KCS/Dry Eye'],
          ['/glaucoma/glaucoma', 'Glaucoma'],
          ['./conjunctiva/conjunctiva', 'Conjunctiva'],
          ['./eyelids/eyelids', 'Eyelids']
        ]
      }
    ]
  }
}