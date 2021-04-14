
const Employee = require('../lib/Employee')

describe('Employee', () => {
    
    //passes
    it("getName returns name", () => {
        expect(new Employee("Johann").getName()).toBe("Johann");
    });

    //passes
    it("getId returns id", () => {
        expect(new Employee("Johann", "12345").getId()).toBe("12345");
    });

    //passes
    it("getEmail returns email address", () => {
        expect(new Employee("Johann", "12345", "johann@mail.com").getEmail()).toBe("johann@mail.com");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Employee("Employee").getRole()).toBe("Employee");
    });


})