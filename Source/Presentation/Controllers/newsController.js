import newsManager from "../../Domain/Manager/newsManager.js";

export const paginate = async (req,res, next)=>
{
    try
    {
        let criteria = req.query;
        let {limit, page} = criteria
        let manager = new newsManager();
        let data = await manager.paginate({limit,page});
        res.status(200).send({status:'success', data})
    }
    catch(error)
    {
        next(error)
    }
}

export const getForUser = async (req,res)=>
{
    try
    {
        let title = req.query.title;

        let manager = new newsManager();

        let data = await  manager.getForUser(title);

        res.status(200).send({status:'success', data});
    }
    catch(error)
    {
        console.log(error)
    }
}

export const getOne = async (req,res)=>
{
    try
    {
        let id = req.params.id;

        let manager = new newsManager();

        let data = await  manager.getOne(id);

        res.status(200).send({status:'success', data});
    }
    catch(error)
    {
        console.log(error)
    }
}

export const create = async (req,res,next)=>
{
    try
    {
        let bodyNews = req.body;
        let manager = new newsManager();
        let data = await manager.create(bodyNews);
        res.status(201).send({status:'success', data})
    }
    catch (error)
    {
       next(error)
    }
}

export const update = async (req,res, next)=>
{
    try 
    {
        let idNews = req.params.id;
        console.log(idNews)
        let bodyNews = req.body;
        let manager = new newsManager();
        let data = await manager.update(idNews, bodyNews)
        res.status(201).send({status:'success', data})
    }
    catch (error) 
    {
        next(error)
    }
}

export const deleteNew = async (req,res) =>
{
    try 
    {
        let idNews = req.params.id;
        let manager = new newsManager();
        let deletedNews = await manager.delete(idNews)
        res.status(202).send({status:'success', deletedProduct:` Se elimino con exito el product ${deletedNews}`})
    } 
    catch (error) 
    {
        next(error)
    }
}