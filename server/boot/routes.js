module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
    
var EngRus = app.models.EngRus;

  /**
  * Defines a routes so that blogs are accessible by user
  * and slug: /jeffdonthemic/hello-world instead of id.
  **/
  app.get('/api/customroutes/engrus_search/:w', function(req, res) {
	if (req.params.w) {
		console.log("requested term: "+req.params.w);
        EngRus.find({ where: {eng: {like: req.params.w}}}, function (error, docs) {
        if (error) {
            return res.
                status(status.INTERNAL_SERVER_ERROR).
                json({ error: error.toString() });
        }
        if (!docs) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
            res.json({results: docs}); //format adapted for angucomplete-alt 
        });
    }
  });
};
