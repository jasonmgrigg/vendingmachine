const assert = require("assert")
const request = require("supertest")
const app = require("../app")
const Visit = require("../models/visit")

describe("GET /hello", function () {
    beforeEach("clear visits", function (done) {
        Visit.remove({}).then(function () { done() })
    })

    it("should say hello", function (done) {
        request(app)
            .get("/hello")
            .expect(200)
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