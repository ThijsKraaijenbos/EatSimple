-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Gegenereerd op: 28 mrt 2024 om 14:01
-- Serverversie: 10.4.28-MariaDB
-- PHP-versie: 8.2.4

SET
SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET
time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eatsimple`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `orders`
--

CREATE TABLE `orders`
(
    `order_id`   bigint(20) UNSIGNED NOT NULL,
    `table`      int(11) NOT NULL,
    `order_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp ()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `orders`
--

INSERT INTO `orders` (`order_id`, `table`, `order_time`)
VALUES (1, 1, '2024-03-26 13:49:13'),
       (2, 2, '2024-03-26 13:49:18'),
       (3, 3, '2024-03-26 13:49:21');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `order_variant`
--

CREATE TABLE `order_variant`
(
    `order_id`   bigint(20) NOT NULL,
    `product_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `order_variant`
--

INSERT INTO `order_variant` (`order_id`, `product_id`)
VALUES (1, 1),
       (2, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `products`
--

CREATE TABLE `products`
(
    `product_id` bigint(20) NOT NULL,
    `name`       varchar(255) NOT NULL,
    `image`      varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `products`
--

INSERT INTO `products` (`product_id`, `name`, `image`)
VALUES (1, 'Pizza',
        'https://www.deliciousmagazine.co.uk/wp-content/uploads/2023/12/2023D191_MIED_PIZZAS_2__-768x960.jpg'),
       (2, 'Burgers',
        'https://www.seriouseats.com/thmb/_c-xbP-tch4dpSTxKE1zY16sHo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg'),
       (3, 'Pasta', 'https://www.jessicagavin.com/wp-content/uploads/2020/07/types-of-pasta-7.jpg'),
       (4, 'Warme Drankjes', ''),
       (5, 'Koude drankjes', '');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `types`
--

CREATE TABLE `types`
(
    `type_id`    bigint(20) NOT NULL,
    `product_id` bigint(20) NOT NULL,
    `name`       varchar(255) NOT NULL,
    `img`        varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `types`
--

INSERT INTO `types` (`type_id`, `product_id`, `name`, `img`)
VALUES (1, 1, 'Hawai',
        'https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg'),
       (2, 1, 'Salami', 'https://img.taste.com.au/hHvaN8QK/taste/2017/09/italian-salami-pizza-1980x1320-130553-1.jpg'),
       (3, 2, 'Quarder Pounder',
        'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg'),
       (4, 2, 'Cheese Burger',
        'https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267.jpg'),
       (5, 1, 'Quattro Formaggi',
        'https://kokkerellenmetsuus.nl/wp-content/uploads/2020/09/C-Pizza-quattro-formaggi-4-kazen-Kokkerellen-met-Suus-scaled.jpg'),
       (6, 1, 'Calzone',
        'https://images.arla.com/recordid/F07B0F3F-CB21-46E9-9692462AADEA4D23/calzone.jpg?width=1200&height=630&mode=crop&format=jpg'),
       (7, 1, 'Margherita', 'https://www.leukerecepten.nl/wp-content/uploads/2023/02/pizza-margharita.jpg'),
       (8, 2, 'Bacon burger', 'https://cafetariadekoppel.nl/wp-content/uploads/2020/11/maple-bacon-burger-t.jpg'),
       (9, 2, 'Veggie Burger',
        'https://marleyspoon.com/media/recipes/40668/main_photos/large/veggieburger-1ffb6330c00fc97618c4bb0049db9357.jpeg'),
       (10, 2, 'Hawaiian Burger',
        'https://www.unileverfoodsolutions.eg/dam/global-ufs/mcos/meps/arabia/calcmenu/recipes/EG-recipes/In-Development/the-big-hawaiian-burger/main-header.jpg'),
       (11, 3, 'Pasta Bolognese', 'https://static.ah.nl/static/recepten/img_RAM_PRD121467_1224x900_JPG.jpg'),
       (12, 3, 'Pasta Carbonara', 'https://www.leukerecepten.nl/wp-content/uploads/2021/06/pasta-carbonara_v.jpg'),
       (13, 3, 'Pasta Puttanesca',
        'https://www.recipetineats.com/wp-content/uploads/2021/08/Spaghetti-Puttanesca_64-SQ.jpg'),
       (14, 3, 'Pasta Fettuccine',
        'https://images.ctfassets.net/3vz37y2qhojh/5VhlROxP8sUuxaoEITTHPl/51be515b0df517fa026fc45520598fb5/Easy-Fettuccine-Alfredo-Hero-Horizontal.jpg'),
       (15, 3, 'Pasta Pesto',
        'https://marleyspoon.com/media/recipes/118119/main_photos/large/schnelle_paprika_hahnchen_penne-f98452974c20266a94c5d0aa1a25e0c4.jpeg'),
       (16, 4, 'Koffie',
        'https://images0.persgroep.net/rcs/L4oSb3LnFtLh9Znzgmt5LDVU4bw/diocontent/160662822/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8'),
       (17, 4, 'Thee', 'https://www.tea4you.nl/media/86/dd/1a/1672752518/de%20temperatuur%20van%20je%20theewater.jpg'),
       (18, 4, 'Cappuccino',
        'https://insanelygoodrecipes.com/wp-content/uploads/2023/06/Cappuccino-Coffee-in-a-White-Cup.jpg'),
       (19, 4, 'Chocolademelk met Slagroom',
        'https://i0.wp.com/gwennsbakery.nl/wp-content/uploads/2019/01/Warme-chocolademelk-Gwenns-Bakery-2.jpg?resize=833%2C540&ssl=1'),
       (20, 4, 'Chocolademelk zonder slagroom',
        'https://www.puurgezond.nl/fileadmin/_processed_/e/4/csm_Chocolademelk_2accf7d240.jpg'),
       (26, 5, 'Cola', 'https://live.staticflickr.com/65535/50203710418_fe9bf5e0cb_b.jpg'),
       (27, 5, 'Fanta', 'https://i.pinimg.com/originals/b1/ec/12/b1ec12a69c28ef99526335f06fe6f584.png'),
       (28, 5, 'Cassis', 'https://eethuis-r2b.nl/wp-content/uploads/2021/08/fanta-cassis.jpg'),
       (29, 5, 'Appelsap',
        'https://images0.persgroep.net/rcs/IRRYzcvvW4PBET_JCV2rAfASf7g/diocontent/220546051/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8'),
       (30, 5, 'Koude Chocolademelk', 'https://www.horescasmulders.nl/media/products/7266062.jpg');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `orders`
--
ALTER TABLE `orders`
    ADD PRIMARY KEY (`order_id`);

--
-- Indexen voor tabel `products`
--
ALTER TABLE `products`
    ADD PRIMARY KEY (`product_id`);

--
-- Indexen voor tabel `types`
--
ALTER TABLE `types`
    ADD PRIMARY KEY (`type_id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `orders`
--
ALTER TABLE `orders`
    MODIFY `order_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `products`
--
ALTER TABLE `products`
    MODIFY `product_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT voor een tabel `types`
--
ALTER TABLE `types`
    MODIFY `type_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
