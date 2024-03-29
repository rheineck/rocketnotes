const UserCreateService = require('./UserCreateService')
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory')
const AppError = require('../utils/AppError')

describe("UserCreateService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
    })

    it("should create a user", async () => {
        const user = {
            name: 'User test',
            email: 'user@test.com',
            password: 'test'
        }
    
        const userCreated = await userCreateService.execute(user)
        expect(userCreated).toHaveProperty("id")
    })

    it("shouldn't create a user with existing email", async () => {
        const user1 = {
            name: 'User Test 1',
            email: 'user@test.com',
            password: 'test'
        }

        const user2 = {
            name: 'User Test 2',
            email: 'user@test.com',
            password: 'tset'
        }

        await userCreateService.execute(user1)
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError('Este e-mail já está em uso.'))
    })
})