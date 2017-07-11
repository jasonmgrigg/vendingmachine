const assert = require("assert")
const request = require("supertest")
const app = require("../app")
const Items = require("../models/items")

describe("GET /api/customer/items", function () {
    beforeEach("clear visits", function (done) {
        Items.remove({}).then(function () { done() })
    })

    it("should return items", function (done) {
        request(app)
            .get("/")
            .expect("Hello!")
            .end(done)
    })

    it("should say hello to a particular person", function (done) {
        request(app)
            .get("/hello/Scout")
            .expect(200)
            .expect("Hello, Scout!")
            .end(done)
    })

    it("should track visits", function (done) {
        request(app)
            .get("/hello")
            .expect(function (res) {
                Visit.count({}, function (err, count) {
                    if (err) { return done(err) }
                    assert.equal(count, 1)
                    done()
                })
            })
            .end(function () {})
    })
})
