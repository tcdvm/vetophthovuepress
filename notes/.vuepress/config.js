module.exports = {
  plugins: [
    ["@vuepress/google-analytics", { ga: "UA-113485385-1" }],
    ["@vuepress/pwa", { serviceWorker: true, updatePopup: true }],
    ["@vuepress/active-header-links"],
    ["vuepress-plugin-nprogress"],
    ["vuepress-plugin-container",
      {
        type: 'detail',
        defaultTitle: '',
        before: info => `<details class="detail"><summary>${info}</summary>`,
        after: '</details>',
      }
    ]
  ],
  title: "VetOphtho.Org",
  description: "Online guide to veterinary ophthalmology.",
  markdown: {
    extendMarkdown: md => {
      md.set({ typographer: true });
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-smartarrows"));
      md.use(require("markdown-it-imsize"));
      md.use(require("markdown-it-task-lists"), { label: true });
      md.use(require("markdown-it-video"));
      md.renderer.rules.footnote_block_open = () =>
        '<h4 class="mt-3">References/Footnotes</h4>\n' +
        '<section class="footnotes">\n' +
        '<ol class="footnotes-list">\n';
    },
  },
  themeConfig: {
    sidebarDepth: 2,
    searchPlaceholder: "Search...",
    smoothScroll: true,
    // sidebarDepth: 1,
    // searchMaxSuggestions: 10,
    algolia: {
      apiKey: "348f3dcf64dcfe5736146da0ccae2a54",
      indexName: "vetophtho",
      algoliaOptions: {
        hitsPerPage: 10
      }
    },
    lastUpdated: "Last Updated", // string | boolean
    nav: [
      // { text: "Home", link: "/" },
      // {
      //   text: "Clinics",
      //   items: [
      //     { text: "Client Handouts", link: "./clinics/client_handouts" },
      //     { text: "Templates", link: "https://templates.vetophtho.org" },
      //     { text: "Drug Instructions", link: "https://drugs.vetophtho.org" }
      // { text: 'Medication Instructions Generator', link: '/omg/' },
      // { text: 'Discharge instructions instructions', link: '/discharges/' },
      // { text: 'Op report templates', link: '/opreports/' }
      // ]
      // }
    ],
    sidebar: [
      {
        title: "Clinics",
        collapsable: true,
        children: [
          ["./clinics/ophthalmicexam", "Ophthalmic Exam Video"],
          ["./pharmacology/ocular-pharm", "Drugs"],
          ["./clinics/phaco-orders", "Phaco Orders"],
          ["./clinics/client_handouts", "Client Handouts"],
          ["./clinics/compounding_pharmacies", "Compounding Pharmacies"],
          ["./labhandouts/anatomy_physiology", "Anatomy/Physiology Handout"],
          ["./labhandouts/surgical_techniques", "Surgical techniques Handout"],
          ["https://drugs.vetophtho.org", "Medication List Generator"],
          ["https://medgrid.vetophtho.org", "Ophtho Meds Grid(new! 1/2021)"]
          //          ["https://templates.vetophtho.org", "Misc Templates"]
        ]
      },
      {
        title: "Small Animal Ophthalmology",
        collapsable: true,
        children: [
          ["./orbit/orbit", "Orbit"],
          ["./eyelids/eyelids", "Eyelids"],
          ["./nasolacrimal/nasolacrimal", "Nasolacrimal"],
          ["./kcs/kcs", "KCS/Dry Eye"],
          ["./conjunctiva/conjunctiva", "Conjunctiva"],
          ["./nictitans/nictitans", "Nictitans"],
          ["./cornea/cornea", "Cornea"],
          ["/glaucoma/glaucoma", "Glaucoma"],
          ["./anterioruvea/anterioruvea", "Anterior Uvea"],
          ["./lensvitreous/lens_and_vitreous", "Lens & Vitreous"],
          ["./retinaopticnerve/retina_and_optic_nerve", "Retina & Optic Nerve"],
          ["./neuroophthalmology/neuroophthalmology", "Neuro-ophthalmology"],
          ["./feline/feline", "Feline"]
        ]
      },
      {
        title: "Art Corner (new! 3/2021)",
        collapsable: true,
        children: [
          ["./artcorner/poetry", "Poetry"],
          ["./artcorner/memes", "Memes"],
        ]
      },
      // {
      //   title: "Lab Handouts",
      //   collapsable: false,
      //   children: [
      //     ["./labhandouts/anatomy_physiology", "Anatomy/Physiology"],
      //     ["./labhandouts/surgical_techniques", "Surgical Techniques"]
      //   ]
      // }
    ]
  }
};
