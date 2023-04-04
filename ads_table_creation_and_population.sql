-- Ads table
CREATE TABLE ads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    image LONGBLOB,
    content TEXT NOT NULL,
    keywords VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP --   FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        189,
        'Rustic Linen Chair',
        NULL,
        'Fugit aut laboriosam. ',
        'impedit,porro,rerum,consequatur,sint,error,et,distinctio,id,corrupti',
        'https://croninauerandwitting.co/industrial/rustic_linen_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        72,
        'Fantastic Paper Lamp',
        NULL,
        'Alias autem porro soluta eum. Totam rerum veritatis et sed rerum aliquid. Est numquam illo expedita praesentium expedita minima qui. ',
        'ea,quia,et,fuga,dolorem,quae,perferendis,ut,placeat,ex,consequatur,alias,dolorum,sint',
        'https://runtelabadieandschinner.com/jewelry/fantastic_paper_lamp'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        102,
        'Practical Steel Shirt',
        NULL,
        'Eaque excepturi ullam ex dolorum quaerat rerum ut. ',
        'amet,ab,neque,et,impedit,maiores,optio,et,fugit,molestiae,laudantium,veniam',
        'https://robertsandsons.co/gardenjewelry_toys/practical_steel_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        89,
        'Aerodynamic Plastic Shoes',
        NULL,
        'Iure ut recusandae repellendus. Ipsum autem vel sit neque praesentium quas consequatur. ',
        'non,est,voluptatum,et,est,debitis,illo,cumque,exercitationem,consectetur,rerum,necessitatibus,architecto',
        'https://bergnaumandsons.name/beauty_jewelry/aerodynamic_plastic_shoes'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        170,
        'Practical Aluminum Table',
        NULL,
        'Laboriosam est harum ut repellendus ut in atque. A minus dolor ad. ',
        'et,dolores,dignissimos,sit,ratione,omnis,voluptatem',
        'https://mertz-runte.info/grocery/practical_aluminum_table'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Fantastic Copper Clock',
        NULL,
        'Laudantium non tempora porro at earum similique. Asperiores eveniet et in doloremque voluptatem. ',
        'debitis,consectetur,minus,labore,corrupti,laborum,atque,quaerat,excepturi,eligendi',
        'https://von-williamson.info/kids/fantastic_copper_clock'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        112,
        'Durable Leather Chair',
        NULL,
        'Provident molestiae quisquam. ',
        'sunt,dolor,rem,unde,eum,sapiente,earum',
        'https://gutkowskillc.info/tools/durable_leather_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        70,
        'Practical Leather Chair',
        NULL,
        'Libero eius impedit vitae non. Dolorem perspiciatis aut. ',
        'harum,quidem,voluptas,pariatur,quia,aut,pariatur,sint,fugiat',
        'https://aufderharparkerandkirlin.info/health/practical_leather_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        90,
        'Synergistic Concrete Chair',
        NULL,
        'Qui voluptas et harum. Non eos placeat explicabo. ',
        'voluptas,error,qui,doloribus,dolores,illo,a,voluptas,vitae',
        'https://rogahn-strosin.biz/movies/synergistic_concrete_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        106,
        'Synergistic Rubber Keyboard',
        NULL,
        'Esse et non voluptatem. Iure deserunt incidunt consequatur inventore a maxime rerum. ',
        'ipsum,vitae,veritatis,libero,et,quia',
        'https://jacobson-rolfson.io/movies_music/synergistic_rubber_keyboard'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        133,
        'Synergistic Plastic Bottle',
        NULL,
        'Ad quod quia maxime dolor. Neque minus a. ',
        'error,ut,fugiat,fugit,architecto,enim,consectetur,qui,ipsum,recusandae,similique,ut,alias,officia',
        'https://sauer-lindgren.biz/beauty_movies/synergistic_plastic_bottle'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        133,
        'Lightweight Plastic Shirt',
        NULL,
        'Qui reprehenderit quia tenetur. Magnam eos commodi veritatis. Et est necessitatibus sunt earum consequatur eveniet ipsam. ',
        'aspernatur,blanditiis,optio,consequatur,recusandae,aut,libero,et,debitis,distinctio',
        'https://ryan-kutch.org/baby_tools/lightweight_plastic_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        190,
        'Synergistic Leather Gloves',
        NULL,
        'Et eius repellat. Quas voluptatem saepe adipisci. ',
        'voluptatum,adipisci,distinctio,nobis,similique,et',
        'https://casper-volkman.io/shoes/synergistic_leather_gloves'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        174,
        'Ergonomic Bronze Shoes',
        NULL,
        'Molestiae rerum quae quia ut. Provident occaecati est quae qui commodi quia. Quia aut molestiae iste. ',
        'aut,placeat,rerum,ullam,consequuntur,cupiditate,omnis,nam,facere,aut,qui,qui',
        'https://thielhudsonandlockman.net/jewelry_tools/ergonomic_bronze_shoes'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        158,
        'Sleek Copper Watch',
        NULL,
        'Numquam consequatur et. Distinctio pariatur eligendi. ',
        'voluptas,incidunt,assumenda,consequatur,consectetur,quae,exercitationem,excepturi,ducimus,et,aspernatur,et,deserunt',
        'https://boyerpaucekandcartwright.org/grocery_shoes/sleek_copper_watch'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        187,
        'Sleek Paper Car',
        NULL,
        'Et sit sunt voluptatibus facere mollitia. Itaque doloribus quasi eum in eos voluptates. ',
        'magnam,aut,saepe,quia,consequatur,tempora,consectetur,ut,asperiores,consectetur,dolor,qui',
        'https://boehmandsons.biz/movies/sleek_paper_car'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        99,
        'Sleek Silk Shirt',
        NULL,
        'Eos fugit quia labore blanditiis. Iste repudiandae pariatur. ',
        'atque,eius,ut,numquam,cum,voluptatum,vel,quas,rerum,delectus,blanditiis,similique,maiores',
        'https://naderinc.org/automotivebooks_games/sleek_silk_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        110,
        'Small Iron Coat',
        NULL,
        'Aut sit nihil ullam reprehenderit qui. Nemo inventore numquam. Itaque atque voluptas dolore officiis quos ducimus ipsum. ',
        'nemo,est,quibusdam,officia,impedit,est,consectetur,non,facilis',
        'https://crooks-sanford.io/outdoorssports_toys/small_iron_coat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        133,
        'Incredible Steel Wallet',
        NULL,
        'Non molestias perferendis maxime alias adipisci. ',
        'veritatis,nihil,illo,non,ab,quo',
        'https://gottlieb-mosciski.io/computers_grocery/incredible_steel_wallet'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        94,
        'Rustic Cotton Wallet',
        NULL,
        'Cumque et ut rem voluptas voluptas. Aut aspernatur a non maxime occaecati quis. Placeat exercitationem quas ut nihil. ',
        'omnis,exercitationem,nisi,culpa,quia,id,aut,totam,maxime,excepturi',
        'https://reichertgloverandkeeling.com/industrial/rustic_cotton_wallet'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        197,
        'Intelligent Cotton Clock',
        NULL,
        'Voluptatibus fuga quaerat illo ullam. Illum velit ratione. Dolorum ea vel. ',
        'omnis,ut,et,omnis,eius,rerum,distinctio,et,id',
        'https://streichkossandmayer.org/books_clothing/intelligent_cotton_clock'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        74,
        'Small Concrete Bottle',
        NULL,
        'Excepturi soluta velit. Ducimus accusamus sint sunt aut nulla id. ',
        'rerum,illum,fugit,occaecati,ratione,ipsa,sapiente,magnam,id,incidunt,deleniti',
        'https://boehminc.net/outdoors/small_concrete_bottle'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        129,
        'Lightweight Bronze Shirt',
        NULL,
        'Quo sit aperiam. Sed voluptatem saepe et porro autem maxime reiciendis. Est voluptatibus sit officiis id enim. ',
        'natus,aut,quis,ipsam,voluptatem,perferendis,beatae,reiciendis,architecto,eum,rem',
        'https://lindgrenyundtandwuckert.com/garden/lightweight_bronze_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        77,
        'Rustic Silk Bag',
        NULL,
        'Illo similique dolor deserunt laboriosam et sed vel. ',
        'harum,asperiores,laudantium,ullam,eum',
        'https://torphyuptonandjakubowski.name/clothingmusic_outdoors/rustic_silk_bag'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        148,
        'Ergonomic Paper Shoes',
        NULL,
        'Laboriosam alias aspernatur maiores quasi vero. Aliquid tempore est et iusto at. ',
        'qui,aut,sapiente,sit,iure',
        'https://wisokyandsons.net/books_health/ergonomic_paper_shoes'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        128,
        'Fantastic Wooden Gloves',
        NULL,
        'Molestiae numquam deserunt excepturi ab recusandae. Qui aperiam sapiente nobis sunt dolore. ',
        'dolor,officiis,est,impedit,delectus,iste,quo,et,autem,neque,ipsam,voluptatem,aut,est',
        'https://kshlerin-grady.name/industrial_movies/fantastic_wooden_gloves'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        6,
        'Awesome Granite Chair',
        NULL,
        'Reiciendis necessitatibus voluptatem hic qui. Exercitationem quidem fugiat aut aut in voluptates. Praesentium in sint incidunt aut qui. ',
        'natus,libero,similique,sed,ut,maiores,corporis,placeat,aut,tempore,necessitatibus,similique',
        'https://rempelandsons.org/automotive/awesome_granite_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        120,
        'Small Rubber Shirt',
        NULL,
        'Ut voluptas est quae corporis. Consequatur ipsum quasi facere dolor neque molestiae. Quos animi sit et saepe. ',
        'beatae,necessitatibus,quis,veniam,facere,assumenda,autem,voluptas,est,voluptate,sunt,quae,nesciunt',
        'https://littelmacejkovicandhamill.name/baby_health/small_rubber_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        116,
        'Fantastic Plastic Plate',
        NULL,
        'Corporis nihil aut quia omnis et dolor. Vero praesentium recusandae sit aut. ',
        'distinctio,libero,aut,voluptatem,corporis,consequatur,accusamus,nulla,voluptatum,accusantium,necessitatibus,ducimus,molestiae',
        'https://larkinmckenzieandhoeger.org/games_garden/fantastic_plastic_plate'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        170,
        'Synergistic Aluminum Chair',
        NULL,
        'Necessitatibus vel cumque. Neque delectus harum non minima atque perspiciatis cumque. ',
        'qui,sed,aut,consectetur,et,consequatur,sunt',
        'https://hamillinc.co/computers/synergistic_aluminum_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        182,
        'Fantastic Aluminum Chair',
        NULL,
        'Voluptates fugiat necessitatibus est ab. ',
        'maxime,autem,magnam,doloremque,aut,officia,maiores,aut,beatae,distinctio,quae,eum,deleniti',
        'https://terry-trantow.io/beauty_garden/fantastic_aluminum_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        85,
        'Incredible Granite Watch',
        NULL,
        'Commodi et est praesentium. Aut labore consequatur illum harum eveniet et. ',
        'quia,delectus,consequatur,eum,provident,autem,magnam,ipsum,est,voluptas,praesentium,a,id',
        'https://gulgowskigroup.info/toys/incredible_granite_watch'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        85,
        'Heavy Duty Wool Plate',
        NULL,
        'Et magni aut. In quia aut sint. ',
        'tenetur,laboriosam,vitae,neque,voluptatem,dolor,quo,aperiam,magnam,quae,id,ullam,saepe,quia',
        'https://wildermantrompandkris.co/homejewelry_sports/heavy_duty_wool_plate'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        62,
        'Intelligent Silk Wallet',
        NULL,
        'Quod voluptate animi occaecati. Nulla qui ratione quo voluptatem non. ',
        'ipsa,voluptatem,fugit,quia,porro,soluta,voluptatem,quia,laborum,eum,aut,harum,fugit',
        'https://braunlittleandrunte.co/electronics/intelligent_silk_wallet'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        23,
        'Enormous Aluminum Computer',
        NULL,
        'Debitis omnis consequuntur excepturi quod ullam illo. ',
        'rerum,saepe,quia,praesentium,id,tempore,non,quaerat,velit,et,aperiam',
        'https://mcculloughrippinandadams.info/music/enormous_aluminum_computer'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        114,
        'Synergistic Iron Pants',
        NULL,
        'Neque ab asperiores. Quam aliquid cupiditate vero dolorem architecto repellendus a. Omnis amet qui molestiae placeat qui. ',
        'id,minus,omnis,expedita,impedit',
        'https://durganparkerandborer.name/automotive/synergistic_iron_pants'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        95,
        'Gorgeous Paper Hat',
        NULL,
        'Aspernatur asperiores totam magni autem. Suscipit quod quis rerum. ',
        'dolor,sequi,odit,sed,velit,at,perferendis,adipisci,atque,sed,et',
        'https://fadelllc.com/industrial/gorgeous_paper_hat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        30,
        'Intelligent Concrete Shoes',
        NULL,
        'Consequatur magnam molestiae fuga eligendi. ',
        'nihil,occaecati,voluptatem,veniam,sit',
        'https://mayertconroyandkub.biz/beautygames_grocery/intelligent_concrete_shoes'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        134,
        'Small Concrete Bench',
        NULL,
        'Veniam voluptate recusandae. Libero quae optio ut. Repudiandae adipisci aliquam. ',
        'recusandae,fugiat,et,numquam,vero,quo,quia,doloribus,molestiae,consequatur,voluptas,dignissimos',
        'https://labadieinc.co/computerselectronics_movies/small_concrete_bench'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        191,
        'Sleek Leather Bag',
        NULL,
        'Eum autem eaque. Voluptatibus molestiae officia voluptatum esse. Unde in qui rerum quia. ',
        'alias,sed,reiciendis,maxime,distinctio,assumenda',
        'https://weimann-kihn.org/industrial/sleek_leather_bag'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        132,
        'Durable Linen Coat',
        NULL,
        'Soluta commodi beatae et. Voluptatem doloremque cum nostrum itaque aspernatur voluptatem. ',
        'animi,exercitationem,et,qui,illum',
        'https://bednartrantowandgaylord.name/jewelry_tools/durable_linen_coat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        26,
        'Durable Copper Shirt',
        NULL,
        'Et sit quibusdam veritatis dolore quasi rerum. Porro veniam eligendi sit maiores cupiditate quo. ',
        'sit,quidem,est,quod,consequuntur,labore,nihil',
        'https://greenholtabshireandauer.co/electronicsjewelry_toys/durable_copper_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        73,
        'Intelligent Copper Computer',
        NULL,
        'Enim labore aliquam. Similique perferendis magnam est magnam et corrupti. Natus quia asperiores est id ipsum totam minima. ',
        'sed,perspiciatis,et,fugiat,natus,aliquid,est,illo',
        'https://blockandsons.co/grocerymovies_sports/intelligent_copper_computer'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        68,
        'Practical Iron Shoes',
        NULL,
        'Quia qui officia itaque unde exercitationem reiciendis fugiat. ',
        'unde,numquam,eum,dolore,est,aut,autem,provident,dolorum,ea,quasi,recusandae',
        'https://schmelercruickshankandhaag.info/babyhealth_tools/practical_iron_shoes'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        50,
        'Aerodynamic Rubber Keyboard',
        NULL,
        'Ea sint repellat voluptate deserunt quod impedit. Cupiditate velit eius exercitationem quis. Nihil aut laudantium praesentium sequi occaecati quam nemo. ',
        'nesciunt,facilis,ea,natus,quo,officia',
        'https://kunzeterryandtillman.biz/movies/aerodynamic_rubber_keyboard'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        93,
        'Synergistic Silk Watch',
        NULL,
        'Consequatur eligendi deserunt aut fuga nisi. ',
        'officiis,commodi,laborum,temporibus,aut,accusantium,sit,quisquam,corrupti,maiores,eius,omnis,minus',
        'https://erdmaninc.info/clothing_grocery/synergistic_silk_watch'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        40,
        'Sleek Leather Table',
        NULL,
        'Vel qui ipsum id repellat impedit voluptas. Quia sint saepe velit possimus sint consequuntur. ',
        'consequatur,vitae,optio,minima,itaque,sequi,ab',
        'https://moorefeestandtorphy.biz/health/sleek_leather_table'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        175,
        'Fantastic Plastic Chair',
        NULL,
        'Tempora quia in. Ducimus nobis praesentium et inventore blanditiis. ',
        'atque,soluta,et,voluptatem,expedita,sint',
        'https://armstronggroup.biz/games/fantastic_plastic_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        62,
        'Intelligent Marble Car',
        NULL,
        'Maxime id in labore. Mollitia possimus accusamus provident nemo labore nihil maxime. Qui totam ut enim fugit nobis. ',
        'ad,amet,pariatur,nihil,ipsam,voluptatibus,pariatur',
        'https://reichertllc.com/shoes/intelligent_marble_car'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        64,
        'Aerodynamic Wooden Lamp',
        NULL,
        'Omnis et eius ipsum. Fugit ullam quis voluptate sequi. ',
        'officiis,non,et,mollitia,fugiat,ab,enim,ad,quasi',
        'https://adamsmcclureandvon.biz/babyhealth_toys/aerodynamic_wooden_lamp'
    );