// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface Idatabase {
    struct dataDetails {
        address student;
        string name;
        uint age;
        uint[] score;
    }

    function register(
        string memory _name,
        address _student,
        uint _age,
        uint[] memory _score
    ) external;

    function ReStudent(address _student) external returns (dataDetails memory);

    function updateScore(uint _score, address _student) external;

    function reStudents() external view returns (dataDetails[] memory _DD);
}
