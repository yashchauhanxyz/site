const { Builder } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const path = require('path');

(async function simpleTest() {
    // Specify the path to the msedgedriver executable
    const msedgedriverPath = path.join(__dirname, 'path/to/msedgedriver'); // Update this path

    let service = new edge.ServiceBuilder(msedgedriverPath).build();

    let options = new edge.Options();
    
    // Uncomment the following lines if you want to run the test in headless mode
    // options.addArguments('headless');
    // options.addArguments('disable-gpu');

    let driver = new Builder()
        .forBrowser('MicrosoftEdge')
        .setEdgeService(service)
        .setEdgeOptions(options)
        .build();

    try {
        // Navigate to a simple test page, e.g., Google
        await driver.get('https://www.google.com');

        // Get and print the page title
        let title = await driver.getTitle();
        console.log('Page Title:', title);

    } finally {
        // Quit the driver
        await driver.quit();
    }
})();