<?php
/**
 * @return array
 */
function getFoodTypes()
{
    return [
        "rundvlees" => [
            [
                "id" => 1,
                "name" => "Big mac",
                "image" => "img/all_food/rundvlees/bigmac.png",
            ],
            [
                "id" => 2,
                "name" => "Ketchup burger",
                "image" => "img/all_food/rundvlees/ketchup-burger.png",
            ],
        ],
        "kip" => [
            [
                "id" => 1,
                "name" => "Kip nuggets",
                "image" => "img/all_food/kip/kip-nuggets.png",
            ],
            [
                "id" => 2,
                "name" => "Chicken tenders",
                "image" => "img/all_food/kip/chicken-tenders.png",
            ],
        ],
        "varken" => [
            [
                "id" => 1,
                "name" => "Bacon",
                "image" => "img/all_food/varkensvlees/bigmac.png",
            ],
            [
                "id" => 2,
                "name" => "Varken2",
                "image" => "img/all_food/varkensvlees/ketchup-burger.png",
            ],
        ]
    ];
}

function getFoodDetails($id)
{
    $details = [
        [
            "id" => 1,
            "description" => "De big mac is een hamburger ofzo idfk ik schrijf maar wat random bullshit hierzo",
            "vegan" => false,
            "nutrients" => [
                "33 gram vet",
                "26 gram eiwit",
                "44 gram koolhydraten"
            ],
            "ingredients" => [
                "brood",
                "rundvlees 2x",
                "sla",
                "kaas 2x",
                "augurken",
                "big mac saus",
                "uien"
            ]
        ],
        [
            "id" => 2,
            "description" => "TBD",
            "vegan" => false,
            "nutrients" => [
                "?? gram vet",
                "?? gram eiwit",
                "?? gram koolhydraten"
            ],
            "ingredients" => [
                "brood",
                "rundvlees",
                "sla",
                "kaas",
                "ketchup",
                "uien"
            ]
        ],
    ];
    return $details[$id];
}
