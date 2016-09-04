const oboe = require('oboe')
const stream = require('stream')
const wait = require('co-wait')

module.exports = {
  get: {
    /**
  	 * @api {get} /api/v1/menu Get Menu
  	 * @apiName GetMenu
  	 * @apiGroup Menu
  	 *
  	 * @apiSuccess {Array} items Menu items
  	 */

    '/api/v1/menu': function * () {
      this.response.success([
        {
          name: 'Disappearing Chocolate Cake',
          price: 12.00,
          type: 'cakes',
          description: `Three layers of dense chocolate cake, frosted
          and filled with rich chocolate buttercream. It will be gone before
          you can say 'Abracadabra'.`,
          image_url: 'https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg',
          is_vegan: false
        },
        {
          name: 'Macarons Parisiens',
          price: 12.00,
          type: 'cookies',
          description: `Macarons are an ultra-light confectionery made from egg whites,
          sugar, ground almonds and food coloring, then served in a rainbow of flavors,
          everything from café to pistachio to lavender.`,
          image_url: 'http://parisdesignagenda.com/wp-content/uploads/2015/01/macarons-feature-best-parisien-food-top-specialties-paris-944x390.jpg',
          is_vegan: true
        },
        {
          name: 'Pumpkin Loaf',
          price: 12.00,
          type: 'breads',
          description: `One loaf of amazingly moist, sweet, and pumpkin spiced filled goodness.
          This will take you to your Autumn happy place at any of time of the year.
          Made with a blend of spices, pumpkin, sweet butter, and a hint of apples. Who could resist this?`,
          image_url: 'http://www.onceuponachef.com/images/2009/09/Perfect-Pumpkin-Bread.jpg',
          is_vegan: false
        },
        {
          name: 'Raspberry Fudge Brownies',
          price: 12.00,
          type: 'brownies',
          description: `You can't pass up on this sweet treat. It makes the perfect token
          of love for your sweetheart or a fun gift for your friend or child.
          But don't forget to treat yourself!`,
          image_url: 'http://iambaker.net/wp-content/uploads/2014/06/brownie-mix-smaller.jpg',
          is_vegan: false
        },
        {
          name: 'Marzipan Fruit Candies',
          price: 12.00,
          type: 'candy',
          description: `Beautiful assortment of peach, lemon, lime, orange, mango and strawberry
          flavors in yellow, orange, green and red colored Marzipans. Each piece is individually
          placed in cake cups. Comes in an elegant gold box which makes it a great gift for marzipan lovers.`,
          image_url: 'http://media.merchantcircle.com/42984913/marzipan%20fruits%201_full.jpeg',
          is_vegan: true
        },
        {
          name: 'Vanilla Cake',
          price: 12.00,
          type: 'cakes',
          description: `Rich yet fluffy, dense and moist, this is the classic white cake of your dreams.
          Made by hand at a small family-owned Florida cake boutique, the four layers of this cake have
          the heft of a pound cake, alternated with ultra-rich vanilla buttercream.
          The whole thing is then covered in vanilla buttercream frosting.`,
          image_url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDkstqZACuXoWSqzFZWEFEDJSPJAB3S1yuLFssXtAuRK3NyIQ&usqp=CAE',
          is_vegan: false
        }
      ])
    },

    '/autoreload/:timeout': function * (next) {
      if (process.env.NODE_ENV === 'development') yield wait(this.params.timeout)
      else this.response.success("Autoreload disabled in this environment.")
    },

    '/docs': function * () {
      this.redirect(`http://127.0.0.1:${parseInt(process.env.PORT) + 1}`)
    },

    '*': function * (next) {
      if ((this.url.indexOf('/api') === -1) && (this.url.indexOf('.') === -1)) {
        this.response.serveFile('./client/index.html')
      }
      else yield next
    }
  }
}
