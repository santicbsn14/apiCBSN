import newsSchema from "../Models/newsSchema.js";


class NewsMongooseFactory
{
  async paginate(criteria)
  {
    const { limit, page } = criteria;
    const newsDocuments = await newsSchema.paginate({}, { limit, page });
    
    return newsDocuments.docs = newsDocuments.docs.map(document => ({
      title:document.title,
      id: document._id,
      imgPort:document.imgPort,
      description:document.description,
      newsBody:document.newsBody,
      newsDatetime: document.newsDatetime,
      imgs:document.imgs,
      topics:document.topics,
      status: document.status,
      category:document.category
    }));

    
  }
  async getOne(id)
  {
    const newsDocument = await newsSchema.findOne({_id: id})
    if(!newsDocument)
    {
      throw new Error('News not found.');
    }
    return {
      id: newsDocument._id,
      title:newsDocument.title,
      description:newsDocument.description,
      newsBody:newsDocument.newsBody,
      imgPort: newsDocument.imgPort,
      newsDatetime: newsDocument.newsDatetime,
      imgs:newsDocument.imgs,
      topics:newsDocument.topics,
      status: newsDocument.status,
      category:newsDocument.category
    }
  }
  async getForUser(title)
  {
    
    const newsDocuments = await newsSchema.find({
      title: { $regex: title, $options: 'i' }
    }) 
    
    if(!newsDocuments)
    {
      throw new Error('News not found.');
    }

    return newsDocuments.map(document => ({
      title:document.title,
      id: document._id,
      imgPort:document.imgPort,
      description:document.description,
      newsBody:document.newsBody,
      newsDatetime: document.newsDatetime,
      imgs:document.imgs,
      topics:document.topics,
      status: document.status,
      category:document.category
    }));
  }

  async create(data)
  {
    const newsDocument = await newsSchema.create(data);

    return {
      id: newsDocument._id,
      id: newsDocument._id,
      imgPort:newsDocument.imgPort,
      title:newsDocument.title,
      description:newsDocument.description,
      newsBody:newsDocument.newsBody,
      newsDatetime: newsDocument.newsDatetime,
      imgs:newsDocument.imgs,
      topics:newsDocument.topics,
      status: newsDocument.status,
      category:newsDocument.category
    }
  }

  async updateOne(id, data)
  {
    const newsDocument = await newsSchema.findOneAndUpdate({ _id: id }, data, { news: true});

    if(!newsDocument)
    {
      throw new Error('News not found.');
    }

    return {
      id: newsDocument._id,
      title:newsDocument.title,
      description:newsDocument.description,
      newsBody:newsDocument.newsBody,
      newsDatetime: newsDocument.newsDatetime,
      imgs:newsDocument.imgs,
      topics:newsDocument.topics,
      status: newsDocument.status,
      category:newsDocument.category
    }
  }

  async deleteOne(id)
  {
    return newsSchema.deleteOne({ _id: id });
  }
}

export default NewsMongooseFactory;