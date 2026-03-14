CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Insert car-themed test data into the table
INSERT INTO posts (title, content) VALUES
('The Future of Electric Vehicles', 'Electric vehicles (EVs) are rapidly evolving, with new solid-state battery technologies promising significantly longer ranges and faster charging times.'),
('Classic Muscle Cars: A Retrospective', 'The late 1960s and early 1970s represented the golden era of American muscle cars, featuring iconic high-performance models like the Ford Mustang and Chevrolet Camaro.'),
('Essential Engine Maintenance', 'Regular oil changes, timely air filter replacements, and consistently checking coolant levels are crucial steps to ensure an internal combustion engine runs smoothly and efficiently.'),
('Aerodynamics in Modern Sports Cars', 'Contemporary sports car design relies heavily on wind tunnel testing to reduce drag and increase downforce, directly improving high-speed stability and cornering grip.');