import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/classes/Customer.js';

let josh;

describe('Customer data', function() {
  beforeEach(() => {
    josh = new Customer(4, 'Josh');
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should recognize Josh an instance of Customer', () => {
    expect(josh).to.be.an.instanceof(Customer);
  });

  it('should initialize with a name and an ID', () => {
    expect(josh.name).to.equal('Josh');
    expect(josh.id).to.equal(4);
  })
});
