
const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    
    //passes
    it("getName returns name", () => {
        expect(new Engineer("Johann").getName()).toBe("Johann");
    });

    //passes
    it("getId returns id", () => {
        expect(new Engineer("Johann", "12345").getId()).toBe("12345");
    });

    //passes
    it("getEmail returns email address", () => {
        expect(new Engineer("Johann", "12345", "johann@mail.com").getEmail()).toBe("johann@mail.com");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Engineer("Engineer").getRole()).toBe("Engineer");
    });


})