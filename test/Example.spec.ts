import { expect } from 'chai'
import { Example } from '../src/index.js'

describe('Example', () => {
  it('calls function', async () => {
    const ex = new Example()
    const d = await ex.hello();
    expect(d).to.have.property('type', 'Ed25519VerificationKey2020');
  })
})
