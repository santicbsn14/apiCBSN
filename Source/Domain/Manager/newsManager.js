import container from "../../container.js";

class newsManager{
    constructor(){
        this.repository= container.resolve('newsRepository');
    }

    async paginate(criteria)
    {
        return await this.repository.paginate(criteria);
    }

    async getForUser(title)
    {
        return await this.repository.getForUser(title);
    }

    async getOne(id)
    {
        return await this.repository.getOne(id)
    }
    
    async create(body)
    {
        return await this.repository.create(body)
    }

    async update(idNews, body)
    {
        return await this.repository.updateOne(idNews, body)
    }

    async delete(idNews)
    {
        return await  this.repository.deleteOne(idNews)
    }
}
export default newsManager