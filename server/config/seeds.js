const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {
      name: 'Cardio Equipment',
      image: 'cardio.jpg',
      quote: '"Let your heart race, let your soul catch up."'
    },
    {
      name: 'Strength Training',
      image: 'strength.jpg',
      quote: '"Build strength outside, build character inside."'
    },
    {
      name: 'Yoga',
      image: 'yoga.jpg',
      quote: '"Breathe deep, find peace and stretch beyond your limits."'
    },
    {
      name: 'Fitness Tech',
      image: 'tech.jpg',
      quote: '"Empower your fitness journey with the right tech."'
    },
    {
      name: 'Nutritional Supplements',
      image: 'supplements.jpg',
      quote: '"Boost your body, power your progress."'
    },
    {
      name: 'Boxing & Martial Arts',
      image: 'boxing.jpg',
      quote: '"Discipline, respect, and power - the martial way."'
    },
    {
      name: 'Fitness for Kids',
      image: 'kid.jpg',
      quote: '"Active kids today lead to a healthier tomorrow."'
    }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'TreadMill',
      description:
        'This treadmill offers a powerful motor, variable speed options, and a spacious running surface to help you achieve your fitness goals in the comfort of your home.',
      image: 'treadmill.png',
      category: categories[0]._id,
      price: 1299.99,
      quantity: 50
    },
    {
      name: 'Rowing Machine',
      description:
        'Designed to simulate the real-life rowing experience, it offers a full-body workout by seamlessly combining cardio and strength training, all while minimizing impact on your joints.',
      image: 'rowingmachine.jpg',
      category: categories[0]._id,
      price: 599.99,
      quantity: 50
    },
    {
      name: 'Stair Climber',
      category: categories[0]._id,
      description:
        'It provides a challenging yet low-impact cardio workout, targeting your legs and core while mimicking the natural movement of climbing stairs, all within the convenience of your own home.',
      image: 'stairclimber.jpg',
      price: 799.99,
      quantity: 20
    },
    {
      name: 'Elliptical Trainer',
      category: categories[0]._id,
      description:
        'Engineered for optimal cardio and lower body toning, it provides a smooth, joint-friendly motion that allows you to burn calories and build endurance without the harsh impact of traditional running.',
      image: 'ellipticaltrainer.jpg',
      price: 1099.99,
      quantity: 50
    },
    {
      name: 'Dumbbells',
      category: categories[1]._id,
      description:
        'Crafted for durability and versatility, our premium dumbbells provide an effective solution for targeted strength training, enhancing muscle tone, and improving overall fitness across a wide range of exercises.',
      image: 'dumbbells.jpg',
      price: 39.99,
      quantity: 50
    },
    {
      name: 'Barbells',
      category: categories[1]._id,
      description:
        'Our high-quality barbell is engineered for stability and durability, offering a versatile platform for heavy lifting and compound exercises that target multiple muscle groups for comprehensive strength training.',
      image: 'barbells.jpg',
      price: 39.99,
      quantity: 50
    },
    {
      name: 'Weight Plates',
      category: categories[1]._id,
      description:
        'Precision-crafted for balance and durability, our versatile weight plates offer a customizable resistance solution for both barbell and dumbbell exercises, enabling incremental strength gains and muscle development.',
      image: 'weight-plates.jpg',
      price: 59.99,
      quantity: 50
    },
    {
      name: 'Kettlebells',
      category: categories[1]._id,
      description:
        'Expertly designed for ergonomic grip and durability, our kettlebell is your go-to equipment for dynamic, full-body workouts that improve strength, flexibility, and coordination.',
      image: 'kettlebells.jpg',
      price: 59.99,
      quantity: 50
    },
    {
      name: 'Smith Machine',
      category: categories[1]._id,
      description:
        'Engineered for safety and versatility, our Smith Machine features a guided barbell system that allows for a wide range of strength training exercises while minimizing the risk of injury',
      image: 'smith-machine.jpg',
      price: 259.99,
      quantity: 50
    },
    {
      name: 'Yoga Mat',
      category: categories[2]._id,
      description:
        'Crafted for comfort and stability, our eco-friendly yoga mat provides a non-slip surface to enhance your practice, offering both cushioning and grip for a range of yoga poses and floor exercises.',
      image: 'yoga-mat.jpg',
      price: 29.99,
      quantity: 50
    },
    {
      name: 'Yoga Block',
      category: categories[2]._id,
      description:
        'Designed for support and alignment, our durable yoga block offers a versatile tool to deepen your practice, providing the extra height and stability needed for optimal posture in a variety of poses.',
      image: 'yoga-block.jpg',
      price: 29.99,
      quantity: 50
    },
    {
      name: 'Balance Ball',
      category: categories[2]._id,
      description:
        'Constructed for durability and stability, our versatile balance ball serves as an effective tool for improving core strength, posture, and overall body awareness through a wide range of exercises.',
      image: 'balance-ball.jpg',
      price: 19.99,
      quantity: 50
    },
    {
      name: 'Yoga Wheels',
      category: categories[2]._id,
      description:
        'Expertly designed for both comfort and durability, our yoga wheel is an essential prop for enhancing flexibility and backbends, providing both support and challenge to elevate your yoga practice.',
      image: 'yoga-wheel.jpg',
      price: 39.99,
      quantity: 50
    },
    {
      name: 'Fitness Tracker',
      category: categories[3]._id,
      description:
        'Engineered for all-day wearability, our advanced fitness tracker seamlessly monitors your heart rate, steps, sleep quality, and workout performance, empowering you to reach your health and fitness goals with real-time insights.',
      image: 'fitness-tracker.png',
      price: 259.99,
      quantity: 50
    },
    {
      name: 'Heart Rate Monitor',
      category: categories[3]._id,
      description:
        'Designed for accuracy and ease-of-use, our heart rate monitor provides real-time tracking of your cardiovascular performance, enabling you to optimize workout intensity and monitor overall heart health.',
      image: 'heart-monitor.jpg',
      price: 459.99,
      quantity: 50
    },
    {
      name: 'Smart Scale',
      category: categories[3]._id,
      description:
        'Equipped with advanced sensors and Bluetooth connectivity, our smart scale not only measures weight but also provides comprehensive data on body fat percentage, muscle mass, and other key metrics, all syncable to your smartphone for convenient tracking.',
      image: 'smart-scale.jpg',
      price: 99.99,
      quantity: 50
    },
    {
      name: 'GPS Running Watches',
      category: categories[3]._id,
      description:
        'Engineered for the dedicated runner, our GPS Running Watch offers precise distance tracking, pace monitoring, and route mapping, all while keeping you connected with smart notifications for calls, texts, and more.',
      image: 'gps-watch.png',
      price: 299.99,
      quantity: 50
    },
    {
      name: 'Protein Powders',
      category: categories[4]._id,
      description:
        'Formulated for optimal nutrient absorption, our high-quality protein powder supports muscle recovery and growth, making it the perfect post-workout supplement for athletes and fitness enthusiasts alike.',
      image: 'protein-powders.jpg',
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Pre-workout Supplements',
      category: categories[4]._id,
      description:
        'Expertly formulated to boost energy, focus, and endurance, our pre-workout supplement is designed to elevate your training sessions, ensuring you get the most out of every workout.',
      image: 'pre-workout.jpg',
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Post-workout Supplements',
      category: categories[4]._id,
      description:
        "Specifically formulated to speed up recovery and reduce muscle soreness, our post-workout supplement delivers essential nutrients that help you bounce back faster, ensuring you're ready for your next workout.",
      image: 'post-workout.png',
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Multivitamins',
      category: categories[4]._id,
      description:
        "Formulated to support overall well-being, our comprehensive multivitamins provide a balanced blend of essential nutrients that help bridge nutritional gaps, boost immune function, and promote optimal health.",
      image: 'multivitamins.jpg',
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Boxing Gloves',
      category: categories[5]._id,
      description:
        "Engineered for protection and performance, the gloves offer superior padding, wrist support, and durability for both training and competitive bouts, ensuring maximum safety and comfort.",
      image: 'boxing-gloves.jpg',
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Punching Bags',
      category: categories[5]._id,
      description:
        "Constructed for durability and effective training, our heavy-duty punching bags provide a reliable target for honing your striking skills, improving coordination, and enhancing cardiovascular fitness.",
      image: 'punching-bag.jpg',
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Shin Guards',
      category: categories[5]._id,
      description:
        "Designed for maximum protection and comfort, our lightweight yet durable shin guards offer essential coverage against impacts, enabling you to perform at your best in sports ranging from soccer to martial arts.",
      image: 'shin-guards.jpg',
      price: 49.99,
      quantity: 50
    },
    {
      name: 'Mouthguards',
      category: categories[5]._id,
      description:
        "Engineered for optimal comfort and protection, our high-quality mouthguard effectively absorbs impact, safeguarding your teeth and gums during high-contact sports and activities.",
      image: 'mouthguard.jpg',
      price: 39.99,
      quantity: 50
    },
    {
      name: 'Mini Trampolines',
      category: categories[6]._id,
      description:
        "Perfect for indoor fitness and fun, our mini trampoline offers a durable, bouncy surface for low-impact cardio exercises that improve balance, coordination, and overall health.",
      image: 'trampoline.jpg',
      price: 129.99,
      quantity: 50
    },
    {
      name: "Kids' Yoga Mats",
      category: categories[6]._id,
      description:
        "Crafted with child-friendly materials and featuring fun designs, our kids' yoga mats offer a safe, cushioned space for young yogis to explore movement, improve flexibility, and cultivate mindfulness.",
      image: 'kid-yoga.jpg',
      price: 69.99,
      quantity: 50
    },
    {
      name: "Small Dumbbells",
      category: categories[6]._id,
      description:
        "Perfect for home workouts and physical therapy, our compact dumbbells provide variable resistance for targeted muscle toning and improved endurance without taking up much space.",
      image: 'kid-dumbbell.jpg',
      price: 19.99,
      quantity: 50
    },
    {
      name: "Skipping Ropes",
      category: categories[6]._id,
      description:
        "Designed for speed and durability, our skipping ropes offer a versatile cardio workout that enhances agility, balance, and coordination, making them ideal for fitness enthusiasts of all levels.",
      image: 'jumping-rope.jpg',
      price: 29.99,
      quantity: 50
    },
    {
      name: 'Exercise Bike',
      category: categories[0]._id,

      description: 'A stationary bike allowing users to cycle indoors with adjustable resistance to cater to all fitness levels.',
      image: 'exercisebike.jpg',
      price: 599.99,
      quantity: 25
    },
    {
      name: 'Air Bike',
      category: categories[0]._id,
      description: 'Combines the features of a stationary bike with moving handles, increasing resistance as you pedal faster.',
      image: 'airbike.jpg',
      price: 699.99,
      quantity: 15
    },
    {
      name: 'Ski Trainer',
      category: categories[0]._id,
      description: 'Simulates the cross-country skiing motion, providing a full-body cardiovascular and strength workout.',
      image: 'skitrainer.jpg',
      price: 799.99,
      quantity: 20
    },
    {
      name: 'Jump Rope',
      category: categories[0]._id,
      description: 'A simple yet effective tool for a high-intensity cardio workout, promoting agility and endurance.',
      image: 'jumprope.jpg',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Step Mill',
      category: categories[0]._id,
      description: 'Mimics the action of climbing stairs in a revolving manner, great for targeting the legs and glutes.',
      image: 'stepmill.jpg',
      price: 1299.99,
      quantity: 10
    },
    {
      name: 'Arm Ergometer',
      category: categories[0]._id,
      description: 'Provides an upper body cardiovascular training, suitable for those seeking a seated workout or with limited lower body mobility.',
      image: 'armergometer.jpg',
      price: 549.99,
      quantity: 20
    },
    {
      name: 'Spin Bike',
      category: categories[0]._id,
      description: 'Designed for high-intensity cycle training with a heavy flywheel and resistance adjustments.',
      image: 'spinbike.jpg',
      price: 649.99,
      quantity: 15
    },
    {
      name: 'Recumbent Exercise Bike',
      category: categories[0]._id,
      description: 'Offers a seated cardio workout with back support, targeting the leg muscles without putting strain on the lower back.',
      image: 'recumbentbike.jpg',
      price: 699.99,
      quantity: 18
    },
    {
      name: 'Battle Ropes',
      category: categories[0]._id,
      description: 'Heavy ropes used for high-intensity interval training, engaging both the arms and core.',
      image: 'battleropes.jpg',
      price: 129.99,
      quantity: 30
    },
    {
      name: 'Plyo Box',
      category: categories[0]._id,
      description: 'A platform used for plyometric exercises such as box jumps, enhancing leg strength and cardiovascular endurance.',
      image: 'plyobox.jpg',
      price: 89.99,
      quantity: 25
    },
    {
      name: 'Power Rack',
      category: categories[1]._id,
      description: 'A versatile strength training equipment ideal for squats, bench presses, and pull-ups. Provides a safe environment for lifting heavy weights alone.',
      image: 'powerrack.jpg',
      price: 999.99,
      quantity: 10
    },
    {
      name: 'Leg Press Machine',
      category: categories[1]._id,
      description: 'Designed to target the quadriceps, hamstrings, and glutes. Offers support to the back while allowing heavy weights to be lifted.',
      image: 'legpressmachine.png',
      price: 1499.99,
      quantity: 8
    },
    {
      name: 'Cable Crossover Machine',
      category: categories[1]._id,
      description: 'Features multiple cable pulley settings, allowing for a variety of exercises targeting different muscle groups.',
      image: 'cablecrossover.jpg',
      price: 1699.99,
      quantity: 6
    },
    {
      name: 'Medicine Ball',
      category: categories[1]._id,
      description: 'A weighted ball ideal for a variety of strength training exercises, from squats to throws, helping to develop power and coordination.',
      image: 'medicineball.jpg',
      price: 49.99,
      quantity: 30
    },
    {
      name: 'Bench Press',
      category: categories[1]._id,
      description: 'A standard strength training equipment designed for chest press exercises, often adjustable to allow for incline and decline variations.',
      image: 'benchpress.jpg',
      price: 299.99,
      quantity: 15
    },
    {
      name: 'Pull-Up Bar',
      category: categories[1]._id,
      description: 'Designed for pull-ups and chin-ups, it strengthens the back, shoulders, and arms. Can be wall-mounted or door-mounted.',
      image: 'pullupbar.jpg',
      price: 59.99,
      quantity: 40
    },
    {
      name: 'Pec Deck Machine',
      category: categories[1]._id,
      description: 'Targets the chest muscles (pectoralis). Users push the padded levers together using their arms for resistance-based training.',
      image: 'pecdeck.jpg',
      price: 1099.99,
      quantity: 10
    },
    {
      name: 'Squat Machine',
      category: categories[1]._id,
      description: 'Offers support during squats, enabling users to lift heavier weights while minimizing the risk of injury.',
      image: 'squatmachine.jpg',
      price: 1399.99,
      quantity: 8
    },
    {
      name: 'Lat Pulldown Machine',
      category: categories[1]._id,
      description: 'Strengthens the latissimus dorsi muscles in the back. Users pull a weighted bar down using a cable system.',
      image: 'latpulldown.jpg',
      price: 1199.99,
      quantity: 12
    },
    {
      name: 'Sandbag',
      category: categories[1]._id,
      description: 'A versatile training tool filled with sand. Can be lifted, thrown, or used in functional training exercises.',
      image: 'sandbag.jpg',
      price: 79.99,
      quantity: 25
    },
    {
      name: 'Yoga Bolster',
      category: categories[2]._id,
      description: 'A firm cushioned support used for comfort in various poses, aiding in deep relaxation and stretching.',
      image: 'yogabolster.jpg',
      price: 39.99,
      quantity: 25
    },
    {
      name: 'Yoga Strap',
      category: categories[2]._id,
      description: 'Helps in achieving challenging stretches and maintaining poses, enhancing flexibility and alignment.',
      image: 'yogastrap.jpg',
      price: 14.99,
      quantity: 40
    },
    {
      name: 'Yoga Blanket',
      category: categories[2]._id,
      description: 'Provides warmth, comfort, and support in various poses. Can be used as a cushion or to cover oneself during relaxation.',
      image: 'yogablanket.jpg',
      price: 24.99,
      quantity: 30
    },
    {
      name: 'Meditation Cushion',
      category: categories[2]._id,
      description: 'Supports the hips and spine during meditation, ensuring comfort during extended sessions.',
      image: 'meditationcushion.jpg',
      price: 49.99,
      quantity: 20
    },
    {
      name: 'Aerial Yoga Hammock',
      category: categories[2]._id,
      description: 'A strong, stretchy fabric suspended from the ceiling, allowing for aerial yoga poses and deep stretches.',
      image: 'aerialhammock.jpg',
      price: 89.99,
      quantity: 15
    },
    {
      name: 'Yoga Knee Pad',
      category: categories[2]._id,
      description: 'Provides cushioning support for the knees, elbows, and wrists during challenging poses, reducing joint strain.',
      image: 'yogakneepad.jpg',
      price: 19.99,
      quantity: 35
    },
    {
      name: 'Toeless Yoga Socks',
      category: categories[2]._id,
      description: 'Offers better grip on the yoga mat, ensuring stability and preventing slips during practice.',
      image: 'toelesssocks.jpg',
      price: 12.99,
      quantity: 50
    },
    {
      name: 'Yoga Gloves',
      category: categories[2]._id,
      description: 'Enhances grip on the mat and supports the hands during weight-bearing poses.',
      image: 'yogagloves.jpg',
      price: 14.99,
      quantity: 45
    },
    {
      name: 'Yoga Headband',
      category: categories[2]._id,
      description: 'Keeps hair and sweat away from the face, ensuring comfort and focus during practice.',
      image: 'yogaheadband.jpg',
      price: 9.99,
      quantity: 60
    },
    {
      name: 'Acupressure Mat',
      category: categories[2]._id,
      description: 'Features thousands of spikes that stimulate pressure points, aiding in relaxation and promoting blood circulation.',
      image: 'acupressuremat.jpg',
      price: 29.99,
      quantity: 25
    },
    {
      name: 'Wireless Earbuds',
      category: categories[3]._id,
      description: 'Water-resistant earbuds with extended battery life, perfect for workouts and runs without the hassle of wires.',
      image: 'wirelessearbuds.jpg',
      price: 129.99,
      quantity: 35
    },
    {
      name: 'Virtual Reality Fitness System',
      category: categories[3]._id,
      description: 'Immerse yourself in a virtual workout session, combining gaming and exercise into one.',
      image: 'vrfitsystem.jpg',
      price: 399.99,
      quantity: 10
    },
    {
      name: 'Smart Water Bottle',
      category: categories[3]._id,
      description: 'Tracks your water intake and syncs with your mobile device, reminding you to stay hydrated.',
      image: 'smartwaterbottle.jpg',
      price: 49.99,
      quantity: 30
    },
    {
      name: 'Digital Jump Rope',
      category: categories[3]._id,
      description: 'A modern take on the classic workout tool, this jump rope counts skips, calories burned, and workout duration.',
      image: 'digitaljumprope.jpg',
      price: 34.99,
      quantity: 40
    },
    {
      name: 'Body Fat Analyzer',
      category: categories[3]._id,
      description: 'Measure and monitor your body composition, providing insights into body fat, muscle mass, and metabolic rate.',
      image: 'bodyfatanalyzer.jpg',
      price: 89.99,
      quantity: 25
    },
    {
      name: 'Smart Dumbbell Set',
      category: categories[3]._id,
      description: 'An adjustable weight set that tracks your sets, reps, and weight, all while syncing data to your smartphone.',
      image: 'smartdumbbell.jpg',
      price: 349.99,
      quantity: 15
    },
    {
      name: 'Posture Corrector Device',
      category: categories[3]._id,
      description: 'Wearable tech that vibrates when you slouch, helping improve posture and reduce back pain.',
      image: 'posturedevice.jpg',
      price: 79.99,
      quantity: 40
    },
    {
      name: 'Smart Kettlebell',
      category: categories[3]._id,
      description: 'Adjustable weight kettlebell that offers real-time feedback and coaching through an integrated app.',
      image: 'smartkettleball.jpg',
      price: 199.99,
      quantity: 20
    },
    {
      name: 'Creatine Monohydrate',
      category: categories[4]._id,
      description: 'Enhances exercise performance, promoting muscle growth and increasing strength. Mix with water or juice for consumption.',
      image: 'creatine.jpg',
      price: 29.99,
      quantity: 50
    },
    {
      name: 'BCAA',
      category: categories[4]._id,
      description: 'Supports muscle recovery and reduces muscle soreness. Essential for muscle growth and maintenance.',
      image: 'bcaa.jpg',
      price: 34.99,
      quantity: 45
    },
    {
      name: 'Omega-3 Fish Oil',
      category: categories[4]._id,
      description: 'Promotes heart health, supports cognitive functions, and reduces inflammation.',
      image: 'omega3.jpg',
      price: 19.99,
      quantity: 60
    },
    {
      name: 'Vitamin D3',
      category: categories[4]._id,
      description: 'Essential for bone health, immune function, and mood regulation. Especially important for those with limited sun exposure.',
      image: 'vitamind3.jpg',
      price: 14.99,
      quantity: 75
    },
    {
      name: 'Magnesium Complex',
      category: categories[4]._id,
      description: 'Supports muscle and nerve function, energy production, and aids in muscle relaxation.',
      image: 'magnesium.jpg',
      price: 17.99,
      quantity: 70
    },
    {
      name: 'ZMA (Zinc, Magnesium, Vitamin B6)',
      category: categories[4]._id,
      description: 'Enhances sleep quality and supports recovery and muscle growth. Often taken before bed.',
      image: 'zma.jpg',
      price: 24.99,
      quantity: 40
    },
    {
      name: 'Green Superfood Powder',
      category: categories[4]._id,
      description: 'A blend of greens, fruits, and veggies to boost your daily intake of essential nutrients.',
      image: 'greensuperfood.jpg',
      price: 39.99,
      quantity: 35
    },
    {
      name: 'Glucosamine & Chondroitin',
      category: categories[4]._id,
      description: 'Supports joint health and mobility, especially beneficial for those with active lifestyles.',
      image: 'glucosamine.jpg',
      price: 29.99,
      quantity: 50
    },
    {
      name: 'CLA (Conjugated Linoleic Acid)',
      category: categories[4]._id,
      description: 'Aids in fat burning and supports weight management, especially when paired with exercise.',
      image: 'cla.jpg',
      price: 26.99,
      quantity: 45
    },
    {
      name: 'Probiotics',
      category: categories[4]._id,
      description: 'Promotes gut health by supporting a balanced microbiome. Essential for digestive health and immune function.',
      image: 'probiotics.jpg',
      price: 32.99,
      quantity: 40
    },
    {
      name: 'Headgear',
      category: categories[5]._id,
      description: 'Provides protection for the head during sparring sessions, ensuring safety from punches and kicks.',
      image: 'headgear.jpg',
      price: 59.99,
      quantity: 30
    },
    {
      name: 'Hand Wraps',
      category: categories[5]._id,
      description: 'Protects hands and wrists during boxing workouts. Essential for safety when wearing boxing gloves.',
      image: 'handwraps.jpg',
      price: 12.99,
      quantity: 80
    },
    {
      name: 'Focus Mitts',
      category: categories[5]._id,
      description: 'Used by trainers for target practice, helping boxers improve their punching speed, accuracy, and technique.',
      image: 'focusmitts.jpg',
      price: 45.99,
      quantity: 50
    },
    {
      name: 'Speed Bag',
      category: categories[5]._id,
      description: 'Improves hand-eye coordination and speed. A staple in every boxing gym for skill development.',
      image: 'speedbag.jpg',
      price: 79.99,
      quantity: 35
    },
    {
      name: 'Taekwondo Sparring Gear Set',
      category: categories[5]._id,
      description: 'Includes protective gear for the chest, arms, and legs. Essential for safe sparring in Taekwondo.',
      image: 'taekwondogear.jpg',
      price: 119.99,
      quantity: 25
    },
    {
      name: 'Muay Thai Pads',
      category: categories[5]._id,
      description: 'Used by trainers for practicing punches, kicks, elbows, and knee strikes. Essential for Muay Thai training.',
      image: 'muaythaipads.jpg',
      price: 89.99,
      quantity: 30
    },

    {
      name: 'Grappling Dummy',
      category: categories[5]._id,
      description: 'Used for practicing throws, takedowns, and submissions. Essential for Judo and Brazilian Jiu-Jitsu practitioners.',
      image: 'grapplingdummy.jpg',
      price: 149.99,
      quantity: 20
    },
    {
      name: 'Kids’ Balance Beam',
      category: categories[6]._id,
      description: 'Designed for children to improve their balance and coordination. A fun way to practice gymnastic routines at home.',
      image: 'balancebeam.jpg',
      price: 49.99,
      quantity: 30
    },
    {
      name: 'Junior Exercise Ball',
      category: categories[6]._id,
      description: 'A smaller exercise ball designed for children. Great for a variety of exercises and improving core strength.',
      image: 'juniorexerciseball.jpg',
      price: 22.99,
      quantity: 40
    },
    {
      name: 'Adjustable Hula Hoop',
      category: categories[6]._id,
      description: 'A fun way for kids to improve coordination and get a cardio workout. Adjustable size for different age groups.',
      image: 'hulahoop.jpg',
      price: 15.99,
      quantity: 50
    },
    {
      name: 'Children’s Resistance Bands',
      category: categories[6]._id,
      description: 'Offering a gentle resistance suitable for kids, these bands are perfect for strength training and flexibility exercises.',
      image: 'kidsresistancebands.jpg',
      price: 14.99,
      quantity: 60
    },
    {
      name: 'Kids’ Exercise Bike',
      category: categories[6]._id,
      description: 'A scaled-down stationary bike designed for children. Features adjustable resistance for a customized workout.',
      image: 'kidsexercisebike.jpg',
      price: 139.99,
      quantity: 25
    },

    {
      name: 'Kids’ Tug of War Rope',
      category: categories[6]._id,
      description: 'A durable rope suitable for children, perfect for team games and building upper body strength.',
      image: 'tugofwarrope.jpg',
      price: 29.99,
      quantity: 35
    },
    {
      name: 'Junior Kettlebell',
      category: categories[6]._id,
      description: 'A lightweight kettlebell tailored for children. Ideal for introducing strength training in a safe manner.',
      image: 'juniorkettleball.jpg',
      price: 24.99,
      quantity: 40
    },
    {
      name: 'Kids’ Stepper',
      category: categories[6]._id,
      description: 'A mini stepper machine that allows children to mimic stair-climbing movements for a cardio workout.',
      image: 'kidsstepper.jpg',
      price: 69.99,
      quantity: 30
    },
    {
      name: 'Children’s Agility Ladder',
      category: categories[6]._id,
      description: 'A training tool designed to enhance speed, agility, and coordination. Perfect for young athletes.',
      image: 'agilityladder.png',
      price: 18.99,
      quantity: 45
    }


  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
