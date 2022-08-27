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
