//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract  Classwork{

    struct Book{
        uint256 leaves;
        string bookname;
    }

    mapping(uint => Book) idToBook;
    uint index = 0;

    event Log(Book book);

    function setbook(Book calldata bookdetails)external{
        Book storage B = idToBook[index];
        B.bookname = bookdetails.bookname;
        B.leaves = bookdetails.leaves;

        index++;

        emit Log(bookdetails);
    }

    function seeBooks(uint _index)external view returns(Book memory b){
     
        Book storage B = idToBook[_index];
         b.bookname = B.bookname;
        b.leaves = B.leaves; 

        
    }
}