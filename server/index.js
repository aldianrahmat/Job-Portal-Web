// get jobs by email
app.get("myJobs/:email", async(req,res) => {
    //console.log(req.params.email)
    const jobs = await jobsCollections.find({postedBy : req.params.email}).toArray();
    res.send(jobs)
})

//delete a job
app.delete("/job/:id", async(req,res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)}
    const result = await jobsCollections.deleteOne(filter);
    res.send(result)
})