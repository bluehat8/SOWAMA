// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0

pragma solidity >=0.8.0 <0.9.0;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Sowa is ERC1155, Ownable {
    mapping(address => bool) public minterManagers;
    string residuosUri = "https://gateway.lighthouse.storage/ipfs/bafkreih7o2nadvkegagapvqxwwobfaxhq6e4dap4l6s67bzdazsx2jhqra";

    uint256 public constant TOKEN_RESIDUOS = 1; // Token fungible (residuos)
    uint256 public constant NFT_CERTIFICADO = 2; // NFT no fungible (certificados)
    uint256 public constant SOWA = 3; // Token de usabilidad para recompensas
    uint256 public constant COSTO_CERTIFICADO = 100;


    constructor(address initialOwner) ERC1155("") Ownable(initialOwner) {}


    modifier onlyOwnerOrMinter() {
        require(msg.sender == owner() || minterManagers[msg.sender], "Solo el propietario o un Minter Manager puede ejecutar esta funcion");
        _;
    }

    function addMinterManager(address manager) external onlyOwnerOrMinter {
        minterManagers[manager] = true;
    }

    function removeMinterManager(address manager) external onlyOwnerOrMinter {
        minterManagers[manager] = false;
    }

    function mintResiduos(address account, uint256 amount) external onlyOwnerOrMinter {
        _mint(account, TOKEN_RESIDUOS, amount, "");
        _setURI(residuosUri);

        // Recompensa automática por cada token de residuos
        uint256 rewardAmount = amount * 10;
        _mint(account, SOWA, rewardAmount, ""); 
    }

    function canjearCertificado() external {
        require(balanceOf(msg.sender, SOWA) >= COSTO_CERTIFICADO, "Fondos insuficientes");
        
        // Quemar tokens de recompensa
        _burn(msg.sender, SOWA, COSTO_CERTIFICADO);

        _mint(msg.sender, NFT_CERTIFICADO, 1, "");
    }

    function mintCertificado(address account, string memory tokenURI) external onlyOwnerOrMinter {
        uint256 newTokenId = NFT_CERTIFICADO;
        _mint(account, newTokenId, 1, "");
        _setURI(tokenURI); 
    }
}