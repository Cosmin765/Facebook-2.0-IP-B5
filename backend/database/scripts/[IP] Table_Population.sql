-- Adding mock data to the users table
INSERT INTO users (first_name, last_name, birthday, email, password, bio, profile_picture, cover_picture, is_logged_in)
VALUES 
("John", "Doe", "1990-05-01", "john.doe@example.com", "password", "I'm a professional procrastinator and a part-time ninja.", NULL, NULL, FALSE),
("Jane", "Doe", "1992-09-12", "jane.doe@example.com", "password", "I'm a cat person who is secretly in love with dogs.", NULL, NULL, FALSE),
("Bob", "Smith", "1985-12-24", "bob.smith@example.com", "password", "I like to watch the sunset while sipping coffee and listening to jazz.", NULL, NULL, FALSE),
("Alice", "Jones", "1998-07-17", "alice.jones@example.com", "password", "I'm a bookworm who dreams of becoming a mermaid.", NULL, NULL, FALSE),
("Mike", "Johnson", "1995-02-28", "mike.johnson@example.com", "password", "I'm a professional video gamer who loves to eat pizza.", NULL, NULL, FALSE),
("Emily", "Davis", "1989-10-06", "emily.davis@example.com", "password", "I love to dance in the rain and make funny faces in the mirror.", NULL, NULL, FALSE),
("David", "Wilson", "1976-03-15", "david.wilson@example.com", "password", "I'm a superhero who fights crime in my dreams.", NULL, NULL, FALSE),
("Sarah", "Clark", "1991-11-23", "sarah.clark@example.com", "password", "I'm a master chef who specializes in burnt toast.", NULL, NULL, FALSE),
("Adam", "Brown", "1983-06-12", "adam.brown@example.com", "password", "I'm a professional couch potato who dreams of winning a marathon.", NULL, NULL, FALSE),
("Olivia", "Wilson", "1996-08-29", "olivia.wilson@example.com", "password", "I'm a travel enthusiast who is afraid of flying.", NULL, NULL, FALSE);


-- Adding mock data to the friendships table
INSERT INTO friendships (user_id1, user_id2)
VALUES
(1, 6),
(6, 1),
(1, 3),
(3, 1),
(1, 4),
(4, 1),
(2, 3),
(3, 2),
(6, 7),
(7, 6),
(5, 3),
(3, 5),
(8, 9),
(9, 8),
(5, 1),
(1, 5),
(2, 4),
(4, 2);

-- Adding mock data to the friend_requests table
INSERT INTO friend_requests (sender_id, receiver_id, status)
VALUES
(1, 6, 'accepted'),
(1, 3, 'accepted'),
(1, 4, 'accepted'),
(2, 3, 'accepted'),
(7, 6, 'accepted'),
(3, 6, 'rejected'),
(3, 5, 'accepted'),
(8, 9, 'accepted'),
(5, 1, 'accepted'),
(2, 4, 'accepted'),
(1, 9, 'rejected'),
(4, 5, 'pending'),
(9, 4, 'pending'),
(8, 4, 'rejected'),
(6, 2, 'pending'),
(2, 4, 'pending'),
(10, 2, 'rejected');

INSERT INTO conversations (created_at, updated_at) 
VALUES 
(NOW(), NOW()),
(NOW(), NOW()),
(NOW(), NOW()),
(NOW(), NOW()),
(NOW(), NOW()),
(NOW(), NOW()),
(NOW(), NOW()),
(NOW(), NOW()),
(NOW(), NOW()),
(NOW(), NOW());

-- Adding mock data to the conversation_users table
INSERT INTO conversation_users (conversation_id, user_id)
VALUES 
(1, 2),
(2, 3),
(3, 4),
(4, 6),
(5, 7),
(6, 5),
(8, 9),
(9, 10),
(7, 8),
(10, 1);

