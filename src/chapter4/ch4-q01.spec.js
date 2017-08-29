
import { expect } from 'chai';
import * as funcs from '../../code/04-trees-graphs/01-routeBetweenNodes';

const adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  [7]
];

for (let key in funcs) {
 const func = funcs[key];

  describe('ch4-q01: ' + key, function() {

    it('throws error with invalid graph', function() {
      expect(() => func(null)).to.throw('invalid graph');
      expect(() => func(undefined)).to.throw('invalid graph');
    });

    it('throws error with invalid start node', function() {
      expect(() => func(adjList, 99)).to.throw('invalid start node');
    });

    it('returns correct true/false for single node graph', function() {
      const list = [ [] ];
      expect(func(list, 0, 0)).to.be.true;
      expect(func(list, 0, 3)).to.be.false;
    });

    it('returns correct true/false for larger graph', function() {
      expect(func(adjList, 0, 4)).to.be.true;
      expect(func(adjList, 0, 3)).to.be.true;
      expect(func(adjList, 3, 6)).to.be.true;

      expect(func(adjList, 7, 3)).to.be.false;
      expect(func(adjList, 6, 7)).to.be.false;
      expect(func(adjList, 1, 11)).to.be.false;
    });

  });

}

// //import { expect } from 'chai';
// //import * as helpers from './helpers';
// import * as funcs from '../../code/04-trees-graphs/01-routeBetweenNodes';

// for (let key in funcs) {
// //  let func = funcs[key];

//   describe('ch4-q01: ' + key, function() {
//     // TODO
//   });

// }

