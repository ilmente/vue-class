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
        <meta name="generator" content="hand made" />
        <link rel="stylesheet" type="text/css" href="${base}/style.css"> 
        <title>${title}</title>
    </head>
    <body>
        <div id="app"></div>
        ${renderInitialState(initialState)}
        <script src="${base}/app.js"></script>
    </body>
</html>
`
