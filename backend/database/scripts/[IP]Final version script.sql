-- Dropping all tables, if they exist
DROP TABLE IF EXISTS users, friendships, conversations, conversation_users, messages, message_files, posts, post_files, likes, comments, notifications, ads, ad_clicks, ad_profiles, keywords;

-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    birthday DATE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    bio TEXT DEFAULT NULL,
    profile_picture VARCHAR(1500) DEFAULT NULL,
    cover_picture VARCHAR(1500) DEFAULT NULL,
    banned BOOLEAN NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Friendships table (with status)
CREATE TABLE friendships (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id1 INT NOT NULL,
    user_id2 INT NOT NULL,
    request BOOLEAN NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id1)
        REFERENCES users (id),
    FOREIGN KEY (user_id2)
        REFERENCES users (id)
);

-- Conversations table
CREATE TABLE conversations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Users in conversations table (useful for group conversations)
CREATE TABLE conversation_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    conversation_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id)
        REFERENCES conversations (id),
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Messages table
CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    conversation_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id)
        REFERENCES conversations (id),
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Message_files table
CREATE TABLE message_files (
    id INT PRIMARY KEY AUTO_INCREMENT,
    message_id INT NOT NULL,
    file_content VARCHAR(1500),
    FOREIGN KEY (message_id)
        REFERENCES messages (id)
);

-- Posts table
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    user_status VARCHAR(255),
    user_location VARCHAR(500),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Post_files table
CREATE TABLE post_files (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    file_content VARCHAR(1500),
    FOREIGN KEY (post_id)
        REFERENCES posts (id)
);

-- Likes table
CREATE TABLE likes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id)
        REFERENCES posts (id),
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Comments table
CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    text_content TEXT NOT NULL,
    reported BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id)
        REFERENCES posts (id),
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Notifications table
CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    type VARCHAR(50) NOT NULL,
    text_content TEXT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Ads table
CREATE TABLE ads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(1500) DEFAULT NULL,
    text_content TEXT NOT NULL,
    keywords VARCHAR(1000) NOT NULL,
    file_content VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Ad clicks table
CREATE TABLE ad_clicks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ad_id INT NOT NULL,
    user_id INT NOT NULL,
    clicked_after INT DEFAULT NULL,
    FOREIGN KEY (ad_id)
        REFERENCES ads (id),
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Ad profiles table
CREATE TABLE ad_profiles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

-- Keywords table
CREATE TABLE keywords (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ad_profile_id INT NOT NULL,
    word VARCHAR(255) NOT NULL,
    frequency INT,
    sentiment_score FLOAT,
    score FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (ad_profile_id)
        REFERENCES ad_profiles (id)
);

-- Triggers
delimiter $
CREATE TRIGGER update_conversation_updated_at
AFTER
INSERT ON messages FOR EACH ROW BEGIN
UPDATE conversations
SET updated_at = NOW()
WHERE id = NEW.conversation_id;
END $
delimiter ;

-- Dummy data
INSERT INTO users (
        first_name,
        last_name,
        birthday,
        email,
        password,
        bio
    )
