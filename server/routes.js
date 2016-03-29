 //http://blog.jeffdouglas.com/2015/07/09/building-the-topblogger-api-with-loopback/
  app.get('/api/engrus/:w', function(req, res) {
	if (req.params.w) {
		console.log("requested term: "+req.params.w);
        EngRus.findOne({ where: {eng: req.params.w}}, function (error, docs) {
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
            res.json(docs);
        });
    }
});
