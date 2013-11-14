jasmine-loop
============

This little script is a big time-saver when you want to test objects with jasmine.

####Installation
1.  Download [jasmine-loop.js](jasmine-loop.js) or [jasmine-loop.min.js](jasmine-loop.min.js)
2.  Reference it in your SpecRunner.html
3.  That's it.

####Usage

`runInLoop` takes 2 arguments:
  - array: the array of objects you want to loop.
  - callback: code that should be executed.

The `callback` function will automatically have 1 argument - the current object in the array, so you can
do your assertions against it.

Now lets imagine you want to test objects called `Person`. Each person has a `name` and `age` property and you want to
test whether the `age` is greather than 0. What you would write **without** `jasmine-loop`:

```js
describe('Loop Tests', function() {
  var persons = [
                  { name: "Bobby", age: 25 },
                  { name: "Frank", age: 49 },
                  { name: "Samatha", age: 32 },
                  { name: "Will", age: 0 } 
                ];

  it('should be possible to retrieve the age property', function() {
    expect(persons[0].name).toBeGreaterThan(0);
    expect(persons[1].name).toBeGreaterThan(0);
    expect(persons[2].name).toBeGreaterThan(0);
    expect(persons[3].name).toBeGreaterThan(0);
  });
});
```
Well, great. You have repeated the same test 4 times! What if you have to change the specs so that it should test whether
the `age` property is greater than 18 *(because you are now unning a NSFW website)*? Here come's `jasmine-loop`

```js
describe('Loop Tests', function() {
  var persons = [
                  { name: "Bobby", age: 25 },
                  { name: "Frank", age: 49 },
                  { name: "Samatha", age: 32 },
                  { name: "Will", age: 0 } 
                ];
                
  it('should be possible to retrieve the age property', function() {
    runInLoop(persons, function(person) {
      expect(person.name).toBeGreaterThan(0);
    });
  });
});
```

Cool eh?
