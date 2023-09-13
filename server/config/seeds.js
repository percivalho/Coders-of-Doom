const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {
      name: 'Cardio Equipment',
      image: 'cardio.jpg'
    },
    {
      name: 'Strength Training',
      image: 'strength.jpg'
    },
    {
      name: 'Yoga',
      image: 'yoga.jpg',
    },
    {
      name: 'Fitness Tech',
      image: 'tech.jpg'
    },
    {
      name: 'Nutritional Supplements',
      image: 'supplements.jpg'
    },
    {
      name: 'Boxing & Martial Arts',
      image: 'boxing.jpg'
    },
    {
      name: 'Fitness for Kids',
      image: 'kid.jpg'
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

  /*await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');*/

  process.exit();
});
