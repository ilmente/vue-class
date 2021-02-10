function renderInitialState(initialState) {
    if (!initialState) {
        return '<!-- no initial state available -->';
    }
    
    return `<script>window.__INITIAL_STATE__ = ${
        JSON.stringify(initialState)
    };</script>`;
}

module.exports = ({ title, base, initialState }) => `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="title" content="${title}" />
        <meta name="generator" content="hand made" />
        <link rel="stylesheet" type="text/css" href="${base}.css">
        <script src="/runtime.js"></script>
        <title>${title}</title>
    </head>
    <body>
        <div id="app"></div>
        ${renderInitialState(initialState)}
        <script src="/vendors.js"></script>
        <script src="${base}.js"></script>
    </body>
</html>
`