VALUES (
        'Stefan',
        'Andrei',
        '2003-02-12',
        'stefan.andrei@example.com',
        'password123',
        'I am not lazy, I am just in energy-saving mode.'
    ),
    (
        'Will',
        'Smith',
        '1968-09-25',
        'will.smith@example.com',
        'password123',
        'I am not a prince, I am a king!'
    ),
    (
        'Robert',
        'Barbulescu',
        '2002-07-24',
        'barbulescu.robert@example.com',
        'password123',
        'I am not arguing, I am just passionately expressing my opinion.'
    ),
    (
        'Cristian',
        'Andrei',
        '1986-11-12',
        'cristian.andrei@example.com',
        'password123',
        'I am not short, I am just concentrated awesome.'
    ),
    (
        'Bors',
        'Andrei',
        '2001-01-01',
        'fraier.bors.andrei@example.com',
        'password123',
        'I am not a morning person, I am a coffee person.'
    ),
    (
        'Loser',
        'Davis',
        '2002-02-02',
        'loser.davis@example.com',
        'password123',
        'I am not lazy, I am just on my energy-saving mode!'
    ),
    (
        'Thomas',
        'Edison',
        '2003-03-03',
        'edison.thomas@example.com',
        'password123',
        'I am not a failure, I am just a work in progress.'
    ),
    (
        'Elon',
        'Musk',
        '2004-04-04',
        'not.loved.by.father@example.com',
        'password123',
        'I am not a billionaire, I am just a visionary.'
    ),
    (
        'George Walker',
        'Bush',
        '2005-05-05',
        'president123@example.com',
        'password123',
        'I am not a politician, I am just a public servant.'
    ),
    (
        'Bruce',
        'Wayne',
        '2006-06-06',
        'not.batman@example.com',
        'password123',
        'I am not Batman, I am just his alter ego.'
    ),
    (
        'Christian',
        'Bale',
        '2007-07-07',
        'sigma@example.com',
        'password123',
        'I am not an actor, I am just playing one on TV.'
    ),
    (
        'Adam',
        'West',
        '2008-08-08',
        'east.adam@example.com',
        'password123',
        'I am not old, I am just retro.'
    ),
    (
        'Tom',
        'Holland',
        '2009-09-09',
        'not.spiderman2@example.com',
        'password123',
        'I am not Spiderman, I am just his friendly neighborhood actor.'
    ),
    (
        'Andrew',
        'Garfield',
        '2010-10-10',
        'not.spiderman1@example.com',
        'password123',
        'I am not Tobey Maguire, I am just another Spiderman actor.'
    ),
    (
        'Tobey',
        'Maguire',
        '2011-11-11',
        'not.spiderman@example.com',
        'password123',
        'I am not the original Spiderman, I am just his predecessor.'
    ),
    (
        'Andrei',
        'Stefan Alexandru',
        '2012-12-12',
        'stefan-alexandru.andrei@example.com',
        'password123',
        '🤪😂 Just a kid living his best life!'
    ),
    (
        'Dwayne',
        'Johnson',
        '1972-05-02',
        'hard.as.a.rock@example.com',
        'password123',
        '💪🏽😎 Can you smell what The Rock is cooking?'
    ),
    (
        'Relu',
        'Colonelu',
        '2002-07-24',
        'colonelu4@example.com',
        'password123',
        '🕵️‍♂️🕵️‍♂️ Hey, I am Bob Johnson, or am I? 🤔'
    ),
    (
        'Andrew',
        'Tate',
        '1986-12-01',
        'white.wife.beater@example.com',
        'password123',
        '🥊😉 Dont mess with me, I am a kickboxing world champion!'
    ),
    (
        'Bors',
        'Marius',
        '2001-01-02',
        'cum.sa.te.cheme.Bob.Marius@example.com',
        'password123',
        '👋🏼😃 Greetings, I am David Lee, but you can call me Bob!'
    ),
    (
        'Michael',
        'De Santa',
        '1965-01-12',
        'not.fictional@example.com',
        'password123',
        '👨‍👦🌳 Just a regular guy with a not-so-regular life!'
    ),
    (
        'Timmy',
        'Turner',
        '1992-03-21',
        'fifty.years.old@example.com',
        'password123',
        '🤪😜 Hello there, I am Tom Wilson, forever young at heart!'
    ),
    (
        'Aurora',
        'Elvira',
        '2001-05-14',
        'nu.stiu.cine.e.asta@example.com',
        'password123',
        '🤷‍♀️🤷‍♂️ Just two people trying to figure out who Aurora Elvira is...'
    ),
    (
        'Tyler',
        'Two',
        '1995-03-07',
        'tyler.one.wannabe@example.com',
        'password123',
        'I can beat Tyler1 whenever I want to!'
    ),
    (
        'Adin',
        'Not Ross',
        '1500-11-11',
        'little.topG@example.com',
        'password123',
        'Bald and girlfriendless.'
    );
    