-- Adding mock data to the messages table
INSERT INTO messages (conversation_id, user_id, content)
VALUES 
(1, 1, 'Hello'),
(1, 2, 'Hi there'),
(2, 3, 'How are you?'),
(2, 2, 'I am good, thanks!'),
(3, 4, 'What are you up to?'),
(3, 6, 'Just watching TV'),
(4, 6, 'Want to hang out later?'),
(4, 4, 'Sure, what do you want to do?'),
(5, 5, 'Hey, do you want to grab lunch?'),
(5, 3, 'Yeah, sure! Where do you want to go?'),
(6, 7, 'Did you finish that project?'),
(6, 5, 'Not yet, I still have some work to do'),
(7, 8, 'Are you going to the party tonight?'),
(7, 9, 'Yeah, I will  be there. Are you coming?'),
(8, 1, 'Can you help me with this homework assignment?'),
(8, 9, 'Sure, when do you need it done by?'),
(9, 10, 'I heard you got a new job! Congratulations!'),
(9, 8, 'Thank you! I start next week.'),
(10, 1, 'I need advice. What do you think about buying a new car?'),
(10, 2, 'It depends on what you want to use it for and how much you are willing to spend.'),
(10, 1, 'Good point. Thanks for the advice.');

-- Adding mock data to the posts table
INSERT INTO posts (user_id, content, ad_location, ad_status)
VALUES
(4, 'I am selling my used car, it is in good condition. Contact me if interested.', 'Los Angeles', 'active'),
(5, 'I am looking for a roommate to share a two-bedroom apartment. The apartment is located downtown and rent includes all utilities.', 'Chicago', 'active'),
(2, 'I am a freelance web designer with 5 years of experience. If you need a website for your business, feel free to contact me.', 'San Francisco', 'active'),
(1, 'I am selling a new iPhone XS. It is still in the box and never been used. Contact me for details.', 'New York', 'active'),
(7, 'I am offering guitar lessons to beginners. I have 10 years of experience playing guitar and can teach a variety of styles.', 'Seattle', 'active'),
(6, 'I am looking for someone to take care of my cat while I am away on vacation. The cat is very friendly and easy to take care of.', 'Boston', 'inactive'),
(3, 'I am a personal trainer with a degree in exercise science. If you need help reaching your fitness goals, contact me.', 'Los Angeles', 'active'),
(9, 'I am selling my old computer. It is in good condition and comes with a monitor, keyboard, and mouse.', 'San Francisco', 'inactive'),
(10, 'I am a chef with over 15 years of experience. If you need catering for a party or event, contact me.', 'New York', 'active'),
(8, 'I am looking for a job in the field of marketing. I have a degree in marketing and 2 years of experience in social media marketing.', 'Chicago', 'inactive');

INSERT INTO likes (post_id, user_id)
VALUES 
(1, 3),
(2, 4),
(1, 5),
(2, 6),
(1, 7),
(2, 8),
(1, 9),
(2, 10),
(1, 1),
(3, 5),
(7, 6),
(9, 7),
(4, 8),
(8, 9),
(2, 2);

-- Adding mock data to the comments table
INSERT INTO comments (post_id, user_id, content)
VALUES
(1, 3, 'I might be interested in your car. Can you tell me the make and model?'),
(5, 4, 'I am looking for a roommate too! Are you still searching?'),
(2, 3, 'Your web design portfolio looks impressive. I will definitely consider hiring you for my business.'),
(7, 5, 'I have always wanted to learn how to play guitar. Do you have any availability next week?'),
(8, 2, 'I work in marketing and might be able to help you find a job. Send me your resume if you are interested.'),
(4, 1, 'I am interested in buying your iPhone. Can you tell me the price?'),
(3, 5, 'I am looking for a personal trainer to help me lose weight. Can you tell me more about your training program?'),
(6, 2, 'I can take care of your cat while you are away. When are you leaving?'),
(10, 4, 'I am planning a party for a wedding and need catering for 50 guests. Can you provide a quote?'),
(9, 1, 'I might be interested in buying your computer. Can you tell me the specifications?');

-- Adding mock data to the comment_reports table
INSERT INTO comment_reports (comment_id, user_id)
VALUES 
(1, 1),
(3, 4),
(8, 3),
(6, 5),
(7, 1),
(8, 2),
(9, 4),
(10, 5),
(4, 3),
(2, 2);

-- Adding mock data to the notifications table
INSERT INTO notifications (user_id, message)
VALUES 
(1, 'You have a new friend request.'),
(2, 'You have a new message.'),
(3, 'Your post has been liked.'),
(4, 'Your comment has been reported.'),
(5, 'Your ad has been approved.'),
(1, 'Your ad has been clicked.'),
(2, 'You have a new follower.'),
(3, 'Your friend request has been accepted.'),
(4, 'Your ad has been rejected.'),
(5, 'Your post has been commented on.');