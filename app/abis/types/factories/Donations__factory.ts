/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Donations, DonationsInterface } from "../Donations";

const _abi = [
  {
    inputs: [],
    name: "WithdrawTransfer",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Donated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Redeemed",
    type: "event",
  },
  {
    inputs: [],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addressFor",
        type: "address",
      },
    ],
    name: "donateFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "donatedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "redeemedAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "payee",
        type: "address",
      },
    ],
    name: "withdrawPayments",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6105ec8061007e6000396000f3fe6080604052600436106100865760003560e01c80638da5cb5b116100595780638da5cb5b14610134578063a87430ba1461015c578063db006a75146101a5578063ed88c68e146101c5578063f2fde38b146101cd57600080fd5b806305831c621461008b57806331b3eb94146100a0578063715018a6146100c0578063832880e7146100d5575b600080fd5b61009e610099366004610553565b6101ed565b005b3480156100ac57600080fd5b5061009e6100bb366004610553565b61025b565b3480156100cc57600080fd5b5061009e6102dc565b3480156100e157600080fd5b5073f39fd6e51aad88f6f4ce6ab8827279cfffb9226660005260016020527fa3c1274aadd82e4d12c8004c33fb244ca686dad4fcc8957fc5668588c11d9502546040519081526020015b60405180910390f35b34801561014057600080fd5b506000546040516001600160a01b03909116815260200161012b565b34801561016857600080fd5b50610190610177366004610553565b6001602081905260009182526040909120805491015482565b6040805192835260208301919091520161012b565b3480156101b157600080fd5b5061009e6101c0366004610577565b6102f0565b61009e6103b8565b3480156101d957600080fd5b5061009e6101e8366004610553565b61041b565b6001600160a01b0381166000908152600160205260408120805490913491839190610219908490610590565b9091555050604080513381523460208201527f2a01595cddf097c90216094025db714da3f4e5bd8877b56ba86a24ecead8e54391015b60405180910390a15050565b610263610494565b60405147906000906001600160a01b0384169083908381818185875af1925050503d80600081146102b0576040519150601f19603f3d011682016040523d82523d6000602084013e6102b5565b606091505b50509050806102d75760405163d23a9e8960e01b815260040160405180910390fd5b505050565b6102e4610494565b6102ee60006104ee565b565b326000908152600160208190526040909120805491810154909190610316908490610590565b11156103695760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f742072656465656d206d6f7265207468616e20646f6e617465640060448201526064015b60405180910390fd5b8181600101600082825461037d9190610590565b909155505060408051338152602081018490527f4896181ff8f4543cc00db9fe9b6fb7e6f032b7eb772c72ab1ec1b4d2e03b9369910161024f565b3360009081526001602052604081208054909134918391906103db908490610590565b9091555050604080513381523460208201527f2a01595cddf097c90216094025db714da3f4e5bd8877b56ba86a24ecead8e543910160405180910390a150565b610423610494565b6001600160a01b0381166104885760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610360565b610491816104ee565b50565b6000546001600160a01b031633146102ee5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610360565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461049157600080fd5b60006020828403121561056557600080fd5b81356105708161053e565b9392505050565b60006020828403121561058957600080fd5b5035919050565b600082198211156105b157634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220b15404ba523d4f2b509ac9d349828e324fa96ab6eff83568ea7e6291dd1d195664736f6c634300080f0033";

type DonationsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DonationsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Donations__factory extends ContractFactory {
  constructor(...args: DonationsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Donations> {
    return super.deploy(overrides || {}) as Promise<Donations>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Donations {
    return super.attach(address) as Donations;
  }
  override connect(signer: Signer): Donations__factory {
    return super.connect(signer) as Donations__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonationsInterface {
    return new utils.Interface(_abi) as DonationsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Donations {
    return new Contract(address, _abi, signerOrProvider) as Donations;
  }
}
