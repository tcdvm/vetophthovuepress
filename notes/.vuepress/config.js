module.exports = {
  title: 'Vet Ophtho',
  description: 'Learn (or lookup) everything you need to know about animal eyeballs.', 
  themeConfig: { 
    serviceWorker: {
      updatePopup: true
    },
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
          ['./pharmacology/ocular-pharm', 'Pharmacology'],
          ['./orbit/orbit', 'Orbit'],
          ['./eyelids/eyelids', 'Eyelids'],
          ['./cornea/cornea', 'Cornea'],
          ['./conjunctiva/conjunctiva', 'Conjunctiva'],
          ['./nictitans/nictitans', 'Nictitans'],
          ['./anterioruvea/anterioruvea', 'Anterior Uvea'],
          ['./lensvitreous/lens_and_vitreous', 'Lens & Vitreous'],
          ['./kcs/kcs', 'KCS/Dry Eye'],
          ['/glaucoma/glaucoma', 'Glaucoma'],
          ['./nasolacrimal/nasolacrimal', 'Nasolacrimal'],
          ['./neuroophthalmology/neuroophthalmology', 'Neuro-ophthalmology'],
          ['./feline/feline', 'Feline'],
          ['./retinaopticnerve/retina_and_optic_nerve', 'Retina & Optic Nerve'],
        ]
      }, 
      {
        title: 'Lab Handouts',
        collapsable: false,
        children: [
          ['./labhandouts/anatomy_physiology', 'Anatomy/Physiology'],
          ['./labhandouts/surgical_techniques', 'Surgical Techniques']
        ]
      }
    ]
  }
}