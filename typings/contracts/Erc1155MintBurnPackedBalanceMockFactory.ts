/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Erc1155MintBurnPackedBalanceMock } from "./Erc1155MintBurnPackedBalanceMock";

export class Erc1155MintBurnPackedBalanceMockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Erc1155MintBurnPackedBalanceMock> {
    return super.deploy(overrides || {}) as Promise<
      Erc1155MintBurnPackedBalanceMock
    >;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Erc1155MintBurnPackedBalanceMock {
    return super.attach(address) as Erc1155MintBurnPackedBalanceMock;
  }
  connect(signer: Signer): Erc1155MintBurnPackedBalanceMockFactory {
    return super.connect(signer) as Erc1155MintBurnPackedBalanceMockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc1155MintBurnPackedBalanceMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Erc1155MintBurnPackedBalanceMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]"
      }
    ],
    name: "batchBurnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "batchMintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "burnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "getIDBinIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "bin",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_binValues",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getValueInBin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "mintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612145806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c8063a3f091f51161008c578063db90e83c11610066578063db90e83c14610207578063e985e9c514610228578063eaec5f811461023b578063f242432a1461024e576100e9565b8063a3f091f5146101ce578063bd7a6c41146101e1578063d7a0ad90146101f4576100e9565b80632eb2c2d6116100c85780632eb2c2d614610173578063437ecbe9146101885780634e1273f41461019b578063a22cb465146101bb576100e9565b8062fdd58e1461010a57806301ffc9a7146101335780630e89341c14610153575b60405162461bcd60e51b815260040161010190611d11565b60405180910390fd5b61011d610118366004611a9f565b610261565b60405161012a9190611d65565b60405180910390f35b610146610141366004611c0e565b6102a9565b60405161012a9190611cb3565b610166610161366004611c36565b6102bc565b60405161012a9190611cbe565b610186610181366004611856565b61039d565b005b610186610196366004611ac8565b61045a565b6101ae6101a9366004611b4d565b61046a565b60405161012a9190611c6f565b6101866101c9366004611a65565b610681565b6101866101dc366004611afa565b6106ef565b6101866101ef36600461195f565b610701565b6101866102023660046119d0565b61070c565b61021a610215366004611c36565b610718565b60405161012a929190611d6e565b610146610236366004611824565b610725565b61011d610249366004611c4e565b610753565b61018661025c3660046118fc565b610766565b600080600061026f84610718565b6001600160a01b03871660009081526020818152604080832085845290915290205491935091506102a09082610753565b95945050505050565b60006102b48261081c565b90505b919050565b606060026102c983610848565b60405160200180838054600181600116156101000203166002900480156103275780601f10610305576101008083540402835291820191610327565b820191906000526020600020905b815481529060010190602001808311610313575b5050825160208401908083835b602083106103535780518252601f199092019160209182019101610334565b5181516020939093036101000a600019018019909116921691909117905264173539b7b760d91b92019182525060408051808303601a190181526005909201905295945050505050565b336001600160a01b03861614806103b957506103b98533610725565b6103f45760405162461bcd60e51b815260040180806020018281038252603c815260200180611f2d603c913960400191505060405180910390fd5b6001600160a01b0384166104395760405162461bcd60e51b815260040180806020018281038252603d815260200180611df8603d913960400191505060405180910390fd5b61044585858585610922565b610453858585855a86610c86565b5050505050565b610465838383610e7e565b505050565b815181516060919081146104af5760405162461bcd60e51b8152600401808060200182810382526039815260200180611dbf6039913960400191505060405180910390fd5b6000806104cf856000815181106104c257fe5b6020026020010151610718565b915091506000806000886000815181106104e557fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff8111801561053f57600080fd5b50604051908082528060200260200182016040528015610569578160200160208202803683370190505b5090506105768385610753565b8160008151811061058357fe5b602090810291909101015260015b86811015610674576105a88982815181106104c257fe5b909650945082861415806105f757508981815181106105c357fe5b60200260200101516001600160a01b03168a60018303815181106105e357fe5b60200260200101516001600160a01b031614155b1561064b576000808b838151811061060b57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008781526020019081526020016000205493508592505b6106558486610753565b82828151811061066157fe5b6020908102919091010152600101610591565b5098975050505050505050565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6106fb84848484610edb565b50505050565b610465838383610f42565b6106fb848484846110aa565b6008810491600790911690565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6020810282901c63ffffffff1692915050565b336001600160a01b038616148061078257506107828533610725565b6107bd5760405162461bcd60e51b8152600401808060200182810382526037815260200180611e686037913960400191505060405180910390fd5b6001600160a01b0384166108025760405162461bcd60e51b81526004018080602001828103825260388152602001806120236038913960400191505060405180910390fd5b61080e858585856112cc565b610453858585855a86611349565b60006001600160e01b031982166303a24d0760e21b141561083f575060016102b7565b6102b4826114bb565b60608161086d57506040805180820190915260018152600360fc1b60208201526102b7565b818060005b821561088657600101600a83049250610872565b60608167ffffffffffffffff8111801561089f57600080fd5b506040519080825280601f01601f1916602001820160405280156108ca576020820181803683370190505b50905060001982015b831561091857600a840660300160f81b828280600190039350815181106108f657fe5b60200101906001600160f81b031916908160001a905350600a840493506108d3565b5095945050505050565b8151815181146109635760405162461bcd60e51b8152600401808060200182810382526042815260200180611e9f6042913960600191505060405180910390fd5b836001600160a01b0316856001600160a01b0316141580156109855750600081115b15610b235760008061099d856000815181106104c257fe5b6001600160a01b0389166000908152602081815260408083208584529091528120548751939550919350916109e891908490889085906109d957fe5b602002602001015160016114e7565b6001600160a01b03881660009081526020818152604080832087845290915281205487519293509091610a319190859089908590610a2257fe5b602002602001015160006114e7565b90508360015b86811015610ade57610a4e8982815181106104c257fe5b9096509450818614610ab0576001600160a01b038b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b610ac184868a84815181106109d957fe5b9350610ad483868a8481518110610a2257fe5b9250600101610a37565b50506001600160a01b03808a16600090815260208181526040808320888452825280832095909555918a16815280825283812095815294905292209190915550610ba6565b60005b81811015610ba457828181518110610b3a57fe5b6020026020010151610b5f87868481518110610b5257fe5b6020026020010151610261565b1015610b9c5760405162461bcd60e51b8152600401808060200182810382526036815260200180611fa66036913960400191505060405180910390fd5b600101610b26565b505b836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610c2b578181015183820152602001610c13565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610c6a578181015183820152602001610c52565b5050505090500194505050505060405180910390a45050505050565b610c98856001600160a01b0316611678565b15610e76576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610d29578181015183820152602001610d11565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610d68578181015183820152602001610d50565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610da4578181015183820152602001610d8c565b50505050905090810190601f168015610dd15780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b158015610df657600080fd5b5087f1158015610e0a573d6000803e3d6000fd5b50505050506040513d6020811015610e2157600080fd5b505190506001600160e01b0319811663bc197c8160e01b14610e745760405162461bcd60e51b815260040180806020018281038252604c815260200180611ee1604c913960600191505060405180910390fd5b505b505050505050565b610e8b83838360016116b2565b604080518381526020810183905281516000926001600160a01b0387169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a4505050565b610ee884848460006116b2565b604080518481526020810184905281516001600160a01b0387169260009233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a46106fb60008585855a86611349565b815181518114610f835760405162461bcd60e51b815260040180806020018281038252603d815260200180611f69603d913960400191505060405180910390fd5b60005b81811015610fc957610fc185858381518110610f9e57fe5b6020026020010151858481518110610fb257fe5b602002602001015160016116b2565b600101610f86565b5060006001600160a01b0316846001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611050578181015183820152602001611038565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561108f578181015183820152602001611077565b5050505090500194505050505060405180910390a450505050565b81518351146110ea5760405162461bcd60e51b815260040180806020018281038252603e8152602001806120a0603e913960400191505060405180910390fd5b8251156111e357600080611104856000815181106104c257fe5b6001600160a01b0388166000908152602081815260408083208584529091528120548751939550919350916111409190849088908590610a2257fe5b86519091508360015b828110156111b7576111608982815181106104c257fe5b909650945081861461119c576001600160a01b038a16600090815260208181526040808320948352939052828120949094558584529220549184905b6111ad84868a8481518110610a2257fe5b9350600101611149565b5050506001600160a01b0387166000908152602081815260408083209583529490529290922091909155505b836001600160a01b031660006001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611269578181015183820152602001611251565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156112a8578181015183820152602001611290565b5050505090500194505050505060405180910390a46106fb60008585855a86610c86565b6112d984838360016116b2565b6112e683838360006116b2565b826001600160a01b0316846001600160a01b0316336001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b61135b856001600160a01b0316611678565b15610e76576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156113ed5781810151838201526020016113d5565b50505050905090810190601f16801561141a5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b15801561143d57600080fd5b5087f1158015611451573d6000803e3d6000fd5b50505050506040513d602081101561146857600080fd5b505190506001600160e01b0319811663f23a6e6160e01b14610e745760405162461bcd60e51b8152600401808060200182810382526047815260200180611fdc6047913960600191505060405180910390fd5b60006001600160e01b03198216636cdb3d1360e11b14156114de575060016102b7565b6102b48261171f565b60006020840263ffffffff828460018111156114ff57fe5b14156115995784821b870192508683101561154b5760405162461bcd60e51b81526004018080602001828103825260328152602001806120de6032913960400191505060405180910390fd5b64010000000087831c82168601106115945760405162461bcd60e51b81526004018080602001828103825260328152602001806120de6032913960400191505060405180910390fd5b61166e565b60018460018111156115a757fe5b14156116375784821b87039250868311156115f35760405162461bcd60e51b8152600401808060200182810382526033815260200180611e356033913960400191505060405180910390fd5b84818389901c1610156115945760405162461bcd60e51b8152600401808060200182810382526033815260200180611e356033913960400191505060405180910390fd5b60405162461bcd60e51b815260040180806020018281038252604581526020018061205b6045913960600191505060405180910390fd5b5050949350505050565b6000813f80158015906116ab57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b6000806116be85610718565b6001600160a01b03881660009081526020818152604080832085845290915290205491935091506116f1908286866114e7565b6001600160a01b03909616600090815260208181526040808320948352939052919091209490945550505050565b6001600160e01b031981166301ffc9a760e01b14919050565b80356001600160a01b03811681146102b757600080fd5b600082601f83011261175f578081fd5b813561177261176d82611da0565b611d7c565b81815291506020808301908481018184028601820187101561179357600080fd5b60005b848110156117b257813584529282019290820190600101611796565b505050505092915050565b600082601f8301126117cd578081fd5b813567ffffffffffffffff8111156117e157fe5b6117f4601f8201601f1916602001611d7c565b915080825283602082850101111561180b57600080fd5b8060208401602084013760009082016020015292915050565b60008060408385031215611836578182fd5b61183f83611738565b915061184d60208401611738565b90509250929050565b600080600080600060a0868803121561186d578081fd5b61187686611738565b945061188460208701611738565b9350604086013567ffffffffffffffff808211156118a0578283fd5b6118ac89838a0161174f565b945060608801359150808211156118c1578283fd5b6118cd89838a0161174f565b935060808801359150808211156118e2578283fd5b506118ef888289016117bd565b9150509295509295909350565b600080600080600060a08688031215611913578081fd5b61191c86611738565b945061192a60208701611738565b93506040860135925060608601359150608086013567ffffffffffffffff811115611953578182fd5b6118ef888289016117bd565b600080600060608486031215611973578283fd5b61197c84611738565b9250602084013567ffffffffffffffff80821115611998578384fd5b6119a48783880161174f565b935060408601359150808211156119b9578283fd5b506119c68682870161174f565b9150509250925092565b600080600080608085870312156119e5578384fd5b6119ee85611738565b9350602085013567ffffffffffffffff80821115611a0a578485fd5b611a168883890161174f565b94506040870135915080821115611a2b578384fd5b611a378883890161174f565b93506060870135915080821115611a4c578283fd5b50611a59878288016117bd565b91505092959194509250565b60008060408385031215611a77578182fd5b611a8083611738565b915060208301358015158114611a94578182fd5b809150509250929050565b60008060408385031215611ab1578182fd5b611aba83611738565b946020939093013593505050565b600080600060608486031215611adc578283fd5b611ae584611738565b95602085013595506040909401359392505050565b60008060008060808587031215611b0f578384fd5b611b1885611738565b93506020850135925060408501359150606085013567ffffffffffffffff811115611b41578182fd5b611a59878288016117bd565b60008060408385031215611b5f578081fd5b823567ffffffffffffffff80821115611b76578283fd5b818501915085601f830112611b89578283fd5b8135611b9761176d82611da0565b80828252602080830192508086018a828387028901011115611bb7578788fd5b8796505b84871015611be057611bcc81611738565b845260019690960195928101928101611bbb565b509096508701359350505080821115611bf7578283fd5b50611c048582860161174f565b9150509250929050565b600060208284031215611c1f578081fd5b81356001600160e01b0319811681146116ab578182fd5b600060208284031215611c47578081fd5b5035919050565b60008060408385031215611c60578182fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b81811015611ca757835183529284019291840191600101611c8b565b50909695505050505050565b901515815260200190565b6000602080835283518082850152825b81811015611cea57858101830151858201604001528201611cce565b81811115611cfb5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526034908201527f455243313135354d6574614d696e744275726e5061636b656442616c616e6365604082015273135bd8dace881253959053125117d351551213d160621b606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715611d9857fe5b604052919050565b600067ffffffffffffffff821115611db457fe5b506020908102019056fe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f57455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e5061636b656442616c616e63652362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f57455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135354d696e744275726e5061636b656442616c616e6365235f62617463684d696e743a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a2646970667358221220623ce175ab6006eb8a0fe2cf1f53a85f2f2fe98da925b3461adb902eb120138564736f6c63430007040033";