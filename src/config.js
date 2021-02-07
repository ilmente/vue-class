module.exports = {
    http: {
        port: 3003,
    },

    routes: {   
        home: '/',
        docs: '/docs/:entry',
        code: '/code/:entry',
        exercise: '/exercise/:entry',
    },

    statics: {
        public: { template: '/', map: 'public' },
        docsAssets: { template: '/docs/assets', map: 'docs/assets' },
    },

    labels: {
        docs: 'Documentation',
        code: 'Code examples',
        exercise: 'Exercises',
    },

    sessions: [
        {
            name: 'Intro',
            docs: { url: '/docs/00-intro' },
            code: { url: '' },
            exercise: { url: '' },
        },
        {
            name: '01. Vue Presentation Layer, part 1: introduction',
            docs: { url: '/docs/01-vue-intro' },
            code: { url: '/code/01', name: '01. Vue data binding and templating' },
            exercise: { url: '/exercise/01', name: '01. The billing address' },
        },
    ],
}
