create database if not exists faceaids;

create table if not exists faceaids.user  (
	id integer unsigned AUTO_INCREMENT PRIMARY KEY,
	username varchar(255)  not null,
	firstname varchar(255)  not null,
	lastname varchar(255)  not null,
	chapter_id integer unsigned  not null,
	last_login timestamp default CURRENT_TIMESTAMP,
	password varchar(255) not null,
	school varchar(255) not null,
	year int(4) not null,
	active tinyint(1) default 0
);

create table if not exists faceaids.chapter (
	id integer unsigned AUTO_INCREMENT PRIMARY KEY,
	leader_id integer unsigned  not null,
	chapter_name varchar(255) not null,
	school varchar(255)  not null,
 	description varchar(255)  not null,
	additional_info varchar(255) not null,
	active tinyint(1) default 0
);

alter table faceaids.user add foreign key (chapter_id) references faceaids.chapter(id);
alter table faceaids.chapter add foreign key (leader_id) references faceaids.user(id);

create table if not exists faceaids.chapter_member (
	id integer unsigned AUTO_INCREMENT PRIMARY KEY,
	user_id integer unsigned not null,
	chapter_id integer unsigned not null,
	foreign key (user_id) references faceaids.user(id),
	foreign key (chapter_id) references faceaids.chapter(id),
	UNIQUE (user_id, chapter_id)
);