CREATE TABLE nodedb.people (
    id INT auto_increment NOT NULL,
    name varchar(255) NULL,
    CONSTRAINT people_PK PRIMARY KEY (id)
);
INSERT INTO nodedb.people (name)
VALUES ("Rafael"),
    ("Lucas"),
    ("Full Cycle"),
    ("Wesley"),
    ("Rodrigo");