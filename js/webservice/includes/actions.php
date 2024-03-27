<?php
function getReview()
{
    return [
        ["id" => 1, "review" => "Magical like Jirachi!"],
        ["id" => 2, "review" => "Brave as a Charizard!"],
        ["id" => 3, "review" => "Swift as a Pikachu!"],
        ["id" => 4, "review" => "Majestic like Suicune!"],
        ["id" => 5, "review" => "Adventurous like Bulbasaur!"],
        ["id" => 6, "review" => "Mysterious like Mewtwo!"],
        ["id" => 7, "review" => "Energetic like Eevee!"],
        ["id" => 8, "review" => "Resilient like Snorlax!"],
        ["id" => 9, "review" => "Graceful like Gardevoir!"],
        ["id" => 10, "review" => "Fierce like Gyarados!"],
        ["id" => 11, "review" => "Wise like Alakazam!"],
        ["id" => 12, "review" => "Loyal like Lucario!"],
        ["id" => 13, "review" => "Charming like Jigglypuff!"],
        ["id" => 14, "review" => "Swift as a Ninjask!"],
        ["id" => 15, "review" => "Majestic like Lugia!"],
        ["id" => 16, "review" => "Adventurous like Absol!"],
        ["id" => 17, "review" => "Clever like Meowth!"],
        ["id" => 18, "review" => "Determined like Hitmonlee!"],
        ["id" => 19, "review" => "Joyful like Togekiss!"],
        ["id" => 20, "review" => "Mysterious like Darkrai!"]
    ];
}

function getDishDetails($id)
{
    $tags = [
        1 => [
            "1" => "food", "2" => ["
            "]
        ],
        2 => [
            "1" => "drinks"
        ]

    ];

    return $tags[$id];
}



