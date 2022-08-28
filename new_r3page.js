let pageTitle = '',
repoTitle = '';

let newR3Page = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://image.ibb.co/nqbdHJ/titlelogo.png" rel="icon">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <link href="https://raw.githack.com/Arza-3d/ar3.js/master/stylesheets/ar3.min.css" rel="stylesheet" type="text/css">

    <title>` + pageTitle + `</title>
</head>
<body
    data-repo-r3="https://github.com/Arza-3d/` + repoTitle + `"
    data-headers-r3="> div > h2| > div > h3| div > section > h4"
    >
    <script src="https://raw.githack.com/Arza-3d/ar3.js/master/ar3header.js"></script>
    <header>
        <h1>.</h1>
        <h4>.</h4>
        <table>
            <tr>
                <td>project repo</td>
                <td><a href="https://github.com/Arza-3d/doc-sql">https://github.com/Arza-3d/doc-sql</a></td>
            </tr>
        </table>
        <p>
            lorem ipsum
        </p>
    </header>
    <main class="aside-nav-target-r3">

        <div data-title-r3=".">
            <h2>.</h2>
            <h3>.</h3>

            <section>
               
            </section>

        </div>
    </main>
    <script src="https://raw.githack.com/Arza-3d/ar3.js/master/ar3.min.js"></script>
</body>
</html>
`

func