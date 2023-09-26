import RoleManager from '../../Domain/Manager/roleManager.js'

export const list = async  (req, res, next) =>
{
    const { limit, page } = req.query;
    try 
    {
      const manager = new RoleManager();

      const roles = await manager.paginate({ limit, page });
  
      res.send({ status: 'success', roles: roles.docs, ...roles, docs: undefined });
    }
     catch (error) 
    {
     next(error) 
    }

};

export const getOne = async (req, res,next) =>
{
  try 
  {
    const { id } = req.params;

    const manager = new RoleManager();
    const role = await manager.getOne(id);

    res.send({ status: 'success', role });
  } 
  catch (error) 
  {
    next(error)
  }

};

export const save = async (req, res,next) =>
{
  try 
  {
    const manager = new RoleManager();
    const role = await manager.create(req.body);
  
    res.send({ status: 'success', role, message: 'Role created.' })
  } 
  catch (error) 
  {
    next(error)
  }

};

export const update = async (req, res,next) =>
{
  try 
  {
    const { id } = req.params;

    const manager = new RoleManager();
    const result = await manager.updateOne(id, req.body);
  
    res.send({ status: 'success', result, message: 'Role updated.' })
  } 
  catch (error) 
  {
    next(error)
  }

};

export const deleteOne = async (req, res,next) =>
{
  try 
  {
    const { id } = req.params;

    const manager = new RoleManager();
    await manager.deleteOne(id);
  
    res.send({ status: 'success', message: 'Role deleted.' })
  } 
  catch (error) 
  {
    next(error)
  }

};