
const Intern = require('../lib/Intern')

describe('Intern', () => {
    
    //passes
    it("getName returns name", () => {
        expect(new Intern("Johann").getName()).toBe("Johann");
    });

    //passes
    it("getId returns id", () => {
        expect(new Intern("Johann", "12345").getId()).toBe("12345");
    });

    //passes
    it("getEmail returns email address", () => {
        expect(new Intern("Johann", "12345", "johann@mail.com").getEmail()).toBe("johann@mail.com");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Intern("Intern").getRole()).toBe("Intern");
    });


})