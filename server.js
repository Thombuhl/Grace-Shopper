/* eslint-disable */
const app = require('./app');
const ws = require('ws');
const { conn, User, Product, Discount } = require('./db');

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    require('fs').readFile(path, 'base64', (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
};
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

const setUp = async () => {
  try {
    await conn.sync({ force: true });

    const chris = await User.create({
      username: 'chris',
      password: 'chris123',
      firstName: 'Chris',
      lastName: 'Wong',
      email: 'chris@gsdt7.com',
    });
    const thomas = await User.create({
      username: 'thomas',
      password: 'thomas123',
      firstName: 'Thomas',
      lastName: 'Buhl',
      email: 'thomas@gsdt7.com',
    });
    const lorenzo = await User.create({
      username: 'lorenzo',
      password: 'lorenzo123',
      firstName: 'Lorenzo',
      lastName: 'Noel',
      email: 'lorenzo@gsdt7.com',
    });

    const doobin = await User.create({
      username: 'doobin',
      password: 'doobin123',
      firstName: 'Doobin',
      lastName: 'Lee',
      email: 'doobin@gsdt7.com',
    });
    const moe = await User.create({
      username: 'moe',
      password: 'moe_pw',
      firstName: 'Moesy',
      lastName: 'Smith',
      email: 'moe@gsdt7.com',
      addressStreet: '123 Dream Ville St',
      addressCity: 'New York',
      addressState: 'NY',
      addressZip: '10019',
      addressUnit: 'APT 5F',
      profileImage: 'data:image/jpeg;base64,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',
    });

    const lucy = await User.create({
      username: 'lucy',
      password: 'lucy_pw',
      firstName: 'Luceil',
      lastName: 'Munez',
      email: 'lucy@gsdt7.com',
    });
    const foo = await Product.create({
      name: 'Air Jordan 3 Retro Dark Iris',
      brand: 'adidas',
      size: 10,
      price: 190,
      imageLocation:
        'https://images.stockx.com/images/Air-Jordan-3-Retro-Dark-Iris.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1656390901&q=57',
      colorway: 'White/Black/Dark Iris/Cement Grey',
      silhoutte: 'Air Jordan 3 Retro',
      description:
        "The Air Jordan 3 Retro Dark Iris is a high-top sneaker and comes in a white/black/Cement Grey/purple colorway. The leather base is primarily white with purple highlights around the heel and on the ankle. The shoe also has a black interior, plus a black-and-gray elephant print overlay. The Air Jordan 3 Retro Dark Iris is completed with a white midsole and Cement Grey outsole. The shoe features the Jumpman logo on the tongue and heel, with the 'AIR' brand logo below the Jumpman.",
      gender: 'UNISEX',
      numberInStock: 58,
    });
    const bar = await Product.create({
      name: 'Nike dunk low SB Tiffany',
      brand: 'Nike',
      size: 9.5,
      price: 2450,
      imageLocation:
        'https://images.stockx.com/images/Nike-Dunk-SB-Low-Diamond-Supply-Co-Tiffany-Product.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1606324850&q=57',
      colorway: 'Aqua/Black/White/Silver',
      silhoutte: 'Nike dunk low SB',
      description:
        'Dressed in crocodile embossed leather with vibrant Tiffany Blue-like panels, Tershay described his SB Dunk as the most hyped and luxurious shoe at the time. Contrasting with the black crocodile and blue panels is a metallic silver Swoosh. The tongue-tag also features the Diamond Supply Co. diamond logo.',
      gender: 'UNISEX',
      numberInStock: 54,
    });
    const bzz = await Product.create({
      name: 'Nike dunk low SB Heineken',
      brand: 'Nike',
      size: 9,
      price: 4499,
      imageLocation:
        'https://images.stockx.com/images/Nike-Dunk-SB-Low-Heineken-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607052195',
      colorway: 'Classic Green/Black/White/Red',
      silhoutte: 'Nike dunk low SB',
      description:
        'The Dunk Low Pro SB Heineken takes inspiration from the signature green bottles used by the Dutch beer brand. The low-top sports a white leather upper with green nubuck overlays and a black suede Swoosh. The color scheme up top is repeated on the shoe tooling, featuring a green midsole and crisp white outsole.',
      gender: 'UNISEX',
      numberInStock: 54,
    });
    const bfoo = await Product.create({
      name: 'Nike dunk low SB Paris',
      brand: 'Nike',
      size: 11,
      price: 11000,
      imageLocation:
        'https://images.stockx.com/images/Nike-Dunk-SB-Low-Paris.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1606325852&q=57',
      colorway: 'Rope/Special Cardinal',
      silhoutte: 'Nike dunk low SB',
      description:
        'As a way to champion the imprint some of the worlds most recognizable cities have had on skate culture, the Paris Dunk Low Pro SB was intended to release exclusively at the “White Dunk: Evolution of an Icon” exhibit in Paris. Due to fervorous demand, the collaboration with French Painter Bernard Buffet was delayed and the limited bespoke pairs were circulated through select accounts.',
      gender: 'UNISEX',
      numberInStock: 54,
    });
    const cfoo = await Product.create({
      name: 'Nike dunk low SB Tokyo',
      brand: 'Nike',
      size: 11,
      price: 9800,
      imageLocation:
        'https://images.stockx.com/images/Nike-SB-Dunk-Low-Tokyo-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607061674',
      colorway: 'Muslin/Off White/Brown',
      silhoutte: 'Nike dunk low SB',
      description:
        'The Nike Dunk SB Low Pro SB Tokyo was released as apart of Nikes White Cities Series. If all Dunks had one thing in common this would be it. The official shoe of the 2004 Tokyo White Dunk Exhibit, these are limited to 202 pairs, and were only sold through lottery. Being one of the more philosophical Dunks, the name on the heel is missing on purpose.',
      gender: 'UNISEX',
      numberInStock: 54,
    });
    const dfoo = await Product.create({
      name: 'Nike dunk low SB London',
      brand: 'Nike',
      size: 9.5,
      price: 18039,
      imageLocation:
        'https://images.stockx.com/images/Nike-SB-Dunk-Low-London-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607051613',
      colorway: 'Soft Grey/Magnet',
      silhoutte: 'Nike dunk low SB',
      description:
        'Released as part of Nike SBs White Dunk: Evolution of an Icon event in the early 2000s, this London SB Dunk Low keeps it simple with a suede upper donning various grey shades along with an embroidery of River Thames on a side heel panel.',
      gender: 'UNISEX',
      numberInStock: 54,
    });
    const efoo = await Product.create({
      name: 'Nike dunk low SB Pigeon',
      brand: 'Nike',
      size: 9.5,
      price: 45400,
      imageLocation:
        'https://images.stockx.com/images/Nike-Dunk-SB-Low-Staple-NYC-Pigeon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322680',
      colorway: 'Medium Grey/Dark Grey/White/Orange',
      silhoutte: 'Nike dunk low SB',
      description:
        'The shoe that sparked riots on the streets of New York City—and received a subsequent mention on the front page of the New York Post—the Jeff Staple x Dunk Low Pro SB Pigeon released in January 2005 as part of Nike SB White Dunk City Series. The low-top features two shades of grey on the upper, accented with a white Swoosh and pops of red on the lining and outsole. The all-important embroidered pigeon adorns the lateral heel.In the list of craziest sneaker releases, the Jeff Staple-designed Nike SB Dunk Low NYC Pigeon is near the top. When the Pigeon Dunks released back in 2005, word spread and lines formed outside of Reed Space, Jeff Staples Lower East Side shop. By the time release day rolled around, the crowd had grown to such a size that New York City police had to be called in to keep things in order and make sure those who purchased could get home safely. All the attention landed the Pigeon Dunk release on the cover of the New York Daily News paper the next day. With only 150 pairs produced, the Pigeon SB Dunk is one of the most popular Nike SB releases of all time and even without the exclusivity, the colorway is one of the best. Inspired by the most commonly-found bird in NYC, the Dunk Low is officially colored as Medium Grey/White-Dark Grey, but its the combination of grey on the upper, a white Swoosh, an orange pigeon foot-like outsole, and the stitched-in pigeon on the heel that make this colorway one that every sneaker enthusiast would like to get their hands on. Not only did the Nike SB Dunk Low NYC Pigeon help bring energy to Nike Skateboarding back in 2005, it started a long line of successful pigeon-inspired sneakers from NYC Jeff Staple.',
      gender: 'UNISEX',
      numberInStock: 54,
    });
    await Discount.create({
      code: '10Dollar',
      discountAmount: 10,
    });

    await Discount.create({
      code: '20Percent',
      discountAmount: 0.2,
    });

    await Discount.create({
      code: 'Fullstack',
      discountAmount: 0.3,
    });
    await lucy.addToCart({ product: foo, quantity: 3 });
    await lucy.addToCart({ product: bar, quantity: 4 });
    await moe.addToCart({ product: dfoo, quantity: 7 });
    await chris.addToCart({ product: bfoo, quantity: 4 });
    await chris.addToCart({ product: cfoo, quantity: 4 });
    await chris.addToCart({ product: dfoo, quantity: 4 });
    await chris.addToCart({ product: efoo, quantity: 4 });
    await thomas.addToCart({ product: bar, quantity: 4 });
    await lorenzo.addToCart({ product: bzz, quantity: 4 });
    await doobin.addToCart({ product: cfoo, quantity: 4 });
    const port = process.env.PORT || 3000;
    const server = app.listen(port, () =>
      console.log(`listening on port ${port}`)
    );

    let sockets = [];
    const socketServer = new ws.WebSocketServer({
      server,
    });
    socketServer.on('connection', (socket) => {
      sockets.push(socket);
      socket.on('message', (data) => {
        sockets
          .filter((s) => s !== socket)
          .forEach((socket) => {
            socket.send(data.toString());
          });
      });
      socket.on('close', () => {
        sockets = sockets.filter((s) => s !== socket);
      });
    });
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
          function assignGender() {
            const rand = Math.ceil(Math.random() * 3);
            if (rand === 1) return 'MENS';
            else if (rand === 2) return 'WOMENS';
            else return 'UNISEX';
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
              gender: assignGender(),
            }),
          ]);
        });
    });
  } catch (ex) {
    console.log(ex);
  }
};

setUp();
