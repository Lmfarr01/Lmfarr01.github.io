(function () {

    /* Setup options */

    var options = {
        paths: '#blob-path',     // Shape we want to draw
        pointsNumber: 10,            // Number of points
        maxDistance: 70,             // Max distance among points
        color: '#FECDBC',
        centroid: '.centroid-text'   // Element to move accordingly with the centroid of the shape
        // debug: true               // Uncomment this to see the points
    };

    /* Initializing jelly */

    var jelly = new Jelly('.jelly-canvas', options);

})();
