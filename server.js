const app = require('./app');
const { conn, User, Product } = require('./db');

const SneaksAPI = require('sneaks-api')
const sneaks = new SneaksAPI()

const setUp = async()=> {
  try {
    await conn.sync({ force: true });
    await User.create({ username: 'moe', password: 'moe_pw', email: 'moe@gsdt7.com'});
    await User.create({ username: 'chris', password: 'chris123', email: 'chris@gsdt7.com'});
    await User.create({ username: 'thomas', password: 'thomas123', email: 'thomas@gsdt7.com'});
    await User.create({ username: 'lorenzo', password: 'lorenzo123', email: 'lorenzo@gsdt7.com'});
    await User.create({ username: 'doobin', password: 'doobin123', email: 'doobin@gsdt7.com'});
    const lucy = await User.create({ username: 'lucy', password: 'lucy_pw', email: 'lucy@gsdt7.com'});
    const foo = await Product.create({ name: 'foo', brand:'acme' }); 
    const bar = await Product.create({ name: 'bar' }); 
    await lucy.addToCart({ product: foo, quantity: 3 });
    await lucy.addToCart({ product: bar, quantity: 4 });
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));

    await sneaks.getProducts('shoes', 100, function(er, products){
      if(er){
        console.log('error')
      }
    // Iterate through the products and return only the information we want
      products.map(product => {
        return {
          name: product.make,
          price: product.retailPrice,
          colorway: product.colorway,
          brand: product.brand,
          imageLocation: product.thumbnail,
          description: product.description,
          silhoutte: product.silhoutte
        }
      })
      // Filter to make sure each shoe has a discription
        .filter(shoe => shoe.description !== '')
      // Create a Product instance of each shoe
        .map(async(shoe) => {
        await Promise.all([
          Product.create({
            name:shoe.name,
            brand: shoe.brand,
            size: Math.ceil(Math.random()*15),
            price: shoe.price,
            imageLocation: shoe.imageLocation,
            colorway: shoe.colorway,
            description: shoe.description,
            numberInStock: Math.ceil(Math.random()*100),
            silhoutte: shoe.silhoutte
          })
        ])
      })
    })
  }
  catch(ex){
    console.log(ex);
  }
};

setUp();
