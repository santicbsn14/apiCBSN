import { createContainer, asClass, Lifetime } from 'awilix'
import newsMongooseRepository from './Data/Repositories/newsMongooseRepository.js';
import userMongooseRepository from './Data/Repositories/userMongooseRepository.js';
import RoleMongooseRepository from './Data/Repositories/roleRepositoryRepository.js';

const container = createContainer()

container.register('newsRepository', asClass(newsMongooseRepository), {lifetime: Lifetime.SINGLETON});

container.register('UserDao', asClass(userMongooseRepository), {lifetime: Lifetime.SINGLETON});

container.register('RoleDao', asClass(RoleMongooseRepository ), {lifetime: Lifetime.SINGLETON});

export default  container