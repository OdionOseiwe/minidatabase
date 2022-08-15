// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract databse {
    /// you cant register yourself
    // error cantRegister( revert(msg.sender != _student));

    ///["7", "9", "9", "7"]
    address owner;

    mapping(address => dataDetails) dataBase;

    mapping(address => bool) registered;

    struct dataDetails {
        address student;
        string name;
        uint age;
        uint[] score;
    }

    address[] public keys;

    dataDetails[] public Details;

    event registeredStudent(string name, address student, uint age);

    event returnStudent(dataDetails Detail);

    event updatescore(uint score, address student);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    function register(
        string memory _name,
        address _student,
        uint _age,
        uint[] memory _score
    ) external {
        require(registered[_student] != true, "registered");
        require(msg.sender != _student, "can't register yourself");
        dataDetails storage DD = dataBase[_student];
        DD.student = _student;
        DD.name = _name;
        DD.age = _age;
        DD.score = _score;
        registered[_student] = true;
        keys.push(_student);
        Details.push(DD);

        emit registeredStudent(_name, _student, _age);
    }

    function ReStudent(address _student)
        external
        returns (dataDetails memory Detail)
    {
        Detail = dataBase[_student];
        emit returnStudent(Detail);
    }

    function updateScore(uint _score, address _student) external onlyOwner {
        dataDetails storage DD = dataBase[_student];
        DD.score.push(_score);

        emit updatescore(_score, _student);
    }

    function reStudents() external view returns (dataDetails[] memory _DD) {
        address[] memory all = keys;
        _DD = new dataDetails[](all.length);

        for (uint i = 0; i < all.length; i++) {
            _DD[i] = dataBase[all[i]];
        }
    }
}
