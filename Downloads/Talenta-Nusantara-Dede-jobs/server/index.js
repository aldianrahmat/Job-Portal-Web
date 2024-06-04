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
    res.s
    end(result)
})

//get singgle job using id
app.get("/all-jobs/:id", async(req,res) =>{
    const id = req.params.id;
    const job = await jobsCollections.findOne({
        _id: new ObjectId(id)
    })
    res.send(job)
})

//update a jobs
app.pacth("/update.job/:id", async(req, res)=>{
    const id = req.params.id;
    const jobData = req.body;
    const filter = {_id: new ObjectId(id)};
    const option = {upsert: true};
    const updateDoc ={
        $set:{
            ...jobData
        },
    };

    const result = await jobsCollections.UpdateOne(filter,updateDoc, option);
    res.send(result)

})

