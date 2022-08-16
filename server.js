const app = require('./app');
const { conn, User, Product } = require('./db');

const SneaksAPI = require('sneaks-api')
const sneaks = new SneaksAPI()

const setUp = async()=> {
  try {
    await conn.sync({ force: true });
    await User.create({ username: 'moe', password: 'moe_pw'});
    await User.create({ username: 'chris', password: 'chris123'});
    await User.create({ username: 'thomas', password: 'thomas123'});
    await User.create({ username: 'lorenzo', password: 'lorenzo123'});
    await User.create({ username: 'doobin', password: 'doobin123'});
    const lucy = await User.create({ username: 'lucy', password: 'lucy_pw'});
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
      products.map(product => {
        return {
          name: product.make,
          price: product.retailPrice,
          colorway: product.colorway,
          brand: product.brand,
          imageLocation: product.thumbnail,
          description: product.description
        }
      })
        .filter(shoe => shoe.description !== '')
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
            numberInStock: Math.ceil(Math.random()*100)
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
