import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolanaAnchorDocker } from '../target/types/solana_anchor_docker';

describe('solana-anchor-docker', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolanaAnchorDocker as Program<SolanaAnchorDocker>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
