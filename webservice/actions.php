<?php

function orderFood()
{
    return [
        0 =>
            [
                "id" => 0,
                "name" => "food",
                "image" => "food.jpg"
            ],
        [
            "id" => 1,
            "type" => "Drinks",
            "image" => "drinks.jpg"
        ]
    ];
}

//function getFoodDetails($id)
//{
//    $details = [
//        0 => [
//            0 => [""]
//        ],
//        1 => [
//            "cold" => [""],
//        ]
//    ];
//    return $details[$id];
//}
