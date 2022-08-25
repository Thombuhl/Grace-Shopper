/* eslint-disable */
const app = require('./app');
const { conn, User, Product, Discount } = require('./db');

const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

const setUp = async () => {
  try {
    await conn.sync({ force: true });

    await User.create({
      username: 'chris',
      password: 'chris123',
      email: 'chris@gsdt7.com',
    });
    await User.create({
      username: 'thomas',
      password: 'thomas123',
      email: 'thomas@gsdt7.com',
    });
    await User.create({
      username: 'lorenzo',
      password: 'lorenzo123',
      email: 'lorenzo@gsdt7.com',
    });
    await User.create({
      username: 'doobin',
      password: 'doobin123',
      email: 'doobin@gsdt7.com',
    });
    const moe = await User.create({
      username: "moe",
      password: "moe_pw",
      firstName: 'Moesy',
      lastName: 'Smith',
      email: "moe@gsdt7.com",
      addressStreet: '123 Dream Ville St',
      addressCity: 'New York',
      addressState: 'NY',
      addressZip: '10019',
      addressUnit: 'APT 5F',
    });
    const lucy = await User.create({
      username: "lucy",
      password: "lucy_pw",
      firstName: 'Luceil',
      lastName: 'Munez',
      email: "lucy@gsdt7.com",
    });
    const foo = await Product.create({ 
      name: "adidas NMD R1 V2",
      brand: "adidas",
      size: 3,
      price: 140,
      imageLocation: "https://images.stockx.com/images/adidas-NMD-R1-V2-United-By-Sneakers-Munich.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643667443",
      colorway: "Black/Carbon/Solar Red",
      silhoutte: "adidas NMD R1 V2",
      description: "Giving the nod to Munich, the NMD_R1 V2 'United By Sneakers - Munich' released as part of a pack paying tribute to host cities of the Olympic Games. The shoe features the German national colors throughout its performance construction, which includes a knit build on the upper. Underfoot, the color-blocked midsole provides cushioning, with a Munich callout on the forefoot EVA plug.",
      gender: 'UNISEX',
      numberInStock: 58,
    });
    const bar = await Product.create({ 
      name: "adidas Ultra Boost Mid",
      brand: "adidas",
      size: 15,
      price: 240,
      imageLocation: "https://images.stockx.com/images/Adidas-Ultra-Boost-Mid-Packer-Shoes-x-Solebox-Silfra-Rift-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1612545881",
      colorway: "Core Black/Light Grey/Petrol",
      silhoutte: "adidas Ultra Boost Mid",
      description: "With this launch in November 2017, as part of the Sneaker Exchange brand, adidas Consortium brought together Solexbox and Packer Shoes. This Ultra Boost Mid features a Silfra Rift-inspired layout where the North American and Eurasian tectonic plates intersect on the Mid-Atlantic Ridge. It is also finished in black-grey gradient coloring, with pink and Photo Blue speckles accented.",
      gender: "UNISEX",
      numberInStock: 54,
    });
    const bzz = await Product.create({ 
      name: "adidas Ultra Boost Mid",
      brand: "adidas",
      size: 15,
      price: 240,
      imageLocation: "https://images.stockx.com/images/Adidas-Ultra-Boost-Mid-Packer-Shoes-x-Solebox-Silfra-Rift-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1612545881",
      colorway: "Core Black/Light Grey/Petrol",
      silhoutte: "adidas Ultra Boost Mid",
      description: "With this launch in November 2017, as part of the Sneaker Exchange brand, adidas Consortium brought together Solexbox and Packer Shoes. This Ultra Boost Mid features a Silfra Rift-inspired layout where the North American and Eurasian tectonic plates intersect on the Mid-Atlantic Ridge. It is also finished in black-grey gradient coloring, with pink and Photo Blue speckles accented.",
      gender: "UNISEX",
      numberInStock: 54,
    });
    const bfoo = await Product.create({ 
      name: "adidas Ultra Boost Mid",
      brand: "adidas",
      size: 15,
      price: 240,
      imageLocation: "https://images.stockx.com/images/Adidas-Ultra-Boost-Mid-Packer-Shoes-x-Solebox-Silfra-Rift-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1612545881",
      colorway: "Core Black/Light Grey/Petrol",
      silhoutte: "adidas Ultra Boost Mid",
      description: "With this launch in November 2017, as part of the Sneaker Exchange brand, adidas Consortium brought together Solexbox and Packer Shoes. This Ultra Boost Mid features a Silfra Rift-inspired layout where the North American and Eurasian tectonic plates intersect on the Mid-Atlantic Ridge. It is also finished in black-grey gradient coloring, with pink and Photo Blue speckles accented.",
      gender: "UNISEX",
      numberInStock: 54,
    });
    
    await Discount.create({
      code: '10Dollar',
      discountAmount: 10
    })
    
    await Discount.create({
      code: '20Percent',
      discountAmount: .20
    })
    
    await Discount.create({
      code: 'Fullstack',
      discountAmount: .30
    })

    await lucy.addToCart({ product: foo, quantity: 3 });
    await lucy.addToCart({ product: bar, quantity: 4 });
    await moe.addToCart({ product: bar, quantity: 7 });
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));

    await sneaks.getProducts('shoes', 300, function (er, products) {
      if (er) {
        console.log('error');
      }
      
      // Iterate through the products and return only the information we want
      products
        .map((product) => {
          return {
            name: product.make,
            price: product.retailPrice,
            colorway: product.colorway,
            brand: product.brand,
            imageLocation: product.thumbnail,
            description: product.description,
            silhoutte: product.silhoutte,
          };
        })
        // Filter to make sure each shoe has a discription
        .filter((shoe) => shoe.description !== '')
        // Create a Product instance of each shoe
        .map(async (shoe) => {
          function assignGender(){
            const rand = Math.ceil(Math.random()*3)
            if(rand === 1) return 'MENS'
            else if(rand === 2) return 'WOMENS'
            else return 'UNISEX'
          }
          await Promise.all([
            Product.create({
              name: shoe.name,
              brand: shoe.brand,
              size: Math.ceil(Math.random() * 15),
              price: shoe.price,
              imageLocation: shoe.imageLocation,
              colorway: shoe.colorway,
              description: shoe.description,
              numberInStock: Math.ceil(Math.random() * 100),
              silhoutte: shoe.silhoutte.split(' ').join(''),
              gender: assignGender()
            }),
          ]);
        });
    });
  } catch (ex) {
    console.log(ex);
  }
};

setUp();
