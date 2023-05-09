-- INSERT statements for the ads table
INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (1, 'Limited Time Offer!', null, 'Get 50% off all products for a limited time only!', 'sale, discount, limited time offer', 'https://example.com/limited-time-offer', 'New York', 'active');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (2, 'Summer Collection Launch!', null, 'Introducing our latest summer collection!', 'summer, new collection, fashion', 'https://example.com/summer-collection', 'Los Angeles', 'active');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (3, 'Now Hiring: Marketing Manager', null, 'Join our team as a Marketing Manager!', 'hiring, job, career, marketing', 'https://example.com/careers/marketing-manager', 'San Francisco', 'inactive');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (4, 'Flash Sale!', null, 'Get 40% off all products for the next 24 hours only!', 'sale, discount, flash sale', 'https://example.com/flash-sale', 'Chicago', 'active');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (5, 'New Arrival!', null, 'Check out our latest product!', 'new product, gadget', 'https://example.com/new-arrival', 'Miami', 'active');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (6, 'Join our loyalty program and earn rewards!', null, 'Join our loyalty program and earn rewards on every purchase!', 'loyalty program, rewards, discount', 'https://example.com/loyalty-program', 'Houston', 'active');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (7, 'Back to School Sale!', null, 'Get 30% off all products for back to school!', 'sale, discount, back to school', 'https://example.com/back-to-school-sale', 'Boston', 'active');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (8, 'Limited Edition Product!', null, 'Introducing our limited edition product!', 'limited edition, new product', 'https://example.com/limited-edition-product', 'Seattle', 'active');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (9, 'Holiday Sale!', null, 'Get 25% off all products for the holiday season!', 'sale, discount, holiday', 'https://example.com/holiday-sale', 'Atlanta', 'active');

INSERT INTO ads (user_id, title, image, content, keywords, link, location, status)
VALUES (10, 'New Year, New You!', null, 'Get in shape this year with our fitness products!', 'fitness, new year, new you', 'https://example.com/new-year-new-you', 'San Diego', 'active');


-- INSERT statements for the ad_clicks table
INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (1, 1, '2023-05-08 12:30:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (2, 2, '2023-05-08 13:15:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (3, 3, '2023-05-08 14:00:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (4, 4, '2023-05-08 14:45:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (5, 5, '2023-05-08 15:30:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (6, 6, '2023-05-08 16:15:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (7, 7, '2023-05-08 17:00:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (8, 8, '2023-05-08 17:45:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (9, 9, '2023-05-08 18:30:00', 1);

INSERT INTO ad_clicks (ad_id, user_id, clicked_at, clicks_count)
VALUES (10, 10, '2023-05-08 19:15:00', 1);
