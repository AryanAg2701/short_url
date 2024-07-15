const shortid = require("shortid");
const url = require("../models/url");

// create a new short url
async function newshort(req, res) {
  const body = req.body;

  // validate that a url is provided in the request body
  if (!body.url) {
    return res.status(400).json({ error: "url not found" });
  }

  // generate a unique short id using shortId library
  const shortId = shortid.generate();

  try {
    // create a new document in the 'url' collection with shortId, redirecturl, and an empty array for totalclicks
    await url.create({
      shortid: shortId,
      redirecturl: body.url,
      totalclicks: [],
    });

    // respond with the generated short id upon successful creation
    return res.json({ id: shortId });
  } catch (err) {
    // handle errors if document creation fails
    console.error(err);
    return res.status(500).json({ error: "failed to create short url" });
  }
}

// retrieve analytics (total clicks and timestamps) for a given short id
async function analyse(req, res) {
  const shortId = req.params.shortid;

  // find the document in the 'url' collection based on the short id
  const result = await url.findOne({ shortId });

  // if no document is found, return a 404 error
  if (!result) {
    return res.status(404).json({ error: "short url not found" });
  }

  // respond with the number of clicks and the array of click timestamps
  return res.json({ clickcount: result.totalclicks.length, clicks: result.totalclicks });
}

// redirect users to the original url associated with a given short id and update analytics
async function redirect(req, res) {
  const shortId = req.params.shortid;

  // find the document in the 'url' collection based on the short id
  const result = await url.findOne({ shortId });

  // if no document is found, return a 404 error
  if (!result) {
    return res.status(404).json({ error: "short url not found" });
  }

  // add the current timestamp to the totalclicks array for analytics tracking
  result.totalclicks.push({ timestamp: new Date() });

  try {
    // save the updated document with the new click timestamp
    await result.save();
    
    // redirect the user to the original url associated with the short id
    res.redirect(result.redirecturl);
  } catch (err) {
    // handle errors if saving the document fails
    console.error(err);
    return res.status(500).json({ error: "failed to redirect" });
  }
}

module.exports = { newshort, analyse, redirect };
