
const Manager = require('../lib/Manager')

describe('Manager', () => {
    
    //passes
    it("getName returns name", () => {
        expect(new Manager("Johann").getName()).toBe("Johann");
    });

    //passes
    it("getId returns id", () => {
        expect(new Manager("Johann", "12345").getId()).toBe("12345");
    });

    //passes
    it("getEmail returns email address", () => {
        expect(new Manager("Johann", "12345", "johann@mail.com").getEmail()).toBe("johann@mail.com");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Manager("Manager").getRole()).toBe("Manager");
    });


})