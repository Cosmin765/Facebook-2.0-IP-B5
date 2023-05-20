-- Added cascade on delete for data integrity on data modifications

-- Users table: separate name and last name columns, add logon and cover_picture columns

CREATE TABLE users (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       first_name VARCHAR(255) NOT NULL,
                       last_name VARCHAR(255) NOT NULL,
                       birthday DATE,
                       email VARCHAR(255) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL,
                       bio TEXT,
                       profile_picture LONGBLOB,
                       cover_picture LONGBLOB,
                       is_logged_in BOOLEAN DEFAULT FALSE,
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
                             FOREIGN KEY (user_id1) REFERENCES users(id) ON DELETE CASCADE,
                             FOREIGN KEY (user_id2) REFERENCES users(id) ON DELETE CASCADE
);

-- Friend Requests table
CREATE TABLE friend_requests (
                                 id INT PRIMARY KEY AUTO_INCREMENT,
                                 sender_id INT NOT NULL,
                                 receiver_id INT NOT NULL,
                                 status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
                                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                 FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
                                 FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE
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
                                    FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
                                    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
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
                          FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
                          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Posts table: add ad_location and status columns, allow multiple images

CREATE TABLE posts (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       user_id INT NOT NULL,
                       content TEXT NOT NULL,
                       ad_location VARCHAR(255),
                       ad_status VARCHAR(255),
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Post_images table for multiple images

CREATE TABLE post_images (
                             id INT PRIMARY KEY AUTO_INCREMENT,
                             post_id INT NOT NULL,
                             image_link VARCHAR(255) NOT NULL,
                             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                             updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                             FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

-- Likes table
CREATE TABLE likes (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       post_id INT NOT NULL,
                       user_id INT NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
                       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Comments table with reported column
CREATE TABLE comments (
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          post_id INT NOT NULL,
                          user_id INT NOT NULL,
                          content TEXT NOT NULL,
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                          FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
                          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Comment reports table
CREATE TABLE comment_reports (
                                 id INT PRIMARY KEY AUTO_INCREMENT,
                                 comment_id INT NOT NULL,
                                 user_id INT NOT NULL,
                                 reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                 FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE,
                                 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Ads table: add location and status columns
CREATE TABLE ads (
                     id INT PRIMARY KEY AUTO_INCREMENT,
                     user_id INT NOT NULL,
                     title VARCHAR(255) NOT NULL,
                     image LONGBLOB,
                     content TEXT NOT NULL,
                     keywords VARCHAR(255) NOT NULL,
                     link VARCHAR(255) NOT NULL,
                     location VARCHAR(255),
                     status VARCHAR(255),
                     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                     FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Ad clicks table: add clicks_count column
CREATE TABLE ad_clicks (
                           id INT PRIMARY KEY AUTO_INCREMENT,
                           ad_id INT NOT NULL,
                           user_id INT NOT NULL,
                           clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                           clicks_count INT DEFAULT 0,
                           FOREIGN KEY (ad_id) REFERENCES ads(id) ON DELETE CASCADE,
                           FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Notifications table
CREATE TABLE notifications (
                               id INT PRIMARY KEY AUTO_INCREMENT,
                               user_id INT NOT NULL,
                               message TEXT NOT NULL,
                               is_read BOOLEAN DEFAULT FALSE,
                               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                               FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Keywords table
CREATE TABLE keywords (
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          word VARCHAR(255) NOT NULL,
                          frequency INT,
                          sentiment_score FLOAT,
                          score FLOAT,
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Ad_profiles table
CREATE TABLE ad_profiles (
                             id INT PRIMARY KEY AUTO_INCREMENT,
                             user_id INT NOT NULL,
                             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                             updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                             FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- many-to-many relation between profile and keyword
CREATE TABLE keyword_to_profile (
                                    id INT PRIMARY KEY AUTO_INCREMENT,
                                    keyword_id INT NOT NULL,
                                    ad_profile_id INT NOT NULL,
                                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                    FOREIGN KEY (keyword_id) REFERENCES keywords(id) ON DELETE CASCADE,
                                    FOREIGN KEY (ad_profile_id) REFERENCES ad_profiles(id) ON DELETE CASCADE
);
