module.exports = ({ html, css }) => `
<!doctype html>
<html>
    <body>
        <style>${css}</style>
        ${html}
    </body>
</html>
`
