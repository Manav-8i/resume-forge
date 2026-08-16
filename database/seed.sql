USE Manav;

INSERT INTO templates (id, title, category, badge, image_url) VALUES
(1, 'Modern', 'For tech & creative roles', 'Most Popular', '../images/1.jpeg'),
(2, 'Professional', 'For corporate & finance roles', 'Classic', '../images/2.jpeg'),
(3, 'Simple', 'For students & fresh graduates', 'Minimal', '../images/3.jpeg');

-- Password for sample user is: Password123
INSERT INTO users (id, name, email, password) VALUES
(1, 'Mohit Kumar', 'mohit@example.com', '$2a$10$w8W0WqR5FqTqRzZ.0u6Wz.xJg3jLpB5Z7lF6s.0k4J7w8W0WqR5Fq');

INSERT INTO documents (id, user_id, template_id, title, content) VALUES
(1, 1, 1, 'My Resume', '{"summary": "Experienced Full-Stack Software Engineer."}'),
(2, 1, 2, 'Software Developer Resume', '{"summary": "Backend specialist with Node.js and SQL."}');

INSERT INTO applications (id, user_id, company, position, status, applied_date) VALUES
(1, 1, 'Google', 'Frontend Developer', 'Interview', '2026-08-10'),
(2, 1, 'Microsoft', 'Web Developer', 'Pending', '2026-08-08'),
(3, 1, 'Adobe', 'UI Designer', 'Rejected', '2026-08-05');

INSERT INTO exports (id, user_id, document_id, file_name, file_format, exported_at) VALUES
(1, 1, 1, 'My Resume.pdf', 'PDF', '2026-08-15 10:00:00'),
(2, 1, 2, 'Software Developer Resume.pdf', 'PDF', '2026-08-12 14:30:00');