-- Users table: add birthday column
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  birthday DATE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  bio TEXT,
  profile_picture LONGBLOB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Friendships table
CREATE TABLE friendships (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id1 INT NOT NULL,
  user_id2 INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id1) REFERENCES users(id),
  FOREIGN KEY (user_id2) REFERENCES users(id)
);

-- Conversations table
CREATE TABLE conversations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Conversation_users table
CREATE TABLE conversation_users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  conversation_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (conversation_id) REFERENCES conversations(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Messages table
CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  conversation_id INT NOT NULL,
  user_id INT NOT NULL,
  content TEXT NOT NULL,
  file_data LONGBLOB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (conversation_id) REFERENCES conversations(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Posts table
CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  content TEXT NOT NULL,
  image LONGBLOB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Likes table
CREATE TABLE likes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Comments table
CREATE TABLE comments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Ads table
CREATE TABLE ads (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  image LONGBLOB,
  content TEXT NOT NULL,
  keywords VARCHAR(255) NOT NULL, -- New column for keywords
  link VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Ad clicks table
CREATE TABLE ad_clicks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ad_id INT NOT NULL,
  user_id INT NOT NULL,
  clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ad_id) REFERENCES ads(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE keywords (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ad_profile_id INT NOT NULL,
  word VARCHAR(255) NOT NULL,
  frequency INT,
  sentiment_score FLOAT,
  score FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (ad_profile_id) REFERENCES ad_profiles(id)
);

CREATE TABLE ad_profiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

DELIMITER //

CREATE TRIGGER update_conversation_updated_at 
AFTER INSERT ON messages
FOR EACH ROW
BEGIN
    UPDATE conversations
    SET updated_at = NOW()
    WHERE id = NEW.conversation_id;
END//

DELIMITER ;


INSERT INTO users (name, birthday, email, password, bio, profile_picture, created_at, updated_at)
VALUES 
('Andrei Stefan', '2003-02-12', 'stefan.andrei@example.com', 'password123', 'I am not lazy, I am just in energy-saving mode.', null, NOW(), NOW()),
('Will Smith', '1968-09-25', 'will.smith@example.com', 'password123', 'I am not a prince, I am a king!', null, NOW(), NOW()),
('Barbulescu Robert', '2002-07-24', 'barbulescu.robert@example.com', 'password123', 'I am not arguing, I am just passionately expressing my opinion.', null, NOW(), NOW()),
('Andrei Cristian', '1986-11-12', 'cristian.andrei@example.com', 'password123', 'I am not short, I am just concentrated awesome.', null, NOW(), NOW()),
('Bors Andrei', '2001-01-01', 'fraier.bors.andrei@example.com', 'password123', 'I am not a morning person, I am a coffee person.', null, NOW(), NOW()),
('Loser Davis', '2002-02-02', 'loser.davis@example.com', 'password123', 'I am not lazy, I am just on my energy-saving mode!', null, NOW(), NOW()),
('Thomas Edison', '2003-03-03', 'edison.thomas@example.com', 'password123', 'I am not a failure, I am just a work in progress.', null, NOW(), NOW()),
('Elon Musk', '2004-04-04', 'not.loved.by.father@example.com', 'password123', 'I am not a billionaire, I am just a visionary.', null, NOW(), NOW()),
('George Walker Bush', '2005-05-05', 'president123@example.com', 'password123', 'I am not a politician, I am just a public servant.', null, NOW(), NOW()),
('Bruce Wayne', '2006-06-06', 'not.batman@example.com', 'password123', 'I am not Batman, I am just his alter ego.', null, NOW(), NOW()),
('Christian Bale', '2007-07-07', 'sigma@example.com', 'password123', 'I am not an actor, I am just playing one on TV.', null, NOW(), NOW()),
('Adam West', '2008-08-08', 'east.adam@example.com', 'password123', 'I am not old, I am just retro.', null, NOW(), NOW()),
('Tom Holland', '2009-09-09', 'not.spiderman2@example.com', 'password123', 'I am not Spiderman, I am just his friendly neighborhood actor.', null, NOW(), NOW()),
('Andrew Garfield', '2010-10-10', 'not.spiderman1@example.com', 'password123', 'I am not Tobey Maguire, I am just another Spiderman actor.', null, NOW(), NOW()),
('Tobey Maguire', '2011-11-11', 'not.spiderman@example.com', 'password123', 'I am not the original Spiderman, I am just his predecessor.', null, NOW(), NOW()),
('Andrei Stefan Alexandru', '2012-12-12', 'stefan-alexandru.andrei@example.com', 'password123', '🤪😂 Just a kid living his best life!', null, NOW(), NOW()),
('Dwayne Johnson', '1972-05-02', 'hard.as.a.rock@example.com', 'password123', '💪🏽😎 Can you smell what The Rock is cooking?', null, NOW(), NOW()),
('Relu Colonelu', '2002-07-24', 'colonelu4@example.com', 'password123', '🕵️‍♂️🕵️‍♂️ Hey, I am Bob Johnson, or am I? 🤔', null, NOW(), NOW()),
('Andrew Tate', '1986-12-01', 'white.wife.beater@example.com', 'password123', '🥊😉 Dont mess with me, I am a kickboxing world champion!', null, NOW(), NOW()),
('Bors Marius', '2001-01-02', 'cum.sa.te.cheme.Bob.Marius@example.com', 'password123', '👋🏼😃 Greetings, I am David Lee, but you can call me Bob!', null, NOW(), NOW()),
('Michael De Santa', '1965-01-12', 'not.fictional@example.com', 'password123', '👨‍👦🌳 Just a regular guy with a not-so-regular life!', null, NOW(), NOW()),
('Timmy Turner', '1992-03-21', 'fifty.years.old@example.com', 'password123', '🤪😜 Hello there, I am Tom Wilson, forever young at heart!', null, NOW(), NOW()),
('IS 12 ASA', '2021-12-05', 'hotie@example.com', 'password123', '👶🏼🍼 Just a baby exploring the world!', null, NOW(), NOW()),
('Numarul De Mai Sus Este Furat', '2021-12-06', 'hotie1@example.com', 'password123', '🕵️‍♀️🔎 Detective by day, hacker by night!', null, NOW(), NOW()),
('Trebuia Sa Fie Al Meu', '2021-12-07', 'hotie2@example.com', 'password123', '😜😂 Life is too short to be serious all the time!', null, NOW(), NOW()),
('IS 21 ASA', '2021-12-08', 'hotie3@example.com', 'password123', '🎓📚 Just a student trying to figure it all out!', null, NOW(), NOW()),
('Aurora Elvira', '2001-05-14', 'nu.stiu.cine.e.asta@example.com', 'password123', '🤷‍♀️🤷‍♂️ Just two people trying to figure out who Aurora Elvira is...', null, NOW(), NOW()),
('Unlucky 2G', '1984-03-03', 'trick.forty.year.old@example.com', 'password123', '🎂👴🏼 Getting older but not necessarily wiser!', null, NOW(), NOW()),
('Tyler Two', '1995-03-07', 'tyler.one.wannabe@example.com', 'password123', 'I can beat Tyler1 whenever I want to!', null, NOW(), NOW()),
('Adin Not Ross', '2000-11-11', 'little.topG@example.com', 'password123', 'Bald and girlfriendless.', null, NOW(), NOW());

insert into users (name, email, password) values ('Gorgos Razvan', 'razvang@yahoo.com', 'razvan1234');
insert into users (name, email, password) values ('Hrebenciuc Alexandru', 'alexandruh@yahoo.com', 'alexandru1234');
insert into users (name, email, password) values ('Maftei Marius', 'mariusm@yahoo.com', 'marius1234');
insert into users (name, email, password) values ('Mihaita Andrei', 'andreim@yahoo.com', 'andrei1234');
insert into users (name, email, password) values ('Pascu Antonia', 'antoniap@yahoo.com', 'antonia1234');
insert into users (name, email, password) values ('Radu Alexandru', 'alexandrur@yahoo.com', 'radu1234');
insert into users (name, email, password) values ('Scutaru Iulian', 'iulians@yahoo.com', 'iulian1234');
insert into users (name, email, password) values ('Simionescu Teodor', 'teodors@yahoo.com', 'teodor1234');
insert into users (name, email, password) values ('Stoica Marian', 'marians@yahoo.com', 'marian1234');
insert into users (name, email, password) values ('Tanasa Radu', 'radut@yahoo.com', 'tanasa1234');
insert into users (name, email, password) values ('Tarcan Alexandru', 'alexandrut@yahoo.com', 'tarcan1234');
insert into users (name, email, password) values ('Turtureanu Cosmin', 'cosmint@yahoo.com', 'cosmin1234');
insert into users (name, email, password) values ('Ursan Otniel', 'otnielu@yahoo.com', 'otniel1234');




INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        11,
        'Durable Steel Bag',
        NULL,
        'Quidem labore et ut ut deserunt. Aspernatur a nobis reprehenderit vitae sunt dolores. Omnis aliquam voluptate eligendi. ',
        'quasi,repellat,et,quos,quia,ut,tempora',
        'https://bradtke-dach.io/movies/durable_steel_bag'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        6,
        'Awesome Bronze Knife',
        NULL,
        'Nisi esse enim similique aspernatur. Libero et dignissimos fuga quia. ',
        'eligendi,eos,architecto,dolor,assumenda,fugit',
        'https://stromangroup.co/automotivebeauty_music/awesome_bronze_knife'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        10,
        'Enormous Wooden Watch',
        NULL,
        'Sit sed impedit doloremque consequatur cumque voluptatem aliquam. Eligendi nulla at commodi. Quia aut et vel commodi. ',
        'perferendis,atque,labore,reiciendis,eligendi,voluptate,id,ullam,dolorem',
        'https://denesik-beatty.io/music/enormous_wooden_watch'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        5,
        'Small Iron Bag',
        NULL,
        'Sequi sint a voluptatum. Placeat officiis molestiae perspiciatis illum officia. ',
        'corrupti,vel,provident,laborum,possimus,a,facere,dolorem',
        'https://nikolaus-cruickshank.com/beauty_computers/small_iron_bag'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        5,
        'Fantastic Bronze Bottle',
        NULL,
        'Est ut blanditiis facere. Eos culpa quis quis. Perspiciatis praesentium repudiandae inventore tempore blanditiis sed. ',
        'blanditiis,eveniet,temporibus,dolorem,qui,ut,aut,numquam,magnam,cumque',
        'https://hegmannprosaccoandmann.com/gardenhome_movies/fantastic_bronze_bottle'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        3,
        'Ergonomic Rubber Shoes',
        NULL,
        'Mollitia porro optio error ut rerum. Animi tempore aliquid molestiae. Hic aperiam sit voluptatem. ',
        'officiis,nihil,sed,officia,velit,quam,facilis,dolorem,sit,pariatur,est,qui,quia,dolore',
        'https://dickiinc.co/jewelry/ergonomic_rubber_shoes'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        10,
        'Aerodynamic Bronze Car',
        NULL,
        'Ut quibusdam ab ut pariatur ipsam dolor. Unde mollitia et rem vero quibusdam quibusdam explicabo. ',
        'facere,commodi,quasi,consequatur,aut,rerum,tempore,doloribus',
        'https://hageneskilbackandortiz.info/baby_movies/aerodynamic_bronze_car'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        5,
        'Fantastic Paper Pants',
        NULL,
        'Adipisci iure adipisci aut voluptas provident qui. ',
        'aliquam,aut,inventore,ab,consequuntur,optio,maiores,dolorem,ipsum,in,deserunt,veniam',
        'https://medhurstllc.io/baby_beauty/fantastic_paper_pants'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        11,
        'Intelligent Aluminum Knife',
        NULL,
        'Rem officia expedita odit atque. Magnam voluptatem sed voluptatem. ',
        'non,voluptatem,saepe,eligendi,soluta',
        'https://larson-carter.biz/industrialmovies_shoes/intelligent_aluminum_knife'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        6,
        'Mediocre Aluminum Shirt',
        NULL,
        'Alias explicabo soluta impedit ut ut est. ',
        'placeat,est,eaque,quam,necessitatibus,rerum,voluptatem,sed,doloribus,dicta,dolores,quia,quasi,commodi',
        'https://hermanhaagandrowe.com/clothingcomputers_health/mediocre_aluminum_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Gorgeous Leather Coat',
        NULL,
        'Et sapiente et atque odio error iusto et. ',
        'temporibus,labore,officiis,quisquam,voluptatem,et,tempora,sed,quos,commodi,quia,dolores,molestias',
        'https://stark-haag.com/computers/gorgeous_leather_coat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        6,
        'Mediocre Bronze Coat',
        NULL,
        'Consequatur quod et eum est. Dolorem expedita quo corporis nihil nihil similique. ',
        'sapiente,ut,distinctio,molestiae,nesciunt,voluptatibus,earum,numquam',
        'https://kassulkekeeblerandcruickshank.info/garden_home/mediocre_bronze_coat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        11,
        'Awesome Silk Plate',
        NULL,
        'Sint doloremque eum. ',
        'eligendi,labore,esse,eos,eum,eum,est,et,quae,odio',
        'https://stiedemann-kilback.co/computers/awesome_silk_plate'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        4,
        'Incredible Bronze Bottle',
        NULL,
        'Necessitatibus iure mollitia. Ut saepe quae voluptatibus expedita. Commodi explicabo omnis sequi quia est eos. ',
        'numquam,laudantium,omnis,omnis,veritatis,temporibus,minima,sed,rem',
        'https://ricellc.biz/health/incredible_bronze_bottle'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Small Paper Car',
        NULL,
        'Rerum dolorem sunt voluptatum rerum. ',
        'laboriosam,laboriosam,et,adipisci,esse,occaecati,accusantium,et,aspernatur,id,quibusdam',
        'https://botsford-dibbert.com/clothinggrocery_toys/small_paper_car'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        3,
        'Enormous Silk Lamp',
        NULL,
        'Nemo et voluptas. ',
        'maxime,et,est,et,quia,voluptas,voluptas,blanditiis,est',
        'https://stroman-jakubowski.org/clothingindustrial_kids/enormous_silk_lamp'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        6,
        'Rustic Copper Chair',
        NULL,
        'Labore nemo vitae eum. Ea rerum et dolorum eum voluptatem. ',
        'temporibus,officia,dolorum,quae,officia,et,cumque,eius,maiores,beatae,sint',
        'https://dickinsongroup.com/health_outdoors/rustic_copper_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        1,
        'Mediocre Bronze Hat',
        NULL,
        'Pariatur quia reprehenderit quos cumque magnam aut consequatur. Quidem in temporibus sunt quos nihil officiis velit. Magnam voluptas alias sed odio. ',
        'laudantium,omnis,aut,impedit,rem,voluptatum,id,laudantium',
        'https://mayertgroup.name/shoes/mediocre_bronze_hat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        12,
        'Enormous Paper Hat',
        NULL,
        'Tenetur quo sed. ',
        'tempore,ipsam,expedita,voluptatem,ex,sunt,nemo,voluptatem,et,nesciunt,ea,totam',
        'https://jerde-schroeder.biz/baby/enormous_paper_hat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        8,
        'Ergonomic Concrete Lamp',
        NULL,
        'Tenetur non totam in quia odit. ',
        'et,velit,odit,ipsa,doloribus,qui,possimus',
        'https://walker-bosco.net/computers/ergonomic_concrete_lamp'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        2,
        'Incredible Copper Keyboard',
        NULL,
        'Omnis veniam quod fuga qui sit voluptatem illum. Voluptatem dolorem ut debitis porro. Alias magnam molestiae magnam nobis. ',
        'voluptatem,nobis,officiis,autem,totam,impedit,saepe,omnis,a,inventore,ea',
        'https://rueckerinc.io/clothinggames_grocery/incredible_copper_keyboard'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        1,
        'Fantastic Granite Shoes',
        NULL,
        'Inventore nulla aut aliquid sapiente beatae. Officiis voluptate dolorem. Delectus officia aliquam nesciunt minima cum perferendis est. ',
        'rem,laborum,cumque,cupiditate,nam,possimus,ut,sit,suscipit,excepturi',
        'https://runteoconnerandharvey.io/jewelry/fantastic_granite_shoes'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Sleek Wool Chair',
        NULL,
        'Qui et assumenda vel. Ipsam sint sed natus omnis. ',
        'neque,sint,ut,esse,pariatur,tenetur,delectus,ex,veniam,voluptas,fugiat',
        'https://faheyinc.io/music/sleek_wool_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        8,
        'Heavy Duty Plastic Bag',
        NULL,
        'Repellat voluptatum commodi sit. ',
        'animi,ipsam,laudantium,omnis,deserunt,culpa,reprehenderit,culpa,sed',
        'https://swiftdibbertandconsidine.org/garden/heavy_duty_plastic_bag'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        10,
        'Rustic Wooden Plate',
        NULL,
        'Cumque magni perspiciatis omnis ducimus molestias. Iste sapiente nihil modi assumenda. Non laboriosam eos dolores quia ab et ex. ',
        'dolores,aut,temporibus,eligendi,dolorem,ipsam',
        'https://kessler-keebler.org/grocery/rustic_wooden_plate'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        1,
        'Practical Silk Bag',
        NULL,
        'Aliquid exercitationem numquam quo vero vero aut sint. Ut tempore minima. Necessitatibus eligendi aut quasi facere aut. ',
        'et,ab,voluptatem,est,nostrum,aliquam,facere',
        'https://hackettinc.co/clothing_garden/practical_silk_bag'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        3,
        'Intelligent Concrete Computer',
        NULL,
        'Optio tenetur provident explicabo voluptatem. Architecto autem ut occaecati. ',
        'consequuntur,eos,fugiat,optio,et',
        'https://stark-pfeffer.net/beautyjewelry_outdoors/intelligent_concrete_computer'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Sleek Marble Clock',
        NULL,
        'Expedita rem quibusdam rerum maxime temporibus qui. Deleniti nemo perspiciatis accusantium ullam neque. Officiis cum ut praesentium sint rerum voluptatum dolores. ',
        'aut,ut,blanditiis,est,aut,nihil,quis,corrupti,quia,minima,voluptatem,quia,in,et',
        'https://sanfordinc.org/babygames_toys/sleek_marble_clock'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        8,
        'Awesome Granite Chair',
        NULL,
        'Incidunt eius et quo. Rerum est unde praesentium earum blanditiis. ',
        'ea,odit,dolore,quibusdam,cum,error,non',
        'https://herzogandsons.io/bookselectronics_kids/awesome_granite_chair'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        11,
        'Practical Wooden Shirt',
        NULL,
        'Eum magni amet. Deserunt facilis officiis voluptatem et. ',
        'ab,et,est,qui,provident,ducimus,ullam,similique',
        'https://naderandsons.biz/books/practical_wooden_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Ergonomic Rubber Bench',
        NULL,
        'Possimus neque aut assumenda veniam dicta est. Adipisci totam delectus similique aut quia. ',
        'blanditiis,et,commodi,omnis,accusantium,rem,quae,dolorem,deserunt,doloremque,fugit',
        'https://okeefebaileyandkoss.biz/movies/ergonomic_rubber_bench'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        2,
        'Intelligent Marble Bottle',
        NULL,
        'Quaerat non dicta nihil officiis perferendis. Ex excepturi rerum. Non magni illum consequatur eum qui totam rerum. ',
        'voluptas,natus,autem,dolore,aut,eos,temporibus,rem,debitis,aut,rerum,non,ut',
        'https://brakus-zemlak.info/toys/intelligent_marble_bottle'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        13,
        'Synergistic Steel Table',
        NULL,
        'Voluptatem aut facilis est cum voluptates aut aut. ',
        'sed,id,aliquid,impedit,sed,enim,quaerat,neque,tenetur',
        'https://zboncakandsons.io/baby/synergistic_steel_table'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        10,
        'Enormous Rubber Knife',
        NULL,
        'Non facilis est nulla fuga placeat. Nisi omnis optio suscipit nihil non voluptatem velit. Facere sint maxime commodi vel omnis. ',
        'id,exercitationem,harum,voluptate,molestias,nihil,officiis,voluptates,a,voluptates,illo,ea,architecto',
        'https://naderbotsfordandemmerich.info/movies/enormous_rubber_knife'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Mediocre Cotton Bag',
        NULL,
        'Quasi unde laudantium officiis quaerat corrupti quo. Fugiat tenetur sed ut et ipsa saepe et. Enim repellendus dolore dignissimos expedita rerum est. ',
        'deserunt,aperiam,ut,et,ducimus,iure',
        'https://schneidermayertandwehner.name/games_garden/mediocre_cotton_bag'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        1,
        'Incredible Concrete Gloves',
        NULL,
        'Consequatur et quidem id autem. Fugiat enim mollitia eligendi optio facilis. Reiciendis voluptatem quia nulla. ',
        'sed,debitis,eos,ratione,aperiam,qui,ratione,aut,esse,ipsa,quam,minima,dolorem',
        'https://danielgroup.biz/outdoors/incredible_concrete_gloves'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        1,
        'Rustic Plastic Bag',
        NULL,
        'Praesentium mollitia qui quos. ',
        'ad,corporis,quidem,eaque,similique,ut,quam,rerum,voluptatem,qui,accusantium,maxime',
        'https://quitzonokeefeandhowe.biz/kids/rustic_plastic_bag'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        12,
        'Aerodynamic Aluminum Lamp',
        NULL,
        'Omnis quis excepturi similique qui accusamus fugit. Ullam beatae quia quia. ',
        'iste,sequi,vel,nulla,quam,aperiam,error,quas,ea,consequuntur,et,molestiae,quis,asperiores',
        'https://casperbrakusandcruickshank.net/clothinghome_tools/aerodynamic_aluminum_lamp'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        5,
        'Gorgeous Linen Pants',
        NULL,
        'Voluptatum sit minus amet eius at quam est. Possimus repellat libero ullam. ',
        'tempore,ut,aut,impedit,rerum,in,corporis,qui',
        'https://bartell-towne.co/jewelry/gorgeous_linen_pants'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Lightweight Linen Gloves',
        NULL,
        'Nam modi et voluptas. Rerum corrupti harum. Et amet eligendi autem numquam esse quia nihil. ',
        'praesentium,provident,molestias,inventore,consequatur,in,consequuntur',
        'https://veum-koepp.io/beautygarden_health/lightweight_linen_gloves'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        6,
        'Fantastic Linen Table',
        NULL,
        'Dolorem dolores debitis. ',
        'cum,in,est,sint,ut,recusandae,quo',
        'https://littelandsons.io/beauty/fantastic_linen_table'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        10,
        'Rustic Silk Shirt',
        NULL,
        'Quia aliquam ipsa. Deserunt qui et qui consequatur explicabo ut. ',
        'molestiae,consequuntur,accusantium,quia,sit,nisi,cumque,fugit,sed,rerum,quasi,accusamus,sed,placeat',
        'https://creminllc.io/jewelry_sports/rustic_silk_shirt'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        2,
        'Lightweight Wooden Coat',
        NULL,
        'Sit ipsum et ipsum. Quos omnis neque sed quos cumque. Et a debitis ipsum. ',
        'asperiores,occaecati,autem,earum,quis,sapiente,expedita,rem,consectetur,sed,quos',
        'https://armstrongandsons.org/sports/lightweight_wooden_coat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        6,
        'Mediocre Steel Watch',
        NULL,
        'Illum animi ratione quas. Cum quidem commodi ut fugiat cum sed soluta. ',
        'omnis,et,ipsum,est,nemo,consequatur,et,fuga',
        'https://schulist-herman.info/tools/mediocre_steel_watch'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        7,
        'Fantastic Leather Hat',
        NULL,
        'Dignissimos nisi animi recusandae enim inventore. Odit ipsum in vel placeat vitae blanditiis. Dolor ut assumenda excepturi deleniti. ',
        'est,quia,totam,animi,sit,qui,cumque,nihil,sint,commodi',
        'https://veumllc.info/clothing_games/fantastic_leather_hat'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        9,
        'Aerodynamic Granite Clock',
        NULL,
        'Non tempora deleniti corporis nobis eos dolores sed. Quas sunt optio sint quibusdam. Eum eius nobis voluptas ut. ',
        'unde,est,vitae,ab,quisquam,nihil,ullam,eum,sapiente',
        'https://fritschandsons.co/electronics_music/aerodynamic_granite_clock'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        3,
        'Heavy Duty Plastic Pants',
        NULL,
        'Voluptatem suscipit velit nihil. Deleniti tenetur eos saepe libero voluptas. Id voluptatem voluptas perferendis nisi hic est. ',
        'aperiam,laboriosam,deleniti,ut,et,reprehenderit,debitis,facilis,et',
        'https://boehm-mills.name/industrial/heavy_duty_plastic_pants'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        11,
        'Enormous Paper Keyboard',
        NULL,
        'Ut ut eveniet earum. ',
        'ut,praesentium,asperiores,assumenda,voluptatibus,eveniet,eveniet,eius,error,et,ut,nulla,culpa,sit',
        'https://donnelly-mcclure.biz/clothing/enormous_paper_keyboard'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        9,
        'Gorgeous Cotton Pants',
        NULL,
        'Eius enim nobis assumenda aut. Id labore sequi sit cumque blanditiis. ',
        'quia,repudiandae,qui,hic,eos,deleniti,impedit,facilis,amet,aut,non,impedit',
        'https://maggio-ziemann.net/kids/gorgeous_cotton_pants'
    );
INSERT INTO ads (user_id, title, image, content, keywords, link)
VALUES (
        13,
        'Synergistic Rubber Pants',
        NULL,
        'Voluptatibus sapiente aut eligendi repudiandae quis laborum. Illo vel expedita at. ',
        'assumenda,aliquid,quibusdam,voluptas,est',
        'https://pouros-waters.co/games/synergistic_rubber_pants'
    );