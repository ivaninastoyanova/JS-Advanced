const ChristmasMovies = require('./02.ChristmasMovies');
const {assert} = require('chai'); 


describe("ChristmasMovies tests", () => {
    let christmas = '';
    beforeEach(() => {
        christmas = new ChristmasMovies();
    });

    describe("buyMovie tests", () => { 
        it("Already existing movie should throw, different actors", () => {
            movieName = 'Home Alone';
            christmas.buyMovie(movieName, ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => christmas.buyMovie(movieName, ['Macaulay Culkin', 'Joe Pesci']));
        });
        it("Already existing movie should throw, same actors", () => {
            movieName = 'Home Alone';
            christmas.buyMovie(movieName, ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => christmas.buyMovie(movieName, ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']));
        });
        it('buyMovie should add just one actor', () => {
            let expectedResult = `You just got Harry Potter to your collection in which Rupert Grint are taking part!`;
            let actualResult = christmas.buyMovie('Harry Potter', ['Rupert Grint', 'Rupert Grint']);
            assert.equal(actualResult, expectedResult)
        });

        it("Should add movie when no same actors", () => {
            let expectedResult = "You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!";
            let actualResult = christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.deepEqual(actualResult,expectedResult);
        });
        it("Should add movie when same actors", () => {
            let expectedResult = "You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!";
            let actualResult = christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern', 'Macaulay Culkin']);
            assert.deepEqual(actualResult,expectedResult);
        });
    });

    describe("discardMovie tests" , () => { 
        it("Should throw if the movie does not exist", () => {
            movieName = 'Home';
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => christmas.discardMovie(movieName));
        });
        it("Should throw if no movies", () => {
            movieName = 'Home';
            assert.throws(() => christmas.discardMovie(movieName));
        });
        it("Should remove the movie from the collection if it is watched", () => {
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('The Grinch');
            
            let expectedResult = `You just threw away The Grinch!`
            let actualResult = christmas.discardMovie('The Grinch');
            assert.equal(actualResult,expectedResult);
        });
        
        it("Should throw if the movie exist but is not watched", () => {
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            assert.throws(() => christmas.discardMovie('The Grinch'));
        });
    });

    describe("watchMovie tests" , () => { 
        it("Should throw if the movie does not exist", () => {
            movieName = 'Home';
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => christmas.watchMovie(movieName));
        });
        
        it("Should throw if no movies in the collection", () => {
            assert.throws(() => christmas.watchMovie(movieName));
        });

        it("The film is in the collection, not watched", () => {
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('The Grinch');
            let expectedResult = 1;
            let actualResult = christmas.watched['The Grinch'];
            assert.equal(actualResult,expectedResult);
        });
        it("The film is in the collection, watched", () => {
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('The Grinch');
            let expectedResult = 3;
            let actualResult = christmas.watched['The Grinch'];
            assert.equal(actualResult,expectedResult);
        });

    });

    describe("favouriteMovie tests" , () => { 
        it("Should throw if there are no movies in the watched list", () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => christmas.favouriteMovie());
        });
        it("Should throw if there are no movies in the collection", () => {
            assert.throws(() => christmas.favouriteMovie());
        });
        it("The film is in the collection, watched", () => {
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('Home Alone 2');
            let expectedResult = "Your favourite movie is The Grinch and you have watched it 3 times!";
            let actualResult = christmas.favouriteMovie();
            assert.equal(actualResult,expectedResult);
        });
    });

    describe("mostStarredActor tests" , () => { 
        it("Should throw if there are no movies the collection", () => {
            assert.throws(() => christmas.mostStarredActor());
        });

        it("Should return the most watched actor", () => {
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin', 'Benedict Cumberbatch']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('Home Alone 2');
            let expectedResult = "The most starred actor is Benedict Cumberbatch and starred in 2 movies!";
            let actualResult = christmas.mostStarredActor();
            assert.equal(actualResult,expectedResult);
        });
        it("Should return the only one actor", () => {
            christmas.buyMovie('Home Alone 2', ['Benedict Cumberbatch']);
            christmas.watchMovie('Home Alone 2');
            let expectedResult = "The most starred actor is Benedict Cumberbatch and starred in 1 movies!";
            let actualResult = christmas.mostStarredActor();
            assert.equal(actualResult,expectedResult);
        });
    });
});
