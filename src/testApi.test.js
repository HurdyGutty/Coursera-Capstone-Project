import { fetchAPI, submitAPI } from "./mock_api/api"


describe('test api', () => {
    test('test fetchAPI end point', async () => {
        const response = JSON.parse(await fetchAPI(new Date('2015-05-18')))
        console.log(response)
        expect(response).toBeInstanceOf(Array)
    })
    test('test submitAPI end point', async () => {
        const response = JSON.parse(await submitAPI({}))
        console.log(response)
        expect(response).toBe(true)
    })
})