
declare module 'truffle-contract' {
  import { TransactionReceipt } from 'web3/types'
  import { ABIDefinition } from 'web3/eth/abi'
  import { Provider } from 'web3/providers'
  import Web3 from 'web3'
  namespace contract {

    export interface DeployedContract {
      address: string,
      transactionHash: string,
      allEvents: any
    }

    export type HexString = string

    export interface TruffleContract<A> {
      'new' (...args: any[]): Promise<A & DeployedContract> // No Enforcement
      at (address: string): Promise<A & DeployedContract>
      deployed (): Promise<A & DeployedContract>

      defaults (params: Web3): void
      setProvider (provider: Provider): void
      setNetwork (networkId: string | number): void
      resetAddress (): void

      link <B>(instance: TruffleContract<B>): void
      link (name: string, address: string): void

      hasNetwork (networkId: string | number): boolean
      isDeployed (): boolean
      web3: Web3

      abi: Array<ABIDefinition>
      bytecode: HexString
    }

    export interface AnyTransactionEvent {
      event: string
      args: any
    }

    export interface TransactionEvent<A> {
      event: string
      args: A
    }

    export interface TransactionResult {
      tx: string
      logs: Array<AnyTransactionEvent>
      receipt: TransactionReceipt
    }
  }

  function contract <A>(json: any): contract.TruffleContract<A>
  export = contract
}
