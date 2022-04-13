// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract Darticle {
    string public name = "Darticle";

    uint256 public articleCount = 0;

    mapping(uint256 => Article) public articles;

    struct Article {
        uint256 id;
        string hash;
        string description;
    }

    event ArticleCreated(
        uint256 id,
        string hash,
        string description
    );

    function uploadArticle(
        string memory _imgHash,
        string memory _title,
        string memory _description
    ) public {
        require(bytes(_imgHash).length > 0);

        require(bytes(_title).length > 0);

        require(bytes(_description).length > 0);

        articleCount++;

        articles[articleCount] = Article(
            articleCount,
            _imgHash,
            _title,
            _description
        );

        emit ArticleCreated(articleCount, _imgHash, _title, _description);
    }
}
