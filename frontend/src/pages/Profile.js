export default function Profile() {
    return (
        <div>
            {/* <head>
                <title>Bootstrap Example</title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
            </head> */}

            <body>
                <div class="bg-primary text-white p-5 text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this page to see the responsive effect!</p>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                        <h2>London</h2>
                          <p>London is the most populous city in the United Kingdom,
                        with a metropolitan area of over 13 million inhabitants.</p>
                        </div>
                        <div class="col-sm-4">
                        <h2>Paris</h2>
                          <p>The Paris area is one of the largest population centers in Europe,
                        ith more than 12 million inhabitants.</p>
                        </div>
                        <div class="col-sm-4">
                        <h2>Tokyo</h2>
                          <p>Tokyo is the center of the Greater Tokyo Area,
                        and the most populous metropolitan area in the world.</p>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}