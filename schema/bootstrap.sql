
-- populating chapters
INSERT IGNORE INTO `chapter` (`chapter_name`, `school`, `description`, `additional_info`, `active`, `city`, `state`)
VALUES('dev team', 'school of rock', 'rahul and galen\'s chapter for development', 'None', 1, 'San Francisco', 'CA');

INSERT IGNORE INTO `chapter` (`chapter_name`, `school`, `description`, `additional_info`, `active`, `city`, `state`)
VALUES('faceaids leadership', 'international HQ', 'staff of the FACEAIDS national office', 'None', 1, 'San Francisco', 'CA');

INSERT IGNORE INTO `chapter` (`chapter_name`, `school`, `description`, `additional_info`, `active`, `city`, `state`)
VALUES('University of Wyoming', 'University of Wyoming', 'Riding Rodeo style!', 'None', 1, 'Cheyenne', 'WY');

INSERT IGNORE INTO `chapter` (`chapter_name`, `school`, `description`, `additional_info`, `active`, `city`, `state`)
VALUES('University of Texas', 'Universtity of Texas, Austin', 'Best student group on campus 6 years running!', 'None', 1, 'Austin', 'TX');



-- populating users
INSERT IGNORE INTO `user` (`username`, `firstname`, `lastname`, `chapter_id`, `last_login`, `password`, `school`, `year`, `active`)
VALUES('galengt', 'galen', 'thompson', (SELECT id from chapter where chapter_name like '%dev%'), '2012-03-21 20:55:18', 'password', 'stanford', 2005, 0);

INSERT IGNORE INTO `user` (`username`, `firstname`, `lastname`, `chapter_id`, `last_login`, `password`, `school`, `year`, `active`)
VALUES('churrizo', 'rahul', 'gidwani', (SELECT id from chapter where chapter_name like '%dev%'), '2012-03-21 20:55:18', 'password', 'ucla', 2003, 0);

INSERT IGNORE INTO `user` (`username`, `firstname`, `lastname`, `chapter_id`, `last_login`, `password`, `school`, `year`, `active`)
VALUES('jveroff', 'julie', 'veroff', (SELECT id from chapter where chapter_name like '%leadership%'), '2012-03-21 20:55:18', 'password', 'stanford', 2005, 0);


-- set some chapter leader ids
UPDATE chapter SET leader_id = (select id from user where firstname = 'julie' and lastname = 'veroff') where chapter_name like '%leadership%';

-- write rows to chapter_member
-- INSERT IGNORE INTO chapter_member (user_id, chapter_id) VALUES ((SELECT id FROM user), );