INSERT INTO users (
		first_name,
        last_name,
        email,
        password)
VALUES (
        'Razvan',
        'Gorgos',
        'razvang@yahoo.com',
        'razvan1234'
    ),
    (
        'Alexandru',
        'Hrebenciuc',
        'alexandruh@yahoo.com',
        'alexandru1234'
    ),
    (
        'Marius',
        'Maftei',
        'mariusm@yahoo.com',
        'marius1234'
    ),
    (
        'Andrei',
        'Mihaita',
        'andreim@yahoo.com',
        'andrei1234'
    ),
    (
        'Antonia',
        'Pascu',
        'antoniap@yahoo.com',
        'antonia1234'
	),
    (
        'Alexandru',
        'Radu',
        'alexandrur@yahoo.com',
        'radu1234'
    ),
    (
        'Iulian',
        'Scutaru',
        'iulians@yahoo.com',
        'iulian1234'
    ),
    (
        'Teodor',
        'Simionescu',
        'teodors@yahoo.com',
        'teodor1234'
    ),
    (
        'Marian',
        'Stoica',
        'marians@yahoo.com',
        'marian1234'
    ),
    (
		'Radu',
        'Tanasa',
        'radut@yahoo.com',
        'tanasa1234'
	),
    (
        'Alexandru',
        'Tarcan',
        'alexandrut@yahoo.com',
        'tarcan1234'
    ),
    (
        'Cosmin',
        'Turtureanu',
        'cosmint@yahoo.com',
        'cosmin1234'
    ),
    (
        'Otniel',
        'Ursan',
        'otnielu@yahoo.com',
        'otniel1234'
    );
    
INSERT INTO ads (
		user_id,
        title,
        text_content,
        keywords)
VALUES (
        14,
        'GloBrite',
        'Illuminate your surroundings with GloBrite, a versatile LED lighting solution that creates a vibrant and colorful ambiance.',
        'lighting,colorful,vibrant,LED,versatile'
    ),
    (
        5,
        'AquaPure',
        'Enhance your workout experience with FlexiFit, a flexible and adjustable fitness accessory that provides maximum comfort and support during exercise.',
        'fitness,flexible,adjustable,comfort,support'
    ),
    (
        8,
        'ZenTranquil',
        'Achieve inner peace and tranquility with ZenTranquil, a mindfulness app that offers guided meditation sessions and relaxation techniques.',
        'mindfulness,meditation,tranquility,relaxation,app'
    ),
    (
        18,
        'AquaPure',
        'Stay hydrated and refreshed with AquaPure, a premium water filtration system that ensures pure and clean drinking water.',
        'hydration,water,pure,clean,filtration'
    ),
    (
        21,
        'PowerBoost',
        'Boost your energy levels and stay productive throughout the day with PowerBoost, a natural and energizing dietary supplement.',
        'energy,productivity,natural,dietary,supplement'
    ),
    (
        9,
        'TechGrip',
        'Keep your devices secure and protected with TechGrip, a durable and non-slip grip accessory for smartphones and tablets.',
        'technology,grip,secure,protection,smartphone'
    ),
    (
        2,
        'StyleSense',
        'Discover your unique fashion sense with StyleSense, a fashion app that provides personalized style recommendations and fashion inspiration.',
        'fashion,personalized,style,app,inspiration'
    ),
    (
        13,
        'CleanSweep',
        'Clean your home effortlessly with CleanSweep, a powerful and efficient robotic vacuum cleaner that ensures a spotless and tidy living space.',
        'cleaning,robotic,vacuum,cleaner,efficient'
    ),
    (
        10,
        'MindFocus',
        'Improve your concentration and mental clarity with MindFocus, a cognitive enhancement supplement that supports brain function.',
        'concentration,mental,clarity,cognitive,enhancement'
    ),
    (
        24,
        'PowerPulse',
        'Experience a rejuvenating massage with PowerPulse, a handheld massager that provides deep tissue relief and relaxation.',
        'massage,handheld,deep,tissue,relief'
    );