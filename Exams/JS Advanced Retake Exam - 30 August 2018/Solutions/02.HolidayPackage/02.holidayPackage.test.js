const HolidayPackage = require('./02.holidayPackage');
const {assert} = require('chai');

describe("HolidayPackage tests", () => {
    let holidayPackage = '';
        beforeEach(() => {
            holidayPackage = new HolidayPackage('Alaska', 'Winter');
        });

    describe("insuranceIncluded tests", () => {

        it("get insuranceIncluded", () => {
            assert.equal(holidayPackage.insuranceIncluded , false);
        });
        it("set insuranceIncluded should work", () => {
            holidayPackage.insuranceIncluded = true;
            assert.equal(holidayPackage.insuranceIncluded , true);
        });
        it("set insuranceIncluded should throw", () => {
            assert.throws(() => holidayPackage.insuranceIncluded = null);
            assert.throws(() => holidayPackage.insuranceIncluded = 'pesho');
            assert.throws(() => holidayPackage.insuranceIncluded = 3);
        });
     });

    describe("showVacationers tests", () => {
        it("Should return that there are no vacationers", () => {
            let expectedResult = "No vacationers are added yet";
            let actualResult = holidayPackage.showVacationers();
            assert.equal(actualResult, expectedResult);
        });
        it("Should return all the vacationers", () => {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            let expectedResult = "Vacationers:\n" + holidayPackage.vacationers.join("\n");
            let actualResult = holidayPackage.showVacationers();
            assert.equal(actualResult, expectedResult);
        });
        it("Should return only one vacationer", () => {
            holidayPackage.addVacationer('Ivan Ivanov');
            let expectedResult = "Vacationers:\n" + holidayPackage.vacationers.join("\n");
            let actualResult = holidayPackage.showVacationers();
            assert.equal(actualResult, expectedResult);
        });
     });

     describe("addVacationer tests", () => {
        it("Should throw if the name is not a string", () => {
            assert.throws(() => holidayPackage.addVacationer(6));
            assert.throws(() => holidayPackage.addVacationer(true));
            assert.throws(() => holidayPackage.addVacationer(null));
        });
        it("Should throw if the name is empty string", () => {
            assert.throws(() => holidayPackage.addVacationer(' '));
        });
        it("Should throw if the name is less than 2 words", () => {
            assert.throws(() => holidayPackage.addVacationer('Ivan'));
        });
        it("Should throw if the name is more than 2 words", () => {
            assert.throws(() => holidayPackage.addVacationer('Gogo Goshev Goshev'));
        });
        it("Should add correctly", () => {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            let expectedResult = 2;
            let actualResult = holidayPackage.vacationers.length;
            assert.equal(actualResult,expectedResult);
        });
     });
      
     describe("generateHolidayPackage tests", () => {
        it("Should throw if there are no vacationers", () => {
            assert.throws(() => holidayPackage.generateHolidayPackage());
        });
        it("Total price if no winter or summer, without insurance", () => {
            holidayPackageAutumn = new HolidayPackage('Dubai', 'Autumn');
            holidayPackageAutumn.addVacationer('Ivan Ivanov');
            holidayPackageAutumn.addVacationer('Gosho Goshev');
            let expectedResult = "Holiday Package Generated\n" +
            "Destination: " + holidayPackageAutumn.destination + "\n" +
            holidayPackageAutumn.showVacationers() + "\n" +
            "Price: " + 800;
            let actualResult = holidayPackageAutumn.generateHolidayPackage();
            assert.equal(actualResult, expectedResult);
        });
        it("Total price if no winter or summer, with insurance", () => {
            holidayPackageAutumn = new HolidayPackage('Dubai', 'Autumn');
            holidayPackageAutumn.addVacationer('Ivan Ivanov');
            holidayPackageAutumn.addVacationer('Gosho Goshev');
            holidayPackageAutumn.insuranceIncluded = true;
            let expectedResult = "Holiday Package Generated\n" +
            "Destination: " + holidayPackageAutumn.destination + "\n" +
            holidayPackageAutumn.showVacationers() + "\n" +
            "Price: " + 900;
            let actualResult = holidayPackageAutumn.generateHolidayPackage();
            assert.equal(actualResult, expectedResult);
        });
        it("Total price if Winter or Summer, without insurance", () => {
            holidayPackage1 = new HolidayPackage('Alaska', 'Winter');
            holidayPackage2 = new HolidayPackage('Lozenec', 'Summer');
            holidayPackage1.addVacationer('Ivan Ivanov');
            holidayPackage1.addVacationer('Gosho Goshev');
            holidayPackage2.addVacationer('Maria Ivanova');

            let expectedResult1 = "Holiday Package Generated\n" +
            "Destination: " + holidayPackage1.destination + "\n" +
            holidayPackage1.showVacationers() + "\n" +
            "Price: " + 1000;
            let actualResult1 = holidayPackage1.generateHolidayPackage();

            let expectedResult2= "Holiday Package Generated\n" +
            "Destination: " + holidayPackage2.destination + "\n" +
            holidayPackage2.showVacationers() + "\n" +
            "Price: " + 600;
            let actualResult2 = holidayPackage2.generateHolidayPackage();

            assert.equal(actualResult1, expectedResult1);
            assert.equal(actualResult2, expectedResult2);
        });
        it("Total price if Winter or Summer, with insurance", () => {
            holidayPackage1 = new HolidayPackage('Alaska', 'Winter');
            holidayPackage2 = new HolidayPackage('Lozenec', 'Summer');

            holidayPackage1.addVacationer('Ivan Ivanov');
            holidayPackage1.addVacationer('Gosho Goshev');
            holidayPackage2.addVacationer('Maria Ivanova');

            holidayPackage1.insuranceIncluded = true;
            holidayPackage2.insuranceIncluded = true;

            let expectedResult1 = "Holiday Package Generated\n" +
            "Destination: " + holidayPackage1.destination + "\n" +
            holidayPackage1.showVacationers() + "\n" +
            "Price: " + 1100;
            let actualResult1 = holidayPackage1.generateHolidayPackage();

            let expectedResult2= "Holiday Package Generated\n" +
            "Destination: " + holidayPackage2.destination + "\n" +
            holidayPackage2.showVacationers() + "\n" +
            "Price: " + 700;
            let actualResult2 = holidayPackage2.generateHolidayPackage();

            assert.equal(actualResult1, expectedResult1);
            assert.equal(actualResult2, expectedResult2);
        });
     });
});
