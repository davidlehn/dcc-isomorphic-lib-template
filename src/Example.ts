/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
import {Ed25519VerificationKey2020} from '@digitalbazaar/ed25519-verification-key-2020';

export class Example {
  public async hello(): Promise<any> {
    const edKeyPair = await Ed25519VerificationKey2020.generate();
    // return 'world'
    return edKeyPair
  }
}
